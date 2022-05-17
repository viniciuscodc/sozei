import { Request, Response, NextFunction } from 'express';
import express from 'express';
import bodyParser from 'body-parser';
import { routes } from './api/routes';
import { AppDataSource } from './database/config';

const port = 3000
export const app = express()

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use('/tools', routes)
app.listen(port, () => console.log(`Server running on http://localhost:${String(port)}`));

AppDataSource.initialize()
    .catch((error) => console.log(error))

app.use((req : Request, res : Response, next : NextFunction) => {
    res.status(404).json()
    next()
})