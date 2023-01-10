import { Router } from 'express';
import getData from '../data/dataDriver.js';
const projectRouter = Router();

projectRouter.get('/', async (req, res) => {
    res.send(await getData('projects'))
})

export default projectRouter;