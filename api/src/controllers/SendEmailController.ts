import { Request, Response } from 'express';
import { getCustomRepository } from "typeorm";
import path from 'path';

import { SurveyRepository } from "../repositories/SurveyRepository";
import { SurveysUsersRepository } from "../repositories/SurveysUsersRepository";
import { UsersRepository } from "../repositories/UsersRepository";
import SendMailServices from "../services/SendMailServices";
import { AppError } from '../Errors/AppError';


class SendEmailController {
  async execute(request: Request, response: Response){
    const npsPath = path.resolve(__dirname, "..", "views", "emails", "npsMail.hbs");
    const { email, survey_id } = request.body;

    const usersRepository = getCustomRepository(UsersRepository);
    const surveyRepository = getCustomRepository(SurveyRepository);
    const surveyUsersRepository = getCustomRepository(SurveysUsersRepository);

    const userAlreadyExists = await usersRepository.findOne({email});

    if (!userAlreadyExists){
      throw new AppError("User does not exists");
    }

    const survey = await surveyRepository.findOne({id: survey_id});

    if (!survey){
      throw new AppError("Survey does not exists");
    }

    const surveyUserAlreadyExists = await surveyUsersRepository.findOne({
      where: {user_id: userAlreadyExists.id, value: null},
      relations: ["user", "survey"]
    })

    const variables = {
      name: userAlreadyExists.name,
      title: survey.title,
      description: survey.description,
      id: "",
      link: process.env.URL_MAIL
    }

    if (surveyUserAlreadyExists){
      variables.id = surveyUserAlreadyExists.id;
      await SendMailServices.execute(email, survey.title, variables, npsPath);
      
      return response.status(201).json(surveyUserAlreadyExists);
    }

    //Salvar as informaçoes na tabela surveyUsers
    const surveyUser = surveyUsersRepository.create({
      user_id: userAlreadyExists.id,
      survey_id
    });
    await surveyUsersRepository.save(surveyUser);
    
    variables.id = surveyUser.id;
    //Enviar o email para o usuario
    await SendMailServices.execute(email, survey.title, variables, npsPath);

    return response.status(201).json(surveyUser);
  }
}

export { SendEmailController };