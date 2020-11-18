import { IAnimal } from '../../animal/interfaces/animal';
import { Animal } from '../models';

class AnimalRepository {
  async getList(): Promise<Animal[]> {
    try {
      const animalList = await Animal.findAll({ where: { active: true } });
      return animalList;
    } catch (err) {
      throw new Error(err);
    }
  }
  async getbyId(id: string): Promise<Animal | null> {
    try {
      const animal = await Animal.findOne({ where: { id, active: true } });
      return animal;
    } catch(err) {
      throw new Error(err);
    }
  }
  async create(values: IAnimal): Promise<Animal | null> {
    try {
      const animal = await Animal.create(values);
      return animal;
    } catch (err) {
      throw new Error(err);
    }
  }

  async update(id: string, values: IAnimal): Promise<IAnimal | null> {
    try {
      await Animal.update(values, { where: { id } });
      const updatedAnimal = await Animal.findOne({ where: { id } })
      return updatedAnimal;
    } catch (err) {
      throw new Error(err)
    }
  }

  async remove(id: string): Promise<void> {
    try {
      await Animal.update({ active: false }, { where: { id } });
    } catch (err) {
      throw new Error(err);
    }
  }
}

export default new AnimalRepository();
