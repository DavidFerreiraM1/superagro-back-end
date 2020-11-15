import { Request, Response } from "express";
import animalRepository from "../../database/repository/animal-repository";
import { response } from "../../utils/http-response";

class GetAnimalController {
  async run(req: Request, res: Response): Promise<Response> {
    const { query } = req;
    try {
      if (query.id) {
        const id: any = query.id;
        const data = await animalRepository.getbyId(id);
        return res.status(200).send(response(data, true, null));
      }

      const data = await animalRepository.getList();
      return res.status(200).send(response(data, true, null));
    
    } catch (err) {
      return res.status(500).send(response(null, false, err));
    }
  }
}

export default new GetAnimalController();