import { Request, Response } from "express";
import { getCustomRepository, Not, IsNull } from "typeorm";
import { SurveysUsersRepository } from "../repositories/SurveysUsersRepository";

/**
 * Detratores = 0-6
 * passivos = 7-8
 * promotores = 9-10
 * nps = (Numero promotores - numero detratores) / (numero total) * 100;
 */
class NpsController{
  async execute(request: Request, response: Response){
    const { survey_id } = request.params;

    const surveysUsersRepository = getCustomRepository(SurveysUsersRepository);

    const surveyUsers = await surveysUsersRepository.find({
      survey_id,
      value: Not(IsNull())
    });

    const detractor = surveyUsers.filter(survey => {
      return (survey.value >= 0 && survey.value <= 6)
    }).length;

    const promoters = surveyUsers.filter(
      (survey) => survey.value >=9 && survey.value <=10
    ).length;

    const passives = surveyUsers.filter(survey =>{
      return (survey.value >=7 && survey.value <= 8)
    }).length;

    const totalAnswers = surveyUsers.length;
    const calculate = Number(((promoters - detractor)/totalAnswers *100).toFixed(2));

    return response.json({
      detractor,
      promoters,
      passives,
      totalAnswers,
      nps: calculate
    });
  }
}

export { NpsController };