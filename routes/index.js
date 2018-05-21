import * as helloWorld from './helloWorld';
import * as sonarQube from './sonarQube';

export default app => {
    app.get('/helloWorld', helloWorld.get);
    
    app.post('/sonarQube', sonarQube.post);
}