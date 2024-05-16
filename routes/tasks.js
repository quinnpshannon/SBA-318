import express from 'express';
import taskList from '../data/tasks.js';
import pug from 'pug';
const router = express.Router();

router.get('/tasks', (req, res) => {
  // const collection = await db.collection('grades');
  // const query = {class_id: Number(req.params.id)};
  // const result = await collection.find(query).toArray();

  // if (!result) res.send('Not Found').status(404);
  // else 
  res.send(taskList).status(200);
});
router.post('/task', (req, res)=> {
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