export default app => {
    app.get('/hello', (request, response) => {
        response.send('Hello World');
    })
}