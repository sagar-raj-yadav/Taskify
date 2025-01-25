

import {useState} from 'react';
import Card from './Card';
import PropTypes from 'prop-types';  

const Main = ({handleAddCustomCard }) => {

    const [createCustomCard, setCreateCustomCard] = useState(false);
    const [heading, setHeading] = useState("");

    
    const handleCreate = () => {
      if (heading.trim() !== '') {
          handleAddCustomCard(heading);  // Pass the title of the new card to the parent component
          setCreateCustomCard(false);    // Close the card creation form
      }
  };


  return (
    <div  style={styles.wrapper}>
    
    <button style={styles.createtask} 
      onClick={()=>setCreateCustomCard(!createCustomCard)}>
       + Add List
    </button>

    { 
        createCustomCard
         && (
         <Card
         setCreateCustomCard={setCreateCustomCard}
         heading={heading}
         setHeading={setHeading}
         handleCreate={handleCreate}
          />
         )
    }

    </div>
  )
}

const styles = {
  wrapper: {
    textAlign: "center",
    marginTop: "20px",
  },
  buttonContainer: {
    display: "inline-block", 
    textAlign: "center",
    width: "200px", 
    margin: "0 auto",
  },
  createtask: {
    width: "100px", 
    padding: "16px", 
    borderRadius: "10px",
    border: "none",
    backgroundColor: "rgba(126, 226, 248, 0.84)",
    fontWeight: "bold",
    fontSize: "1rem", 
    color: "white",
    cursor: "pointer",
    textAlign: "center",
    display: "block",
    transition: "all 0.3s ease",
  },

};
export default Main

Main.propTypes = {
  handleAddCustomCard: PropTypes.func.isRequired,  
};