import express, { Application } from 'express';
import userRouter from './routes/user'

const port = 3000 || process.env.PORT;
const app: Application = express();
app.use('/users', userRouter);
app.get('/', (req: express.Request, res: express.Response) => {
    res.send('Hello World! nodemon test')
    
    res.status(200);
    
});


app.listen(port, () => 
    console.log(`Example app listening at http://localhost:${port}`)

);