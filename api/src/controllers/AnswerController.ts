import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { AppError } from "../Errors/AppError";
import { SurveysUsersRepository } from "../repositories/SurveysUsersRepository";


class AnswerController {

  //http://localhost:3333/answers/5?u=1bfb1758-7f59-4352-ab59-dbd74e6a5f13
  async execute(request: Request, response: Response){
    const { value } = request.params;
    const { u } = request.query;

    const surveysUsersRepository = getCustomRepository(SurveysUsersRepository);

    const surveyUser = await surveysUsersRepository.findOne({
      id: String(u),
    });

    if (!surveyUser){
      throw new AppError("Survey User does not exists!");
      // return response.status(400).json({
      //   error: "Survey User does not exists!"
      // });
    }

    surveyUser.value = Number(value);

    await surveysUsersRepository.save(surveyUser);

    return response.status(200).json(surveyUser);
  }
}

export { AnswerController };