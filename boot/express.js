import nconf from 'nconf';
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import bodyParser from 'body-parser';

export default (app) => {
    app.set('port', process.env.PORT || nconf.get("app:port") || 3000);
    app.use(cors());

    app.use(morgan('dev'));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
};