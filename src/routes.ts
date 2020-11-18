import Router from 'express';
import createAnimalController from './animal/controllers/create-animal-controller';
import getAnimalController from './animal/controllers/get-animal-controller';
import removeAnimalController from './animal/controllers/remove-animal-controller';
import updateAnimalController from './animal/controllers/update-animal-controller';

const router = Router();

router.get('/', getAnimalController.run);
router.post('/', createAnimalController.run);
router.put('/:id',updateAnimalController.run);
router.delete('/:id', removeAnimalController.run);

export default router;