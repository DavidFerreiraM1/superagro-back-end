import { Request, Response } from "express";
import animalRepository from "../../database/repository/animal-repository";
import { response } from "../../utils/http-response";

class createAnimalController {
  async run(req: Request, res: Response): Promise<Response> {
    const { body } = req;
    try {
      const result = await animalRepository.create(body);
      return res.status(200).send(response(result, true, null));
    
    } catch (err) {
      return res.status(500).send(response(null, false, err));
    }
  }
}

export default new createAnimalController();