import dotenv from 'dotenv';
dotenv.config();
import express, { json } from 'express';
import projectRouter from './routes/projects.js';
import certificateRouter from './routes/certificates.js';
import cors from 'cors';
const app = express();
const port = process.env.PORT || 3000;

app.use(json());
app.use(cors());
app.use('/projects', projectRouter);
app.use('/certificates', certificateRouter);

app.listen(port, () => {
    console.log(`👂 Server listening on port ${port}...`)
})