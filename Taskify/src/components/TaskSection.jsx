import {useState} from 'react';
import axios from 'axios';
import TaskCard from './TaskCard';
import TaskForm from './TaskForm';
import PropTypes from 'prop-types';

const TaskSection = ({title, tasks, addTask}) => {
  const [showForm, setShowForm] = useState(false);
  const [editingTask, setEditingTask] = useState(null);
  const [hover, sethover] = useState(false);

  const [opentaskcard,setopentaskcard]=useState(true);
  const [hoveredTask, setHoveredTask] = useState(null); // Track hover state for each task

  
  const handleAddTask = async (task) => {
    if (editingTask) {
      try {
        const response = await axios.put(`https://task-management-5ms8.onrender.com/api/task/updatetask/${editingTask._id}`, task);
        addTask({ ...response.data, status: title });
      } catch (error) {
        console.error('Error updating task:', error);
      }
    } else {
      try {
        const response = await axios.post('https://task-management-5ms8.onrender.com/api/task/addtask', {
          ...task,
          status: title,
        });
        addTask(response.data);
      } catch (error) {
        console.error('Error adding task:', error);
      }
    }
    setShowForm(false);
    setEditingTask(null);
  };

  const handleEditTask = (task) => {
    setEditingTask(task);
    setShowForm(true);
  };

  const handleDeleteTask = async (taskId) => {
    try {
      const response = await axios.delete(`https://task-management-5ms8.onrender.com/api/task/deletetask/${taskId}`);
      if (response.data.success) {
        addTask({ _id: taskId, delete: true });
      }
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  return (
    <div style={styles.container}>
      <h3>{title}</h3>

      {tasks.map((task,index) => (
        <div key={task._id}>
          {/* Show only the title initially */}
          {opentaskcard === task._id ? (
            // Show the full TaskCard if this task is expanded
            <TaskCard
              task={task}
              onEdit={() => handleEditTask(task)}
              onDelete={() => handleDeleteTask(task._id)}
              onClose={() => setopentaskcard(null)} // Close button to collapse
            />
          ) : (
            // Show only the title and allow expanding
            <button
              onClick={() => setopentaskcard(task._id)}
              onMouseEnter={() => setHoveredTask(index)} // Set the hovered task index
              onMouseLeave={() => setHoveredTask(null)} // Reset when mouse leaves
              style={{
    ...styles.itembutton,
    ...(hoveredTask === index && styles.hoverbordercolor), // Apply hover style only for the hovered task
  }}
            >
              {task.title}
              
              <span  style={styles.circleColor} >
              {task.priority === 'HIGH' && <span style={{ color: 'red' }}> ●</span>}
              {task.priority === 'MEDIUM' && <span style={{ color: 'orange' }}> ●</span>}
              {task.priority === 'LOW' && <span style={{ color: 'green' }}> ●</span>}
              </span>

            </button>
          )}
        </div>
      ))}

      <div style={styles.formContainer}>
        {showForm && (
          <TaskForm
            addTask={handleAddTask}
            onCancel={() => setShowForm(false)}
            existingTask={editingTask}
          />
        )}
      </div>

      <button
        onMouseEnter={() => sethover(true)}
        onMouseLeave={() => sethover(false)}
        style={{
          ...styles.addButton,
          ...(hover ? styles.addButtonHover : {}),
        }}
        onClick={() => setShowForm(!showForm)}
      >
        + Add a Task
      </button>
</div>
  );
};

const styles = {
  
  container: {
    border: '1px solid #ccc',
    width: '300px',
    backgroundColor: '#f1f2f4',
    borderRadius: '8px',
    padding: '10px',
    fontFamily: 'Arial, sans-serif',
  },
  formContainer: {
    marginTop:"10px",
    marginBottom: '10px',
    textAlign: 'center',
  },
  addButton: {
    flex: 1,
    cursor: 'pointer',
    padding: '6px',
    borderRadius: '8px',
    height: '30px',
    border: 'none',
    fontSize: '14px',
    fontWeight: 'bold',
    transition: 'background-color 0.3s ease',
    textAlign: 'start',
    whiteSpace: 'nowrap',
    color: 'black',
    overflow: 'hidden',
    width: '100%',
  },
  circleColor:{
    position: "absolute", 
    right: "10px", 
    top: "50%",
    transform: "translateY(-50%)",
  },
  addButtonHover: {
    backgroundColor: 'rgba(9, 30, 66, 0.14)',
  },
  itembutton: {
    position: "relative",
    textAlign: "center",
    outline: "none", 
    borderRadius: "10px", 
    cursor: "pointer",
    fontSize: "14px",
    background: "none",
    border: "1.6px solid transparent", 
    backgroundColor: "#ffffff",
    fontFamily:"Roboto,Arial,sans-serif",
    // fontFamily:"playfair, Display,Georgia,serif",
    padding: "6px", 
    boxShadow: "rgba(9, 30, 66, 0.25) 0px 1px 1px 0px, rgba(9, 30, 66, 0.31) 0px 0px 1px 0px",
    wordWrap: "break-word", 
    whiteSpace: "normal", 
    width: "95%",
    margin: "8px 0 0 0  ",
  },
  hoverbordercolor: {
    border:"1.6px solid rgb(103, 164, 243)",
    
  },
};

export default TaskSection;

TaskSection.propTypes = {
  title: PropTypes.string.isRequired,
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string,
      dueDate: PropTypes.string,
      assignedUser: PropTypes.string,
      priority: PropTypes.string,
      status: PropTypes.string,
    })
  ).isRequired,
  addTask: PropTypes.func.isRequired,
};
