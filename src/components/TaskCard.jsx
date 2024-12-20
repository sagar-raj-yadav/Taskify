import { useState } from "react";
import Popup from './PopUp';

const TODO = ({heading,tasks,handleDragStart , createtaskinput,removeTaskCard, updateHeading }) => {
  const [hover, sethover] = useState(false);
  const [showcancel, setshowcancel] = useState(false);
  const [showinput, setshowinput] = useState(false);
  const [hoveredTask, setHoveredTask] = useState(null); // Track hover state for each task


  //add item state
  const [item, setitem] = useState("");

  //open and close popup state 
  const [open,setopen]=useState(false);

    // State for editable heading
    const [newHeading, setnewHeading] = useState("");

    //open 3 dot
    const [showdot, setshowdot] = useState(false);
    const [popupPosition, setPopupPosition] = useState({ top: 0, left: 0 });
  
  const AddTask = () => {
    if (item.trim()!="") {
      tasks.push(item);
    setitem("");
    }
  };

  const showinputAndcancel = () => {
    setshowcancel(!showcancel);
    setshowinput(!showinput);
  };

  const hideinput = () => {
    setshowcancel(false);
    setshowinput(false);
  };

  const Addshow = () => {
    AddTask();    
    showinputAndcancel();
  };

  const handleCreateHeading = () => {
    if (newHeading.trim() !== "") {
      updateHeading(newHeading);
    }
  };

    // Function to handle button click
    const handleButtonClick = (e) => {
      const rect = e.target.getBoundingClientRect(); // Get the button's position
      setPopupPosition({
        top: rect.bottom + window.scrollY,  // Position below the button
        left: rect.left + window.scrollX,    // Align with the left of the button
      });
      setshowdot(!showdot); // Toggle the popup
    };
  

  return (
    <>
      <div style={styles.container} onDrop={(e) => handleDrop(e)}>
        <div style={styles.top}>
        {createtaskinput ? (
          <>
            <input
              style={styles.headingInput}
              value={newHeading}
              onChange={(e) => setnewHeading(e.target.value)}
              placeholder="Enter new heading"
            />
            <button style={styles.createButton} onClick={handleCreateHeading}>
              Create
            </button>

            <button onClick={removeTaskCard} style={styles.cancelbutton}>
           Cancel
            </button>
          </>
        ) : (
          <p style={styles.heading}>{heading}</p>
        )}


        {
          heading!=="" && 
        <button style={styles.threedot} onClick={handleButtonClick}>
        ...
        </button> 
        }
        


          {showdot && (
        <div
          style={{
            ...styles.pop,
            top: popupPosition.top, // Position from the button
            left: popupPosition.left, // Align with the button
          }}
        >
          <button style={styles.listButton}>Edit</button>
          <button style={styles.listButton}>Delete</button>
          <button style={styles.listButton}>More</button>
        </div>
      )}


        </div>

    {
      tasks.map((value, index) => {
      return (
        <div 
          style={styles.alltask} 
          draggable
          onDragStart={(e) => handleDragStart(e, value, heading)}
          key={index}
        >
         <button
  onMouseEnter={() => setHoveredTask(index)} // Set the hovered task index
  onMouseLeave={() => setHoveredTask(null)} // Reset when mouse leaves
  onClick={() => setopen(true)} 
  style={{
    ...styles.itembutton,
    ...(hoveredTask === index && styles.hoverbordercolor), // Apply hover style only for the hovered task
  }}
>
  {value}
</button>
        </div>
      )
    })
  }


        {open && <Popup task={heading} onClose={()=>setopen(false)}/>}
        

        {showinput ? (
          <div style={styles.inputcontainer}>
            <input
              value={item}
              onChange={(e) => setitem(e.target.value)}
              style={styles.addinput}
              type="text"
              placeholder="Your Task"
            />
          </div>
        ) : (
          ""
        )}

        <div style={styles.addbuttoncontainer}>
          <button
            onClick={Addshow}
            onMouseEnter={() => sethover(true)}
            onMouseLeave={() => sethover(false)}
            style={{
              ...styles.addbutton,
              ...(hover ? styles.addbuttonhover : {}),
            }}
          >
            {showcancel ? "+ Add" : "+  Add a Task"}
          </button>


          {showcancel && (
            <button onClick={hideinput} style={styles.cancelbutton}>
              x
            </button>
          )}
        </div>
      </div>
    </>
  );
};

const styles = {
  container: {
    border: "1px solid #ccc",
    width: "300px",
    backgroundColor: "rgb(233, 228, 228,1)",
    borderRadius: "8px",
    padding: "10px",
    fontFamily: "Arial, sans-serif",
  },
  top: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  threedot: {
    textAlign: "center",
    width: "30px",
    fontSize: "20px",
    border: "none",
    backgroundColor: "rgb(233, 228, 228,1)",
    background: "none",
    cursor: "pointer",
  },
  pop: {
    position: "absolute",  // Changed to absolute positioning
    backgroundColor: "white",
    padding: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    borderRadius: "8px",
    zIndex: 1000,
  },
  listButton: {
    display: "block", // Ensures buttons stack vertically
    width: "100%", // Makes buttons fill the available space in the popup
    marginBottom: "5px", // Adds space between buttons
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
  alltask: {
    display: "flex",
    padding: "4px",
    marginTop: "2px",
    justifyContent: "flex-start",
  },
  
  itembutton: {
    outline: "none", 
    borderRadius: "14px", 
    cursor: "pointer",
    fontSize: "14px",
    background: "none",
    border:"none",
    backgroundColor: " rgb(249, 249, 249,0.8)",
    fontWeight: "bold",
    padding: "8px", 
    boxShadow: "0 4px 4px rgba(0, 0, 0, 0.1)",
    margin: "0",
    textAlign: "center", 
    wordWrap: "break-word", 
    whiteSpace: "normal", 
    width: "90%",
    
  },
  hoverbordercolor: {
    backgroundColor:"rgb(194, 248, 248,0.6)",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.15)", 
    
  },
  inputcontainer:{
    display: "flex",
    marginTop:"3px",
  },
  addinput: {
    borderRadius:"16px",
    padding:"8px",
    border:"none",
    fontSize:"14px",
    width:"88%",
    marginLeft:"5px"
  },
  addbuttoncontainer: {
    display: "flex",
    alignItems: "space-evenly",
    gap: "10px", 
    marginTop: "20%",
  },
  addbutton: {
    flex: 1,
    cursor: "pointer",
    padding: "6px", // remains constant
    borderRadius: "8px", // remains constant
    height: "30px", // remains constant
    border: "none",
    backgroundColor: "rgb(233, 228, 228,1)", // Default background color
    fontSize:"14px",
    fontWeight: "bold",
    transition: "background-color 0.3s ease", // Smooth transition for background color
    textAlign: "center",
    whiteSpace: "nowrap",
    color: "black",
    overflow: "hidden",
    width: "100%",
  },
  addbuttonhover: {
    backgroundColor: "rgb(231, 248, 233,0.6)", // Change background color on hover
    color: "orange",
  },
  headingInput:{
    borderRadius:"12px",
    padding:"6px",
    border:"none"
  },
  heading:{
    fontSize:"18px",
    fontWeight:"bold"
  },
  cancelbutton: {
    width: "16%",
    backgroundColor: "red",
    borderRadius: "10px",
    color: "white",
    padding:"4px",
    textAlign: "center",
    fontSize: "12px",
    cursor: "pointer",
    height: "30px",
    border: "none",
  },
  createButton:{
    width: "18%",
    backgroundColor: "rgb(112, 184, 254)",
    borderRadius: "10px",
    color: "white",
    padding:"4px",
    textAlign: "center",
    fontSize: "12px",
    fontWeight:"bold",
    cursor: "pointer",
    height: "30px",
    border: "none",
  }
};

export default TODO;

/*
 1) remains constant -> isko nhi likhte to mouseEnter karne ke baad "Add To Task" ,
    thoda apne postion se move ho rha tha

 2)

*/
