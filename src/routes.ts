import Router from 'express';
import getAnimalController from './animal/controllers/get-animal-controller';

const router = Router();

router.get('/', getAnimalController.run);

export default router;