
import React, { useState } from 'react';

const PopUp = ({onClose,task}) => {

  const [description,setdescription]=useState("");
  const [showinput,setshowinput]=useState(true);
  const [allActivity,setAllActivity]=useState([]);
  const [selectedStatus, setSelectedStatus] = useState(task);
  const [activityvalue,setactivityvalue]=useState("");

  const commentfunction=()=>{
    if(activityvalue.trim()!==""){
    setAllActivity([...allActivity,activityvalue]);
    setactivityvalue("");
    }
  }

  const showinputfunction=()=>{
    if(description.trim()!==""){
    setshowinput(false);
  }
}


  return (
<div style={styles.mainconatiner}>
    <div style={styles.container}>
    <div  style={styles.name}>
    <p>name of task</p>
    <button style={styles.closebutton} onClick={onClose}>x</button>
    </div>

    <div style={styles.status}>
    <p>status :{task}</p>
    {/* <select
    value={selectedStatus} 
    onChange={(e) => setSelectedStatus(e.target.value)} 
     style={styles.select} >
       <option value="TODO">TODO</option>
        <option value="DOING">DOING</option>
        <option value="DONE">DONE</option>
    </select> */}
    </div>
   
   <div style={styles.description}>
   <p style={styles.descript}>Description:</p>


    {!showinput ? (
      <button style={styles.descriptionbutton}>{description.trim()!=="" && description}</button> // Show description text after "Add" button click
      ) : (
    <div style={styles.descriptionInputConatiner}>
    <textarea 
    value={description}
    onChange={(e)=>setdescription(e.target.value)}
     className="descriptionplaceholder"
     style={styles.descriptioninput} type="text"
      placeholder='Add more details'
      onInput={(e) => {
    e.target.style.height = "auto"; // Reset height for recalculation
    e.target.style.height = `${e.target.scrollHeight}px`; // Set height based on content
  }}
   />

      <button
      onClick={showinputfunction} 
      style={styles.addbutton}>Add</button>
      </div>
    )}
    <style>
    {`
      .descriptionplaceholder::placeholder {
        color: black;
      }
    `}
  </style>
   </div>
     
    <div style={styles.activity}>
    <p style={styles.activ}>Activity:</p>
    
    <textarea
    value={activityvalue}
    onChange={(e)=>setactivityvalue(e.target.value)}
    className='activityplaceholder'
     style={styles.activityinput} type="text"
      placeholder='write a comment'
     onInput={(e) => {
    e.target.style.height = "auto"; // Reset height for recalculation
    e.target.style.height = `${e.target.scrollHeight}px`; // Set height based on content
  }}

     />
      <style>
    {`
      .activityplaceholder::placeholder {
        color: black;
      }
    `}
  </style>
    
    <button 
    onClick={commentfunction}
    style={styles.comment}>comment</button>
     </div>

     {
      allActivity.map((value,index)=>{
        return(
          <div>
              <p style={styles.descriptionbutton}>{value}</p>
          </div>
        )
      })
     }

    <div style={styles.deletecontainer}>
    <button style={styles.deletebutton}>Delete Task</button>
    </div>
    </div>
</div>
  )
}

const styles={
  mainconatiner:{
    position:"fixed",
    top:0,
    left:0,
    width:"100%",
    height:"100%",
    backgroundColor:"rgba(0,0,0,0.5)",
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    zIndex:"1000",
  },
  container:{
    backgroundColor:"white",
    padding:"20px",
    width:"60%",
    textAlign:"center",
    borderRadius:"20px",
    maxHeight: "80vh", 
    overflow: "auto", 
  },
  name:{
    display:"flex",
    justifyContent:"space-between"
  },
  closebutton:{
    cursor:"pointer",
    borderRadius:"50%",
    backgroundColor:"red",
    color:"white",
    padding:"10px",
    height:"30px",
    width:"30px",
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
    fontSize:"20px",
    border:"none",
    fontStyle:"italic"
  },
  status:{
    display:"flex",
    alignItems:"center",
    gap:"7px",
    height:"20px"
  },
  select:{
    borderRadius:"8px",
    cursor:"pointer",
  },
  description:{
    textAlign:"start"
  },
  descript:{
    // backgroundColor:"red",
    marginBottom: "6px"
  },
  descriptionbutton:{
    border:"none",
    borderRadius:"5px",
    padding:"6px",
    width:"90%",
    cursor:"pointer",
    textAlign: "start",
    whiteSpace: "normal", // Allow text to wrap to the next line
  overflow: "visible", // Make all text visible
  wordWrap: "break-word", // Break words if they are too long
  boxSizing: "border-box", 
  backgroundColor:"rgb(216, 213, 212,0.5)",
  },
  descriptionInputConatiner:{
    display:"flex",
    justifyContent:"start",
    alignItems:"center",
    gap:"10px"
  },
  descriptioninput:{
    width:"90%",
    borderRadius:"6px",
    padding:"6px",
    height:"40px",
    backgroundColor:"rgb(216, 213, 212)",
    border:"none",
    color:"black",
    fontSize:"14px",
    resize: "none",
    overflow: "hidden", 
    boxSizing: "border-box",
  },
  addbutton:{
    padding:"4px",
    borderRadius:"10px",
    cursor:'pointer',
    border:"none",
    padding:"6px"
  },
  activity:{
    textAlign:"start",
    width:"90%",
  },
  activ:{
    marginBottom: "6px"
  },
  activityinput:{
    width:"100%",
    padding:"6px",
    borderRadius:"10px",
    backgroundColor:"rgb(216, 213, 212)",
    border:"none",
    color:"black",
    fontSize:"14px",
    resize: "none",
    overflow: "hidden", 
    boxSizing: "border-box",
  },
  comment:{
    padding:"4px",
    borderRadius:"10px",
    cursor:'pointer',
    border:"none",
    padding:"6px"
  },
  deletecontainer:{
    textAlign:"end",
    marginRight:"10px",
    marginTop:"40px"
  },
  deletebutton:{
    border:"none",
    borderRadius:"24px",
    padding:"10px",
    fontWeight:"bold",
    backgroundColor:"rgb(246, 52, 52,0.9)",
    color:"white",
    fontStyle:"italic"
  }
}
export default PopUp;