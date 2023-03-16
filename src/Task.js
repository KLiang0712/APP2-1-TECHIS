// import App from './App'

const Task = (props) => {
    return (
        <div 
            className="task"
            style={{ backgroundColor: props.completed ? "green" : "rgba(245, 84, 51, 0.5)" }}
        >
            <h1>{props.taskName}</h1>
            <button onClick={() => props.deleteTask(props.id)}> X </button>
            <button onClick={() => props.completeTask(props.id)}> Complete </button>
        </div>
    );
}; 

export default Task;