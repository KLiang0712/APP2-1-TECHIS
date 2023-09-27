import './App.css';
import {useState} from 'react'; 

function App() {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");
  
  const handleChange = (event) => {
    setNewTask(event.target.value)
  }

  const addTask = () => {
      const task = {
        id: todoList.length === 0? 1: todoList[todoList.length - 1].id + 1,
        taskName: newTask, 
        completed: false,
    }
    setTodoList([...todoList, task])
  }

  const deleteTask = (id) => {
    setTodoList(todoList.filter((task) => task.id !== id)); 
  }

  const completeTask = (id) => {
    setTodoList(
      todoList.map((task) => 
      {
          if (task.id === id) {
            return{...task, completed: true}
          }
          else
          {
            return task; 
          }
      }) 
    )
  }

  return (
  <div className="App">
      <div className="addTask">  
        <p id="ptodo">To Do List</p>
        <input placeholder = "to-do list items" onChange={handleChange}/>
        <button id="add" onClick={addTask}>Add Task</button>
      </div>

          <p id="plist">List your items</p>
          <div className="list">
            {todoList.map((task) => {
                return(
                  <task taskName = {task.taskName}
                  id = {task.id}
                  completed = {task.completed}
                  deleteTask = {deleteTask} 
                  completeTask = {completeTask} />
                ) 
            })}

          </div>  
    </div>
  );
}

export default App;
