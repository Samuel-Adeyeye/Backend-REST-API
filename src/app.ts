import express from 'express';
import dotenv from "dotenv";
import config from 'config'
import connect from './utils/connect'
import {database}  from "./config/database";
// import logger from './utils/logger'
import logger from "morgan";

const port = config.get<number>('port')
dotenv.config();
connect()

const app = express();
app.use(logger("dev"));

app.listen(port, async () => {
    console.log(`App is running at http://localhost:${port}`);

    await connect()
})