import express from 'express';
import userList from '../data/userID.js';
import pug from 'pug';
const router = express.Router();

router.get('/', (req, res) => {
  res.send(`It's not that easy! Privacy is Important!`).status(503);
});
router.get('/:id', (req, res) => {
  const userInfo = userList.find(user => user.username.toLowerCase() === req.params.id.toLowerCase());
  if(userInfo){
    delete userInfo.password;
    res.send(userInfo).status(200);
  }  
  else res.send('No Such User Exists!').status(404);
});
router.post('/', (req, res)=> {
  const task = req.body;
  task.id = 0;
  taskList.push(task);
  taskList[taskList.length-1].id = taskList.length;
  console.log(task);
  res.send(`${taskList}`).status(200);
});
router.get('/task/:id', (req, res)=> {
  const result = taskList.find(id => id.id == req.params.id);
  if(result){
    console.log(result);
    res.send(pug.renderFile('./pug/task.pug', {
      id: result.id,
      title: result.title,
      description: result.description,
      price: result.price})).status(200);
  } 
  else res.send(`No task with ID ${req.params.id}`).status(404);
});

export default router;