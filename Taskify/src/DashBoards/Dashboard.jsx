import CountTask from './CountTask';
import Header from '../components/Header';
import axios from 'axios';
import {useEffect, useState} from 'react';
import Charts from './Charts';

const Dashboard = () => {

    const [Task,setTask]=useState([]);

  const fetchTasks = (async () => {
    try {
      const status="ALL";
        const response = await axios.get(
            `https://task-management-5ms8.onrender.com/api/task/fetchalltask?${status}`
        );
console.log(response.data.tasks);
        setTask(response.data.tasks);
    } catch (error) {
        console.error("Error fetching tasks:", error);
    }
});

useEffect(()=>{
  fetchTasks();
},[])


const totalTask = Task.length;

const totalTodoTask = Task.filter(task => task.status === "TODO").length;
const totalDoingTask = Task.filter(task => task.status === "DOING").length;
const totalDoneTask = Task.filter(task => task.status === "DONE").length;

const totalLowPriorityTask = Task.filter(task => task.priority === "LOW").length;
const totalMediumPriorityTask = Task.filter(task => task.priority === "MEDIUM").length;
const totalHighPriorityTask = Task.filter(task => task.priority === "HIGH").length;




  return (
    <div>
    <Header/>
    <CountTask
    totalTask={totalTask}
    totalTodoTask={totalTodoTask}
    totalDoingTask={totalDoingTask}
    totalDoneTask={totalDoneTask}
    />
    <div>


    <Charts 
      totalTask={totalTask}
    totalTodoTask={totalTodoTask}
    totalDoingTask={totalDoingTask}
    totalDoneTask={totalDoneTask}
    totalLowPriorityTask={totalLowPriorityTask}
    totalMediumPriorityTask={totalMediumPriorityTask}
    totalHighPriorityTask={totalHighPriorityTask}
    />

</div>
    </div>
  )
}

export default Dashboard