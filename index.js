//Due Thursday, May 16th 2024
import express from 'express';
import taskRouter from './routes/tasks.js';
import taskList from './data/tasks.js';
import pug from 'pug';

const app = express();
const port = 9876;

app.use(express.json());
app.use('/api', taskRouter);

app.use((req,res,next) =>{
  console.log('Request from URL: '+req.url);
  next();
});
app.get('/card',(req,res,next) =>{
  res.send(pug.renderFile('./pug/card.pug', {
    task0:taskList[0].title,
    task1:taskList[1].title,
    task2:taskList[2].title,
    task3:taskList[3].title,
    task4:taskList[4].title,
    task5:taskList[5].title,
    task6:taskList[6].title,
    task7:taskList[7].title,
    task8:taskList[8].title 
    /*
    task0:randList[0],
    task1:randList[1],
    task2:randList[2],
    task3:randList[3],
    task4:randList[4],
    task5:randList[5],
    task6:randList[6],
    task7:randList[7],
    task8:randList[8] */
  })).status(200);
});

app.listen(port, () => {
    console.log(`Server listening at http://127.0.0.1:${port}`);
  });