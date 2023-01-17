import { Router } from 'express';
import { getData } from '../data/dataDriver.js';
const certificateRouter = Router();

certificateRouter.get('/', async (req, res) => {
    res.send(await getData('certificates'))
})

export default certificateRouter;