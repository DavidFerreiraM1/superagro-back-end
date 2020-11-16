import Router from 'express';
import createAnimalController from './animal/controllers/create-animal-controller';
import getAnimalController from './animal/controllers/get-animal-controller';

const router = Router();

router.get('/', getAnimalController.run);
router.post('/', createAnimalController.run);

export default router;