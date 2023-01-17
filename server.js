import dotenv from 'dotenv';
dotenv.config();
import express, { json } from 'express';
import projectRouter from './routes/projects.js';
import certificateRouter from './routes/certificates.js';
const app = express();
const port = process.env.PORT || 3000;

app.use(json());
app.use((req, res, next) => {
    const apiKey = req.body.apiKey;
    if (!apiKey || apiKey !== process.env.API_KEY) {
        res.status(401).json({
            error: 'Unauthorized use of API'
        })
    } else {
        next();
    }
})

app.use('/projects', projectRouter);
app.use('/certificates', certificateRouter);

app.listen(port, () => {
    console.log(`👂 Server listening on port ${port}...`)
})