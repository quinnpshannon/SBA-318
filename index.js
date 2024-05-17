//Due Thursday, May 16th 2024
import express from 'express';
import taskRouter from './routes/tasks.js';
import userRouter from './routes/users.js';
import taskList from './data/tasks.js';
import cors from 'cors';
import pug from 'pug';

const app = express();
const port = 9876;

app.use(express.json());
app.use(cors());
app.use('/api', taskRouter);
app.use('/users', userRouter);

app.use((req,res,next) =>{
  console.log('Request from URL: '+req.url);
  next();
});
app.get('/card',(req,res) =>{
  const randCard = [];
  const values = [];
  for(let x=0;x<9;x++){
    let id;
    do{
      id=Math.floor(Math.random() * taskList.length+1);
    }
    while(values.includes(id))
    values.push(id);
    randCard.push(taskList.find(task => task.id === id))
    randCard[x].completed = false;
  }
  res.json(randCard).status(200);
  // res.send(pug.renderFile('./pug/card.pug', {
  //   task1:taskList[values[0]].title,
  //   task2:taskList[values[1]].title,
  //   task3:taskList[values[2]].title,
  //   task4:taskList[values[3]].title,
  //   task5:taskList[values[4]].title,
  //   task6:taskList[values[5]].title,
  //   task7:taskList[values[6]].title,
  //   task8:taskList[values[7]].title,
  //   task9:taskList[values[8]].title 
  // })).status(200);
});

app.listen(port, () => {
    console.log(`Server listening at http://127.0.0.1:${port}`);
  });