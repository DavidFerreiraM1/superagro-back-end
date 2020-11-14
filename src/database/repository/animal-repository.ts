import { Animal } from '../models';

class AnimalRepository {
  async getList(): Promise<Animal[]> {
    try {
      const animalList = await Animal.findAll();
      return animalList;
    } catch (err) {
      throw new Error(err);
    }
  }
  async getbyId(id: string): Promise<Animal | null> {
    try {
      const animal = await Animal.findOne({ where: { id } });
      return animal;
    } catch(err) {
      throw new Error(err);
    }
  }
}

export default new AnimalRepository();
