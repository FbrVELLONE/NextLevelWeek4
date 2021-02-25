import { Request, Response } from 'express';
import { getCustomRepository } from "typeorm";
import path from 'path';

import { SurveyRepository } from "../repositories/SurveyRepository";
import { SurveysUsersRepository } from "../repositories/SurveysUsersRepository";
import { UsersRepository } from "../repositories/UsersRepository";
import SendMailServices from "../services/SendMailServices";


class SendEmailController {
  async execute(request: Request, response: Response){
    const npsPath = path.resolve(__dirname, "..", "views", "emails", "npsMail.hbs");
    const { email, survey_id } = request.body;

    const usersRepository = getCustomRepository(UsersRepository);
    const surveyRepository = getCustomRepository(SurveyRepository);
    const surveyUsersRepository = getCustomRepository(SurveysUsersRepository);

    const userAlreadyExists = await usersRepository.findOne({email});

    if (!userAlreadyExists){
      return response.status(400).json({
        error: "User does not exists",
      });
    }

    const survey = await surveyRepository.findOne({id: survey_id});

    const variables = {
      name: userAlreadyExists.name,
      title: survey.title,
      description: survey.description,
      user_id: userAlreadyExists.id,
      link: process.env.URL_MAIL
    }

    if (!survey){
      return response.status(400).json({
        error: "Survey does not exists",
      });
    }

    const surveyUserAlreadyExists = await surveyUsersRepository.findOne({
      where: [{user_id: userAlreadyExists.id}, {value: null}],
      relations: ["user", "survey"]
    })

    if (surveyUserAlreadyExists){
      await SendMailServices.execute(email, survey.title, variables, npsPath);
      
      return response.status(201).json(surveyUserAlreadyExists);
    }

    //Salvar as informaçoes na tabela surveyUsers
    const surveyUser = surveyUsersRepository.create({
      user_id: userAlreadyExists.id,
      survey_id
    });
    await surveyUsersRepository.save(surveyUser);

    //Enviar o email para o usuario
    await SendMailServices.execute(email, survey.title, variables, npsPath);

    return response.status(201).json(surveyUser);
  }
}

export { SendEmailController };