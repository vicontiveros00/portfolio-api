import { Router } from 'express';
import { getData, addNewEntry, deleteEntry } from '../data/dataDriver.js';
const certificateRouter = Router();

certificateRouter.get('/', async (req, res) => {
    try {
        const data = await getData('certificates');
        res.send(data);
    } catch (err) {
        res.status(500).json({
            error: err.message
        })
    }
})

certificateRouter.post('/', async (req, res) => {
    try {
        const data = req.body.certificate || 'error';
        const response = await addNewEntry('certificates', data);
        if (response.error) {
            res.status(500).json({
                error: response.error
            })
        } else {
            res.status(201).json({
                message: response.message
            })
        }
    } catch (err) {
        res.status(500).json({
            error: err.message
        });
    }
})

certificateRouter.delete('/:id', async(req, res) => {
    try {
        const data = req.params.id
        const response = await deleteEntry('certificates', data);
        if (response?.message.includes('Deletion successful.')) {
            res.status(200).json({
                message: response.message
            })
        } else {
            res.status(404).json({
                message: response.message
            })
        }
    } catch (err) {
        res.status(500).json({
            error: err.message
        })
    }
})

export default certificateRouter;