import './App.css'; 
import {useState} from 'react'; 
import { Task } from './Task'; 

function App() {

  /* states */  
  // empty array 
  const [todoList, setTodoList] = useState([]); 
  
  // empty string 
  const [newTask, setNewTask] = useState("");   
  
  const handleChange = (event) => {
    setNewTask(event.target.value); 
  };

  const addTask = () => {
      const task = {
        id: todoList.length === 0? 1: todoList[todoList.length - 1].id + 1,
        taskName: newTask, 
        completed: false,
    }; 
    setTodoList(task.taskName !== " " ? [...todoList, task] : todoList);  
  };

  const deleteTask = (id) => {
    setTodoList(todoList.filter((task) => task.id !== id));
  }; 

  const completeTask = (id) => {
    setTodoList(
      todoList.map((task) => 
      {
          if (task.id === id) 
          {
            return{...task, completed: true};
          }
          else { return task; }
      }) 
    );
  };

  return (
  <div className="App">
      
      <link rel="icon" href="./public/logo.png" />  
      
      <div className="addTask">
        <h1 id="ptodo">MY CHECKLIST OF ITEMS</h1>
        <input placeholder = "to-do list items" onChange={handleChange}/>
        <button id="add" onClick={addTask}>+<br></br>Task</button>
      </div>

      <h2 id="plist">List your items</h2>
      
      <div className="list">
            {todoList.map((task) => 
            {
                return ( 
                  <Task 
                    taskName = {task.taskName}
                    id = {task.id}
                    completed = {task.completed}
                    deleteTask = {deleteTask} 
                    completeTask = {completeTask} 
                  />
                );   
            })}
          </div>  
      </div>
    );
}

export default App;