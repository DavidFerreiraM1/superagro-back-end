import { Request, Response } from "express";
import animalRepository from "../../database/repository/animal-repository";
import { response } from "../../utils/http-response";

class RemoveAnimalController {
  async run(req: Request, res: Response): Promise<Response> {
    const { params } = req;
    try {
      await animalRepository.remove(params.id);
      return res.status(200).send(response(null, true, null));
    } catch (err) {
      return res.status(500).send(response(null, false, err));
    }
  }
}

export default new RemoveAnimalController();
