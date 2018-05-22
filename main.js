import nconf from 'nconf';
import express from 'express';
import http from 'http';

import boot from './boot/index';
import routes from './routes/index';

nconf
  .argv()
  .env()
  .file({
    file: 'config.json',
  });

const app = express();

boot(app);
routes(app);

http.createServer(app).listen(app.get('port'), () => {
  console.log(`Express server listening on port ${app.get('port')}`);
});
