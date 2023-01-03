//require('dotenv').config();
import express, { json } from 'express';
import projectRouter from './routes/projects.js';
import certificateRouter from './routes/certificates.js';
const app = express();
const port = 3000;

app.use(json());
app.use('/projects', projectRouter);
app.use('/certificates', certificateRouter);

app.listen(port, () => {
    console.log(`👂 Server listening on port ${port}...`)
})