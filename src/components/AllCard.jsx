import Todo from './TaskCard';
import { useState } from 'react';

const AllCard = () => {
  const [todoTasks, setTodoTasks] = useState([]);
  const [doingTasks, setDoingTasks] = useState([]);
  const [doneTasks, setDoneTasks] = useState([]);
  const [taskCards, setTaskCards] = useState([]);
  const [tempCard, setTempCard] = useState(null); // For temporarily holding the new card
  const [createtaskinput, setcreatetaskinput] = useState(false);

  const handleDrop = (e, index) => {
    const task = JSON.parse(e.dataTransfer.getData("task"));
    const sourceCardIndex = parseInt(e.dataTransfer.getData("sourceCardIndex"));

    // Remove the task from the source card
    if (sourceCardIndex === 0) {
      setTodoTasks((prev) => prev.filter((item) => item !== task));
    } else if (sourceCardIndex === 1) {
      setDoingTasks((prev) => prev.filter((item) => item !== task));
    } else if (sourceCardIndex === 2) {
      setDoneTasks((prev) => prev.filter((item) => item !== task));
    } else {
      const updatedTaskCards = [...taskCards];
      updatedTaskCards[sourceCardIndex - 3].tasks = updatedTaskCards[sourceCardIndex - 3].tasks.filter((item) => item !== task);
      setTaskCards(updatedTaskCards);
    }

    // Add the task to the destination card
    if (index === 0) {
      setTodoTasks((prev) => [...prev, task]);
    } else if (index === 1) {
      setDoingTasks((prev) => [...prev, task]);
    } else if (index === 2) {
      setDoneTasks((prev) => [...prev, task]);
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
    setTempCard({ heading: "", tasks: [] }); // Create a temporary card
    setcreatetaskinput(true);
  };

  const updateTaskCardHeading = (newHeading) => {
    if (!tempCard) return;

    // Finalize the card and add it after "Done"
    setTaskCards((prev) => {
      const updatedCards = [...prev];
      updatedCards.splice(0, 0);
      return [...prev, { ...tempCard, heading: newHeading }];
    });

    setTempCard(null);
    setcreatetaskinput(false);
  };

  const removeTaskCard = (index) => {
    setTaskCards((prev) => prev.filter((_, i) => i !== index));
  };

 
  return (
    <div style={styles.container}>

      {/* Create Task Button */}
      <button style={styles.createtask} onClick={createNewTaskCard}>
       + Create a Card 
      </button>


 {/* Dynamically Created Task Cards starts*/}
      {tempCard && (
        <div style={styles.item}>
          <Todo
            heading={tempCard.heading}
            tasks={tempCard.tasks}
            createtaskinput={createtaskinput}
            updateHeading={updateTaskCardHeading}
          />
        </div>
      )}
 {/* Dynamically Created Task Cards end*/}

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
    

  {/*list of all Dynamically Created Task Cards starts*/}
  {taskCards.map((card, index) => (
    <div key={index} style={styles.item}
     onDrop={(e) => handleDrop(e, index + 3)}
      onDragOver={(e) => e.preventDefault()}>
  <Todo
    heading={card.heading}
    tasks={card.tasks}
    handleDragStart={(e, task) => handleDragStart(e, task, index + 3)}
    removeTaskCard={() => removeTaskCard(index)}
  />
  </div>
))}

  {/*list of all Dynamically Created Task Cards starts*/}

      
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
    width: "100%", // Full width for smaller screens
    maxWidth: "200px", // Set a maximum width
    height: "10%", // Adjust height for better responsiveness
    padding: "8px 16px", // Even padding for better look
    margin: "10px auto", // Center the button horizontally
    borderRadius: "10px",
    border: "none",
    background: "none",
    backgroundColor: "rgb(126, 226, 248,0.8)",
    fontWeight: "bold",
    fontSize: "1rem", // Use relative font size for better scaling
    color: "white",
    cursor: "pointer",
    whiteSpace: "nowrap",
    display: "block", // Makes it responsive and avoids flex issues
    textAlign: "center", // Centers the text
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
