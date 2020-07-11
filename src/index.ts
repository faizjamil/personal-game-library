import express, { Application } from 'express';
const port = 3000;
const app: Application = express();
app.get('/', (req: express.Request, res: express.Response) => {
    res.send('Hello World!')
    res.status(200);
});
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));