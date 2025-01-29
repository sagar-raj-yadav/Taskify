
import { MdOutlineDoNotDisturbOnTotalSilence } from "react-icons/md";//total
import { RiTodoFill } from "react-icons/ri"; //todos
import { GiProgression } from "react-icons/gi"; //progress
import { IoCheckmarkDoneCircle } from "react-icons/io5"; //done
import { useState } from "react";
import PropTypes from "prop-types";


const CountTask = ({totalTask,totalTodoTask,totalDoingTask,totalDoneTask}) => {

    const [hover,setHover]=useState({
        total:false,
        todo:false,
        doing:false,
        done:false
    });

    return (
      <div style={styles.container}>
      {/* card 1 */}
       <div
        onMouseEnter={() => setHover({ ...hover, total: true })}
        onMouseLeave={() => setHover({ ...hover, total: false })}
        style={{...styles.card,...(hover.total && styles.hoverstyle) }}>
        <h3>TOTAL</h3>
        <div style={styles.bottom}>
        <div>
        <h2 style={{fontSize: 'clamp(1.5rem, 2vw, 2rem)',}}>{totalTask}</h2>
        <p style={{ fontSize: 'clamp(0.6rem, 1.8vw, 0.8rem)',marginTop:"8px",fontFamily:"italic" }}>
        {new Date().toLocaleDateString('en-US', {day: '2-digit',month: 'short',year: 'numeric',})}
        </p>
        </div>
        <MdOutlineDoNotDisturbOnTotalSilence fontSize= 'clamp(1.5rem, 5vw, 2.5rem)'/>
        </div>
    
       </div>

       {/* card 2*/}
       <div onMouseEnter={() => setHover({ ...hover, todo: true })}
        onMouseLeave={() => setHover({ ...hover, todo: false })}
        style={{...styles.card,...(hover.todo && styles.hoverstyle) }}>
        <h3>TODOS</h3>
        <div style={styles.bottom}>
        <div>
        <h2 style={{fontSize: 'clamp(1.5rem, 2vw, 2rem)',}}>{totalTodoTask}</h2>
        <p style={{ fontSize: 'clamp(0.8rem, 2vw, 1rem)',marginTop:"8px" }}>
        {new Date().toLocaleDateString('en-US', {day: '2-digit',month: 'short',year: 'numeric',})}
        </p>
        </div>
        <RiTodoFill fontSize= 'clamp(1.5rem, 5vw, 2.5rem)'/>
        </div>
    
       </div>


       {/* card 3 */}
       <div onMouseEnter={() => setHover({ ...hover, doing: true })}
        onMouseLeave={() => setHover({ ...hover, doing: false })}
        style={{...styles.card,...(hover.doing && styles.hoverstyle) }}>
        <h3>DOING</h3>
        <div style={styles.bottom}>
        <div>
        <h2 style={{fontSize: 'clamp(1.5rem, 2vw, 2rem)',}}>{totalDoingTask}</h2>
        <p style={{ fontSize: 'clamp(0.8rem, 2vw, 1rem)',marginTop:"8px" }}>
        {new Date().toLocaleDateString('en-US', {day: '2-digit',month: 'short',year: 'numeric',})}
        </p>
        </div>
        <GiProgression  fontSize= 'clamp(1.5rem, 5vw, 2.5rem)'/>
        </div>
    
       </div>

       {/* card 4 */}
       <div onMouseEnter={() => setHover({ ...hover, done: true })}
        onMouseLeave={() => setHover({ ...hover, done: false })}
        style={{...styles.card,...(hover.done && styles.hoverstyle) }}>
        <h3>DONE</h3>
        <div style={styles.bottom}>
        <div>
        <h2 style={{fontSize: 'clamp(1.5rem, 2vw, 2rem)',}}>{totalDoneTask}</h2>
        <p style={{ fontSize: 'clamp(0.8rem, 2vw, 1rem)',marginTop:"8px" }}>
        {new Date().toLocaleDateString('en-US', {day: '2-digit',month: 'short',year: 'numeric',})}
        </p>
        </div>
        <IoCheckmarkDoneCircle fontSize= 'clamp(1.5rem, 5vw, 2.5rem)'/>
        </div>
    
       </div>

       
       
      </div>
    );
  };
  
  const styles = {
    container:{
      display: 'flex',
      justifyContent: 'space-evenly', 
      alignItems: 'center',
      marginTop:"30px",
      cursor:"pointer",
      flexWrap: 'wrap',
    },
    card: {
      width: 'clamp(8em, 14vw, 20em)', 
      height: 'clamp(2em, 12vh, 20em)', 
      backgroundColor: '#f1f2f4',
      borderRadius: '8px',
      padding: '10px',
      fontFamily: 'Arial, sans-serif',
      outline:"none",
      marginTop:"0.4em"
    },
    bottom:{
        display: 'flex',
        justifyContent: 'space-between',
        padding:"10px", 
    },
    hoverstyle: {
      backgroundColor: 'rgb(248, 230, 171)', 
      boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', 
      transform: 'scale(1.02)', 
      transformOrigin: 'center',
    },
  };
  
  export default CountTask;
  

// Adding PropTypes validation
CountTask.propTypes = {
  totalTask: PropTypes.number.isRequired,
  totalTodoTask: PropTypes.number.isRequired,
  totalDoingTask: PropTypes.number.isRequired,
  totalDoneTask: PropTypes.number.isRequired,
  totalLowPriorityTask: PropTypes.number.isRequired,
  totalMediumPriorityTask: PropTypes.number.isRequired,
  totalHighPriorityTask: PropTypes.number.isRequired,
};
