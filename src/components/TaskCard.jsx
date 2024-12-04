import { useState } from "react";
import Popup from './PopUp';

const TODO = ({heading,tasks,handleDragStart , createtaskinput, updateHeading }) => {
  const [hover, sethover] = useState(false);
  const [showcancel, setshowcancel] = useState(false);
  const [showinput, setshowinput] = useState(false);
  

  //add item state
  const [item, setitem] = useState("");

  //open and close popup state 
  const [open,setopen]=useState(false);

    // State for editable heading
    const [newHeading, setnewHeading] = useState("");


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

  return (
    <>
      <div style={styles.container}>
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
          </>
        ) : (
          <p>{heading}</p>
        )}
          <p>click</p>
        </div>

        {tasks.map((value, index) => {
          return (
            <div 
            style={styles.alltask} 
            draggable
            onDragStart={(e) => handleDragStart(e, value)}
             key={index}>
            <button onClick={()=>setopen(true)} style={styles.itembutton}>
            {value}
            </button>
            </div>
          )
        })}

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
              ...(hover ? styles.addbuttonhover : ""),
            }}
          >
            {showcancel ? "Add" : "+  Add a Task"}
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
    width: "90%",
    backgroundColor: "rgb(233, 228, 228,0.8)",
    borderRadius: "8px",
    padding: "10px",
    fontFamily: "Arial, sans-serif",
    
  },
  top: {
    display: "flex",
    justifyContent: "space-between",
  },
  alltask:{
    display: "flex",
    padding: "4px",
    marginTop:"2px"
  },
  itembutton: {
  border: "none", // Remove border
  outline: "none", // Remove focus outline
  width: "90%", 
  borderRadius: "8px", // Rounded corners
  cursor: "pointer", // Pointer cursor for interactivity
  fontSize: "16px", 
  border:"none",
  background:"none",
  backgroundColor: "#f9f9f9",
  fontWeight: "bold", 
  padding: "4px", // Add padding for better spacing
  boxShadow: "none", // Ensure no extra shadows
  margin: "0", // Remove any default margin
},
inputcontainer:{
    display: "flex",
    marginTop:"3px"
},
  addinput: {
    borderRadius: "8px",
    padding: "6px", // Add padding for better spacing
    color: "grey",
    width: "85%",
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
    borderRadius: "8px", //  remains constant
    height: "30px", //  remains constant
    border: "none",
    background: "none",
    fontSize: "clamp(0.5rem, 2vw, 1rem)",  //font size screen ke according change hoga
    fontWeight: "bold",
    transition: "width 0.3s ease",
    textAlign: "center",
    whiteSpace: "nowrap",
    color: "black",
    overflow: "hidden",
    width: "100%",
  },
  addbuttonhover: {
    // backgroundColor: "white",
    color:"orange",
    width: "30%",
  },
  cancelbutton: {
    width: "25%",
    backgroundColor: "gray",
    borderRadius: "10px",
    color: "white",
    padding:"4px",
    textAlign: "center",
    fontSize: "15px",
    cursor: "pointer",
    height: "30px",
    border: "none",
    backgroundColor:"red"
  },
};

export default TODO;

/*
 1) remains constant -> isko nhi likhte to mouseEnter karne ke baad "Add To Task" ,
    thoda apne postion se move ho rha tha

 2)

*/
