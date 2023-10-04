import './App.css'; 
import {useState} from 'react'; 
import { Task } from './Task'; 

function App() {

  /* states */ 
  const [todoList, setTodoList] = useState([]); // empty array 
  const [newTask, setNewTask] = useState("");   // empty string 
  
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
          if (task.id === id) {
            return{...task, completed: true};
          }
          else
          {
            return task; 
          }
      }) 
    );
  };

  return (
  <div className="App">
      <div className="addTask">  
        <h1 id="ptodo">To Do List</h1>
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

/*
  <div className="taskNotes">
    <h1 id="notes">App Notes</h1>
        
    <p>Type a task in the box and then press the "+ Task" button<br></br>
        to have your task entered.
    </p>

    <p>Click on the task to either mark it complete or delete it.</p> 
  </div>
*/ 

export default App;