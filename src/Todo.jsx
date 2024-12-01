import { useState } from "react";

const TODO = () => {
  const [hover, sethover] = useState(false);
  const [showcancel, setshowcancel] = useState(false);
  const [showinput, setshowinput] = useState(false);

  //add item state
  const [tasks, settasks] = useState([]);
  const [item, setitem] = useState("");

  const AddTask = () => {
    if (item.trim()) {
    settasks([...tasks, item]);
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

  return (
    <>
      <div style={styles.container}>
        <div style={styles.top}>
          <p>TODO</p>
          <p>click</p>
        </div>

        {tasks.map((value, index) => {
          return (
            <div style={styles.alltask} key={index}>
            <button style={styles.itembutton}>
            {value}
            </button>
            </div>
          )
        })}

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
    border: "5px solid black",
    width: "40%",
    backgroundColor: "rgb(242, 238, 237)",
    borderRadius: "10px",
    padding: "10px",
  },
  top: {
    display: "flex",
    justifyContent: "space-between",
  },
  alltask:{
    display: "flex",
    marginTop:"10px"
  },
  itembutton: {
  border: "none", // Remove border
  outline: "none", // Remove focus outline
  width: "90%", 
  backgroundColor: "white", // Keep red background
  borderRadius: "20px", // Rounded corners
  cursor: "pointer", // Pointer cursor for interactivity
  fontSize: "16px", 
  fontWeight: "bold", 
  padding: "10px", // Add padding for better spacing
  boxShadow: "none", // Ensure no extra shadows
  margin: "0", // Remove any default margin
},
inputcontainer:{
    display: "flex",
    marginTop:"10px",

},
  addinput: {
    borderRadius: "20px",
    padding: "10px", // Add padding for better spacing
    color: "grey",
    width: "75%",

  },
  addbuttoncontainer: {
    display: "flex",
    alignItems: "center",
    gap: "10px", 
    marginTop: "30%",
  },
  addbutton: {
    flex: 1,
    border: "2px solid red",
    cursor: "pointer",
    padding: "6px", // remains constant
    borderRadius: "8px", //  remains constant
    height: "30px", //  remains constant
    border: "none",
    background: "none",
    fontSize: "15px",
    fontWeight: "bold",
    transition: "width 0.3s ease",
    textAlign: "center",
    whiteSpace: "nowrap",
    overflow: "hidden",
    width: "100%",
    backgroundColor:'grey'
  },
  addbuttonhover: {
    backgroundColor: "orange",
    width: "30%",
  },
  cancelbutton: {
    width: "20%",
    backgroundColor: "gray",
    borderRadius: "8px",
    color: "white",
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
