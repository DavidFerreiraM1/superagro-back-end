import { Request, Response } from "express";
import animalRepository from "../../database/repository/animal-repository";
import { response } from "../../utils/http-response";

class UpdateAnimalController {
  async run(req: Request, res: Response): Promise<Response> {
    const { params, body } = req;
    try {
      const data = await animalRepository.update(params.id, body);
      return res.status(200).send(response(data, true, null));
    
    } catch (err) {
      return res.status(500).send(response(null, false, err));
    }
  }
}

export default new UpdateAnimalController();