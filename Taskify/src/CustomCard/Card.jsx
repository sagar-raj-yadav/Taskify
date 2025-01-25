
import PropTypes from "prop-types";

const Card = ({setCreateCustomCard,heading,setHeading,handleCreate }) => {

   

  return (
    <div style={styles.container}>
    <div style={styles.top}>
            <input
              style={styles.headingInput}
              value={heading}
              onChange={(e) => setHeading(e.target.value)}
              placeholder="Enter new heading"
            />  
          
            <button
            onClick={handleCreate}
            style={styles.createButton} >
              Create
            </button>

            <button 
            onClick={()=>setCreateCustomCard(false)}
             style={styles.cancelbutton}>
             X
             </button>
        

        </div>
    
    </div>
  )
}


const styles = {
    container: {
    marginTop:"10px",
      height: '110px',
      border: '1px solid #ccc',
      width: '280px',
      backgroundColor: '#f1f2f4',
      borderRadius: '8px',
      padding: '10px',
      fontFamily: 'Arial, sans-serif',
    },
    top: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headingInput:{
    outline:"0",
    borderRadius:"12px",
    padding:"6px",
    fontSize:"14px",
    color:"grey",
    border:"none",
    flex: 1,
    marginRight: "10px",
  },
  createButton:{
    width: "60px",
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
  },
  cancelbutton: {
    width: "30px",
    backgroundColor: "red",
    borderRadius: "10px",
    color: "white",
    padding:"4px",
    textAlign: "center",
    fontSize: "12px",
    cursor: "pointer",
    height: "30px",
    border: "none",
    marginLeft: "5px",
  },
 


}
export default Card


Card.propTypes = {
  setCreateCustomCard: PropTypes.func.isRequired,
  heading: PropTypes.string.isRequired,
  setHeading: PropTypes.func.isRequired,
  handleCreate: PropTypes.func.isRequired, // Validate handleCreate as a required function
};