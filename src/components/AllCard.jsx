import Todo from './TaskCard';
import { useState } from 'react';

const AllCard = () => {
  const [todoTasks, setTodoTasks] = useState([]);
  const [doingTasks, setDoingTasks] = useState([]);
  const [doneTasks, setDoneTasks] = useState([]);
  const [taskCards, setTaskCards] = useState([]);
  const [createtaskinput, setcreatetaskinput] = useState(false);

  const handleDrop = (e, index) => {
    const task = JSON.parse(e.dataTransfer.getData("task"));
    const sourceCardIndex = parseInt(e.dataTransfer.getData("sourceCardIndex"));

    // Remove the task from the source card
    if (sourceCardIndex === 0) {
      setTodoTasks(prev => prev.filter(item => item !== task));
    } else if (sourceCardIndex === 1) {
      setDoingTasks(prev => prev.filter(item => item !== task));
    } else if (sourceCardIndex === 2) {
      setDoneTasks(prev => prev.filter(item => item !== task));
    } else {
      const updatedTaskCards = [...taskCards];
      updatedTaskCards[sourceCardIndex - 3].tasks = updatedTaskCards[sourceCardIndex - 3].tasks.filter(item => item !== task);
      setTaskCards(updatedTaskCards);
    }

    // Add the task to the destination card
    if (index === 0) {
      setTodoTasks(prev => [...prev, task]);
    } else if (index === 1) {
      setDoingTasks(prev => [...prev, task]);
    } else if (index === 2) {
      setDoneTasks(prev => [...prev, task]);
    } else {
      const updatedTaskCards = [...taskCards];
      updatedTaskCards[index - 3].tasks.push(task);
      setTaskCards(updatedTaskCards);
    }
  };

  const handleDragStart = (e, task, sourceIndex) => {
    e.dataTransfer.setData("task", JSON.stringify(task));
    e.dataTransfer.setData("sourceCardIndex", sourceIndex.toString());
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
    setcreatetaskinput(false);
  };

  const removeTaskCard = (index) => {
    setTaskCards(prev => prev.filter((_, i) => i !== index));
  };

  return (
    <div style={styles.container}>

      {/* Create Task Button */}
      <button style={styles.createtask} onClick={createNewTaskCard}>
        Create a Card
      </button>

       {/* Dynamically Created Task Cards */}
       {taskCards.map((taskCard, index) => (
        <div key={index} style={styles.item} onDrop={(e) => handleDrop(e, index + 3)} onDragOver={(e) => e.preventDefault()}>
          <Todo
            heading={taskCard.heading}
            tasks={taskCard.tasks}
            handleDragStart={(e, task) => handleDragStart(e, task, index + 3)}
            createtaskinput={createtaskinput && index === taskCards.length - 1} 
            updateHeading={(newHeading) => updateTaskCardHeading(index, newHeading)}
            removeTaskCard={() => removeTaskCard(index)}
          />
        </div>
      ))}


      <div
        style={styles.item}
        onDrop={(e) => handleDrop(e, 0)}
        onDragOver={(e) => e.preventDefault()}
      >
        <Todo
          heading="TODO"
          tasks={todoTasks}
          handleDragStart={(e, task) => handleDragStart(e, task, 0)}
        />
      </div>

      <div
        style={styles.item}
        onDrop={(e) => handleDrop(e, 1)}
        onDragOver={(e) => e.preventDefault()}
      >
        <Todo
          heading="Doing"
          tasks={doingTasks}
          handleDragStart={(e, task) => handleDragStart(e, task, 1)}
        />
      </div>

      <div
        style={styles.item}
        onDrop={(e) => handleDrop(e, 2)}
        onDragOver={(e) => e.preventDefault()}
      >
        <Todo
          heading="Done"
          tasks={doneTasks}
          handleDragStart={(e, task) => handleDragStart(e, task, 2)}
        />
      </div>
    
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    overflowX: "auto", 
    whiteSpace: "nowrap", 
    height: "100vh",  
    scrollbarWidth: "none", 
    overflowY: "hidden",  
  },
  item: {
    width: "300px",
    margin: "10px",
    borderRadius: "8px",
    display: "inline-block",
  },
 createtask: {
  width: "14%",
  height: "80px",
  padding: "8px",
  margin: "10px",
  borderRadius: "10px",
  border: "none",
  background: "none",
  backgroundColor: "rgb(84, 166, 245)",
  fontWeight: "bold",
  color: "white",
  cursor: "pointer",
  flexWrap: "wrap",
  whiteSpace: "nowrap",  // Prevents text wrapping
},

  // Hide the scrollbar line but keep scrolling functionality
  hideScrollbar: {
    /* Hide scrollbar for Webkit browsers (Chrome, Safari, Edge) */
    "&::-webkit-scrollbar": {
      display: "none",  // Hides the scrollbar line
    },
    /* For Firefox */
    scrollbarWidth: "none",
  },
};

export default AllCard;
