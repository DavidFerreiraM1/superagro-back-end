import { Request, Response } from "express";
import animalRepository from "../../database/repository/animal-repository";

class GetAnimalController {
  async run(req: Request, res: Response): Promise<Response> {
    const { query } = req;
    try {
      if (query.id) {
        const id: any = query.id;
        const data = await animalRepository.getbyId(id);
        return res.status(200).send(data);
      }

      const data = await animalRepository.getList();
      return res.status(200).send(data);
    
    } catch (err) {
      return res.status(500).send(err);
    }
  }
}

export default new GetAnimalController();