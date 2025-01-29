import  { useEffect, useState,useCallback } from 'react'
import TaskSection from './TaskSection'
import axios from 'axios';
import PropTypes from 'prop-types';
import CustomCard from '../CustomCard/Main';

const AllCard = () => {

    const [SearchTask, setSearchTask] = useState('');
    const [selectedStatus, setSelectedStatus] = useState('All');  
    const [selectedPriority, setSelectedPriority] = useState('All');

    const [customCards, setCustomCards] = useState([]);

    const [Task,setTask]=useState([]);
    const [isLoading, setIsLoading] = useState(true); // State for loading

    const fetchTasks = useCallback(async () => {
        try {
            setIsLoading(true);
            const queryParams = new URLSearchParams();

            // Add filters dynamically to the query parameters
            if (selectedStatus && selectedStatus.toUpperCase() !== "ALL") {
                queryParams.append("status", selectedStatus);
            }
            if (selectedPriority && selectedPriority.toUpperCase() !== "ALL") {
                queryParams.append("priority", selectedPriority);
            }
          
            if (SearchTask.trim()) {
                queryParams.append("search", SearchTask.trim());
            }

            // Make the API call
            const response = await axios.get(
                `https://task-management-5ms8.onrender.com/api/task/fetchalltask?${queryParams.toString()}`
            );
console.log(response.data.tasks);
            setTask(response.data.tasks);
        } catch (error) {
            console.error("Error fetching tasks:", error);
        }
        finally {
            setIsLoading(false); // Set loading to false once data is fetched
        }
    }, [selectedStatus, selectedPriority, SearchTask]);

    useEffect(() => {
        fetchTasks();
    }, [fetchTasks]);


    const filteredTasks = Task.filter(task => {
        const matchesSearch = task.title ? task.title.toLowerCase().includes(SearchTask.toLowerCase()) : false;
        const matchesPriority = selectedPriority === 'All' || task.priority === selectedPriority;
        return matchesSearch && matchesPriority ;
    });


    const taskByStatus={
       'TODO': filteredTasks.filter(task => task.status === 'TODO'),
        'DOING': filteredTasks.filter(task => task.status === 'DOING'),
        'DONE': filteredTasks.filter(task => task.status === 'DONE')
    }

    const addTask = () => {
        fetchTasks();
    };


    const handleAddCustomCard = (newCardTitle) => {
        setCustomCards(prevCards => [...prevCards, { title: newCardTitle, tasks: [] }]);
    };



  return (
   <>

   <div style={styles.topcontainer}>
     {/* search start*/}
    <input 
    style={styles.searchinput}
    type="text"
    placeholder='search Task'
    value={SearchTask}
    onChange={(e)=>setSearchTask(e.target.value)}
     />

     {/* search end*/}

     {/* status start */}
     <select
     style={styles.priority}
      value={selectedStatus} 
     onChange={(e)=>setSelectedStatus(e.target.value)}>
     <option value="ALL">All status</option>
     <option value="TODO">TODO</option>
     <option value="DOING">DOING</option>
     <option value="DONE">DONE</option>
     </select>
     {/* status end */}

        {/* priority start */}
    <select 
     style={styles.priority}
    value={selectedPriority}
    onChange={(e)=>setSelectedPriority(e.target.value)}>
        <option value="ALL">All priority</option>
        <option value="HIGH">HIGH</option>
        <option value="MEDIUM">MEDIUM</option>
        <option value="LOW">LOW</option>
    </select>
   {/* priority end */}



   </div>
   

<div  style={styles.container}>


        {/* custom card */}
        <div style={styles.item}>
        <CustomCard handleAddCustomCard={handleAddCustomCard} />
        </div>


 

    <div style={styles.item} > 
    <TaskSection isLoading={isLoading} title="TODO" tasks={taskByStatus['TODO']} addTask={addTask}/>
    </div>

    <div style={styles.item} > 
    <TaskSection isLoading={isLoading} title="DOING" tasks={taskByStatus['DOING']} addTask={addTask} />
    </div>

    <div style={styles.item} > 
    <TaskSection isLoading={isLoading} title="DONE" tasks={taskByStatus['DONE']} addTask={addTask}/>
    </div>


    {/* custom card */}
    {customCards.map((card, index) => (
        <div style={styles.item} key={index}>
            <TaskSection   title={card.title} tasks={card.tasks} />
        </div>
    ))}
    
</div>
   
   </>
  )
}



const styles = {
    topcontainer:{
        display: "flex",
        justifyContent: "center",
        padding:"15px",
        alignItems: "center",
        gap:"20px",
        backgroundColor:"rgb(241, 242, 244,0.85)",
        width:"100%"
    },
    searchinput:{
        width: "50%",
    padding: '7px 18px',
    borderRadius: '50px',
    border: '1px solid #ddd',
    backgroundColor: '#fff',
    fontSize: '16px',
    color: '#333',
    outline: 'none',
    transition: 'border 0.3s ease',
    boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
    },
    priority:{
        padding: '7px 16px',
        borderRadius: '12px',
        fontWeight: 'bold',
        cursor:"pointer",
        border:"none",
        outline:"none"
    },
    container: {
      display: "flex",
      overflowX: "auto", 
      whiteSpace: "nowrap", 
      height: "100vh",  
      scrollbarWidth: "none", 
      overflowY: "hidden",  
    },
   
    item: {
    margin: "10px",
    borderRadius: "8px",
    display: "inline-block",
  },
}
export default AllCard


// PropTypes for validation
TaskSection.propTypes = {
    title: PropTypes.string.isRequired,
    isLoading:PropTypes.string.isRequired,
    tasks: PropTypes.arrayOf(
        PropTypes.shape({
            _id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            description: PropTypes.string,
            status: PropTypes.string,
        })
    ).isRequired,
    addTask: PropTypes.func.isRequired,
};