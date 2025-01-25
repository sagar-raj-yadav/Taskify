import {useEffect, useState} from 'react'
import PropTypes from 'prop-types';

const TaskForm = ({addTask,onCancel = () => {}, existingTask = null}) => {

    const [task,setTask]=useState({
        title: '',
        dueDate: new Date().toISOString().split('T')[0], 
        status: 'TODO',  
        priority: 'LOW',
    });

    useEffect(()=>{
        if(existingTask ){
            setTask(existingTask);
        }
    },[existingTask]);


    const handleChange = (e) => {
        const {name,value}=e.target;
        setTask((prevTask)=>({...prevTask,[name]:value}))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!task.title  || !task.dueDate) {
            alert("All fields are required");
            return;
        }
        addTask(task);
        setTask({ title: '', dueDate: '', status: 'TODO',  priority: 'LOW' });
    };

    
  return (
    <div style={styles.container}>
 <form onSubmit={handleSubmit}>
        <div style={styles.title}>
            <input
            style={styles.inputtitle}
                type="text"
                name="title"
                placeholder="Task"
                value={task.title}
                onChange={handleChange}
                required
            />
        </div>

        {/* <div style={styles.description}>
            <textarea
                name="description"
                placeholder="Description"
                value={task.description}
                onChange={handleChange}
                required
            />
        </div> */}

        <div style={styles.container2}>

            
            <input
            style={styles.input2}
                type="date"
                name="dueDate"
                value={task.dueDate}
                onChange={handleChange}
                required
            />
            {/* <select
                name="assignedUser"
                value={task.assignedUser}
                onChange={handleChange}
                required
            >
                <option value="">Select User</option>
                <option value="User A">User A</option>
                <option value="User B">User B</option>
                <option value="User C">User C</option>
                <option value="User D">User D</option>
                <option value="User E">User E</option>
                <option value="User F">User F</option>
            </select> */}
            <select
    style={{
        ...styles.input2,
        color: task.priority === "LOW" ? "green" : 
               task.priority === "MEDIUM" ? "blue" : 
               task.priority === "HIGH" ? "red" : "black",
    }}
    name="priority"
    value={task.priority}
    onChange={handleChange}
    required
>
    <option value="LOW" style={{ color: "green" ,fontWeight:"bold" }}>LOW ● </option>
    <option value="MEDIUM" style={{ color: "orange" ,fontWeight:"bold" }}>MEDIUM ● </option>
    <option value="HIGH" style={{ color: "red",fontWeight:"bold"  }}>HIGH ● </option>
</select>


            
            <select
            style={styles.input2}
                name="status"
                value={task.status}
                onChange={handleChange}
                required
            >
                <option value="TODO">TODO</option>
                <option value="DOING">DOING</option>
                <option value="DONE">DONE</option>
            </select>

        </div>

        <div style={styles.allbutton}>
            <button type="submit" style={styles.savebutton}>Add Task</button>
            <button type="button"  style={styles.cancelbutton} onClick={onCancel} >
                X
            </button>
        </div>

        </form>

    </div>
  )
}

export default TaskForm

const styles={
    container:{
        borderRadius:"12px",
        padding:"10px",
  border:"1px solid #ccc",
  boxShadow:"0 0 10px 0 #ccc",
    },
    container2:{
        margin:"10px 0 10px 0",
        display:"flex",
        gap:"10px",      
        alignItems:"center",
    },
    inputtitle:{
    borderRadius:"12px",
    padding:"6px",
    border:"none",
    width:"96%",
    fontSize:"16px",
    outline: "none"
    },
    input2:{
    borderRadius:"6px",
    border:"none",
    padding:"2px",
    fontSize:"12px",
    cursor:"pointer",
    fontWeight:"bold" 
    },
    allbutton:{
        display:"flex",
        gap:"20px",
        alignItems:"center"
    },
    savebutton:{
        backgroundColor:"green",
        color:"white",
        padding:"6px",
        borderRadius:"6px",
        border:"none",
        cursor:"pointer",
        fontSize:"12px",
        fontWeight:"bold"
    },
    cancelbutton:{
        backgroundColor:"red",
        color:"white",
        padding:"6px",
        borderRadius:"6px",
        border:"none",
        cursor:"pointer",
        fontSize:"12px"
    }
}

TaskForm.propTypes = {
    addTask: PropTypes.func.isRequired, // Function to handle adding a task
    onCancel: PropTypes.func.isRequired, // Function to handle canceling the form
    existingTask: PropTypes.shape({
        title: PropTypes.string,
        description: PropTypes.string,
        dueDate: PropTypes.string,
        assignedUser: PropTypes.string,
        priority: PropTypes.string,
        status: PropTypes.string,
    }), // Existing task object (optional)
};

