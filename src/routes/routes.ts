import { Router } from 'express';
const routes: Router = Router();
import { TokenValidation } from '../libs/verifyToken';

import { signin } from '../controllers/auth.controller';
import { createUser, getUser, getUsers, updateUser, deleteUser } from '../controllers/user.controller'
import { createExercise, getExercise, getExercises, updateExercise, deleteExercise } from '../controllers/exercise.controller'
import { createAnamnesis, getAllAnamnesis, getAnamnesis, updateAnamnesis, deleteAnamnesis} from '../controllers/anamnesis.controller'

// auth
routes.post('/signin', signin)

// user
routes.post('/user', TokenValidation, createUser)
    .get('/user', TokenValidation, getUsers)
    .get('/user/:userId', TokenValidation, getUser)
    .patch('/user/:userId', TokenValidation, updateUser)
    .delete('/user/:userId', TokenValidation, deleteUser)

// exercises
routes.post('/user/:userId/exercises', TokenValidation, createExercise)
    .get('/user/:userId/exercises', TokenValidation, getExercises)
    .get('/user/:userId/exercises/:exerciseId', TokenValidation, getExercise)
    .patch('/user/:userId/exercises/:exerciseId', TokenValidation, updateExercise)
    .delete('/user/:userId/exercises/:exerciseId', TokenValidation, deleteExercise)

// anamnesis
routes.post('/user/:userId/anamnesis', TokenValidation, createAnamnesis)
    .get('/user/:userId/anamnesis', TokenValidation, getAllAnamnesis)
    .get('/user/:userId/anamnesis/:anamnesisId', TokenValidation, getAnamnesis)
    .patch('/user/:userId/anamnesis/:anamnesisId', TokenValidation, updateAnamnesis)
    .delete('/user/:userId/anamnesis/:anamnesisId', TokenValidation, deleteAnamnesis)


export default routes;