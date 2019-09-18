import { Router } from 'express';
import { list, create, getOne, updateOne, deleteOne } from './movie.controller';

const router = Router();

router
    .route('/')
    .get(list)
    .post(create)

router
    .route('/:id')
    .get(getOne)
    .put(updateOne)
    .delete(deleteOne)

export default router;