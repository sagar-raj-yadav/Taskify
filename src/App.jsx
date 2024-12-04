import Todo from './components/TaskCard';
import { useState } from 'react';

const App = () => {
  const [todoTasks, setTodoTasks] = useState([]);
  const [doingTasks, setDoingTasks] = useState([]);
  const [doneTasks, setDoneTasks] = useState([]);

  const [taskCards, setTaskCards] = useState([]); 
  const [createtaskinput,setcreatetaskinput]=useState(false);

  const handleDrop = (e, column) => {
    const task = JSON.parse(e.dataTransfer.getData("task"));
    removeTaskFromPreviousList(task);
    
    if (column === 'TODO') {
      setTodoTasks(prev => [...prev, task]);
    } else if (column === 'Doing') {
      setDoingTasks(prev => [...prev, task]);
    } else if (column === 'Done') {
      setDoneTasks(prev => [...prev, task]);
    }
  };

  const removeTaskFromPreviousList = (task) => {
    setTodoTasks((prev) => prev.filter((item) => item !== task));
    setDoingTasks((prev) => prev.filter((item) => item !== task));
    setDoneTasks((prev) => prev.filter((item) => item !== task));
  };

  const handleDragStart = (e, task) => {
    e.dataTransfer.setData("task", JSON.stringify(task));
  };

  

  const createNewTaskCard = () => {
    setTaskCards(prev => [...prev, { heading: "", tasks: [] }]);
    setcreatetaskinput(true);
  };

  const updateTaskCardHeading = (index, newHeading) => {
    setTaskCards(prev => {
      const updatedCards = [...prev];
      updatedCards[index].heading = newHeading;
      return updatedCards;
    });
    setcreatetaskinput(false); // Disable new task input mode
  };

  return (
    <div style={styles.container}>
      <div
        style={styles.item}
        onDrop={(e) => handleDrop(e, 'TODO')}
        onDragOver={(e) => e.preventDefault()}
      >
        <Todo heading="TODO" tasks={todoTasks} handleDragStart={handleDragStart} />
      </div>

      <div
        style={styles.item}
        onDrop={(e) => handleDrop(e, 'Doing')}
        onDragOver={(e) => e.preventDefault()}
      >
        <Todo heading="Doing" tasks={doingTasks} handleDragStart={handleDragStart} />
      </div>

      <div
        style={styles.item}
        onDrop={(e) => handleDrop(e, 'Done')}
        onDragOver={(e) => e.preventDefault()}
      >
        <Todo heading="Done" tasks={doneTasks} handleDragStart={handleDragStart} />
      </div>

        {/* Dynamically Created Task Cards */}
        {taskCards.map((taskCard, index) => (
        <div key={index} style={styles.item}>
          <Todo
            heading={taskCard.heading}
            tasks={taskCard.tasks}
            handleDragStart={handleDragStart}
            createtaskinput={createtaskinput && index === taskCards.length - 1} // Only show input for the latest card
            updateHeading={(newHeading) => updateTaskCardHeading(index, newHeading)}
          />
        </div>
      ))}

      {/* Create Task Button */}
      <button style={styles.createtask} onClick={createNewTaskCard}>
        Create a Task
      </button>


     
    
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
  },
  item: {
    width: "90%",
    border: "1px solid #ccc",
    margin: "10px",
    borderRadius: "8px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  },
  createtask:{
    width: "50%",
    height:"20%",
    padding:"8px",
    margin:"10px",
    borderRadius:"10px",
    border:"none",
    background:"none",
    backgroundColor:"rgb(84, 166, 245)",
    fontWeight:"bold",
    color:"white",
    cursor:"pointer"
  }
};

export default App;
