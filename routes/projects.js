import { Router } from 'express';
import getData from '../data/dataDriver.js';
const projectRouter = Router();

projectRouter.get('/', async (req, res) => {
    res.send(await getData('test'))
})

export default projectRouter;