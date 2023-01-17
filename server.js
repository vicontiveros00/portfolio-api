import dotenv from 'dotenv';
dotenv.config();
import express, { json } from 'express';
import projectRouter from './routes/projects.js';
import certificateRouter from './routes/certificates.js';
import Package from './package.json' assert { type: "json" };

const app = express();
const port = process.env.PORT || 3000;

app.use(json());
app.use((req, res, next) => {
    const apiKey = req.headers.authorization;
    if (apiKey === process.env.API_KEY) {
        next();
    } else {
        res.status(401).json({
            error: 'Access denied'
        })
    }
})

app.use('/projects', projectRouter);
app.use('/certificates', certificateRouter);

app.listen(port, () => {
    console.log(`API version ${Package.version} \n👂 Server listening on port ${port}...`)
})