import { useState } from "react";


const TODO=()=>{

    const [hover,sethover]=useState(false);
    const [showcancel,setshowcancel]=useState(false);
    const [showinput,setshowinput]=useState(false);

    const showinputAndcancel=()=>{
        setshowcancel(true);
        setshowinput(true);
    }

    const hideinput=()=>{
        setshowcancel(false);
        setshowinput(false);
    }

    return(
        <>
        <div style={styles.container}>

        <div style={styles.top}>
        <p>TODO</p>
        <p>click</p>
        </div>

      { showinput?
         <div style={styles.inputconatiner}>
        <p>shown input</p>
        </div>
        :""
      }


        <div style={styles.addbuttoncontainer}>
        <button 
        onClick={showinputAndcancel}
        onMouseEnter={()=>sethover(true)}
        onMouseLeave={()=>sethover(false)}
        style={{...styles.addbutton,
        ...(hover?styles.addbuttonhover:"")}}>+  Add a Task</button>
        {showcancel && (
          <button 
        onClick={hideinput}
          style={styles.cancelbutton}>x</button>
        )}
        </div>
        


        </div>
       
        </>
    )
}


const styles={
    container:{
       border:"2px solid black" ,
       width:"40%",
       backgroundColor:'rgb(242, 238, 237)',
       borderRadius:"10px",
       padding:"10px"
    },
    top:{
        display:"flex",
        justifyContent:"space-between"
    },
    addbuttoncontainer:{
        display:"flex",
        alignItems: "center", // Vertically center items
    gap: "10px", // Adds space between buttons
    marginTop: "30%",
  
    },
    addbutton:{
        flex: 1, 
       border:"2px solid red" ,
       cursor:"pointer",
       padding: "6px",  // remains constant
       borderRadius: "8px",//  remains constant
       height:"30px",//  remains constant
       border: "none",
       background: "none",
       fontSize:"15px",
       fontWeight:"bold",
       transition: "width 0.3s ease", 
       textAlign:"left",
       whiteSpace: "nowrap",
       overflow: "hidden",
    width: "100%",

    },
    addbuttonhover:{
        backgroundColor:"red",
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
  },
  inputconatiner:{
    height:"50%"
  }
}


export default TODO;

/*
 1) remains constant -> isko nhi likhte to mouseEnter karne ke baad "Add To Task" ,
    thoda apne postion se move ho rha tha

 2)

*/