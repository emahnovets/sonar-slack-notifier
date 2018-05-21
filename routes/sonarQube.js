import SonarResult from '../models/sonarResult';

export async function post(request, response) {
    try {
        const sonarResult = new SonarResult(request.body);

        await sonarResult.SlackMessage.sendMessage()

        response.status(200);
        response.send('Quality Gate result posted to slack');
    } catch (e) {
        response.status(500);
        response.send(e.name + ': ' + e.message);
    }
}