import Todo from './components/Todo';
import Doing from './components/Doing';
import Done from './components/Done';

import Popup from './components/PopUp';
import { useState } from 'react';



const App = () => {
const [open,setopen]=useState(false);

  return (
    <div style={styles.container}>
   {/* <div style={styles.item}>
    <Todo heading="TODO"/>
    </div>
    <div style={styles.item}>
    <Doing  heading="Doing"/>
    </div>
    <div style={styles.item}>
    <Done  heading="Done"/>
    </div> */}

    <button style={styles.popupbutton} onClick={()=>setopen(true)}>open popup</button>
    {open && <Popup onClose={()=>setopen(false)}/>}
    </div>
  )
}

const styles={
  container:{
  display: "flex", 
  justifyContent: "center",
  },
  item: {
    height:"90%",
    width:"500px"
  },
  popupbutton:{
    cursor:"pointer"
  }
}
export default App