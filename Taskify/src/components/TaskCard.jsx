import PropTypes from 'prop-types';
import { useState } from 'react';
import { MdRadio } from "react-icons/md";
import { RxActivityLog } from "react-icons/rx";
import { TfiAlignLeft } from "react-icons/tfi";

const PopUp = ({ task, onEdit, onDelete ,onClose}) => {
  const [showInput, setShowInput] = useState(true);
  const [activityValue, setActivityValue] = useState("");
  const [description, setDescription] = useState("");
  const [allActivity, setAllActivity] = useState([]);
  const [addMember, setAddMember] = useState(false);

  const showInputFunction = () => {
    if (description.trim() !== "") {
      setShowInput(false);
    }
  };

  const commentFunction = () => {
    if (activityValue.trim() !== "") {
      setAllActivity([...allActivity, activityValue]);
      setActivityValue("");
    }
  };

  return (
    <div style={styles.mainContainer}>
      <div style={styles.container}>
      
        <div style={styles.name}>
        <p>  <MdRadio /> {task.title}</p>
          <button onClick={onClose} style={styles.closeButton}>x</button>
        </div>

        <div style={styles.status}>
          <p style={{fontSize:"15px"}}>Status:</p>
          <p
            style={{
              borderRadius: "6px",
              padding: "3px",
              fontWeight: "bold",
              color: "green",
            }}
          >
            {task.status}
          </p>
        </div>

        <div style={styles.priority}>
          <p style={{fontSize:"15px"}}>Priority: {task.priority}</p>
        </div>

        <div style={styles.mainSection}>
          {/* Left Section: Description and Comments */}
          <div style={styles.leftSection}>
            <div style={styles.description}>
              <p style={styles.descript}><TfiAlignLeft /> Description</p>
              {!showInput ? (
                 <p  style={styles.descriptionButton}>{description}</p> 
              ) : (
                <div style={styles.descriptionInputContainer}>
                  <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="descriptionPlaceholder"
                    style={styles.descriptionInput}
                    placeholder="Add more details"
                    onInput={(e) => {
                      e.target.style.height = "auto"; 
                      e.target.style.height = `${e.target.scrollHeight}px`;
                    }}
                  />
                  <button onClick={showInputFunction} style={styles.addButton}>
                    Add
                  </button>
                </div>
              )}
            </div>

            <div style={styles.activity}>
              <p style={styles.descript}><RxActivityLog fontSize="16px" /> Activity </p>
              <input
                value={activityValue}
                onChange={(e) => setActivityValue(e.target.value)}
                className="activityPlaceholder"
                style={styles.activityInput}
                placeholder="Write a comment"
                onInput={(e) => {
                  e.target.style.height = "auto"; 
                  e.target.style.height = `${e.target.scrollHeight}px`; 
                }}
              />
                
              <button onClick={commentFunction} style={styles.comment}>
            
               Comment
              </button>
            </div>
          </div>

          {/* Right Section: Join and Members */}
          <div style={styles.rightSection}>
            <button
              onClick={() => setAddMember(!addMember)}
              style={styles.members}
            >
              {addMember ? "Members1" : "+ Members1"}
            </button>
            {/* Add similar buttons as needed */}
          </div>
        </div>

        {allActivity.map((value, index) => (
          <div
    style={{
      display: "flex",
      flexDirection: "row", 
      alignItems: "flex-start",
      borderRadius: "8px",
      marginTop: "6px",
      width: "72%",
      backgroundColor: "rgb(243, 243, 243)",
    }}
    key={index}
  >
    <p style={styles.descriptionButton}>{value}</p>
    <p style={styles.dateTime}> {new Date().toLocaleString("en-GB", {
        day: "numeric",
        month: "long",
        year: "numeric",
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      })}</p>
  </div>

        ))}

        <div style={styles.deleteContainer}>
          <button 
            onClick={() => {
          onEdit();
          onClose();
        }} 
          style={styles.deleteButton}>
            Edit Task
          </button>
          <button  
            onClick={() => {
            onDelete();
          onClose();
        }}
          style={styles.deleteButton}>
            Delete Task
          </button>
        </div>
      </div>
    </div>
  );
};

const styles = {
    mainContainer: {
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(0,0,0,0.5)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      zIndex: "1000",
    },
    container: {
     backgroundColor: 'rgb(216, 213, 212)',
      padding: "20px",
      width: "80%",
      maxWidth: "600px",
      textAlign: "center",
      borderRadius: "8px",
      maxHeight: "80vh",
      overflowY: "auto", // Allow vertical scrolling
      overflowX: "hidden", // Prevent horizontal scrolling
      // Hiding the scrollbar
      scrollbarWidth: "none", // For Firefox
      "-ms-overflow-style": "none", // For Internet Explorer and Edge
    },
    // Hide scrollbar for WebKit-based browsers
    "@global": {
      "div::-webkit-scrollbar": {
        display: "none", // Hides the scrollbar
      },
    },
    name: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center", // Aligns items vertically in the center
      marginBottom: "10px",
      fontWeight: "bold",
    },
   
    closeButton: {
      cursor: "pointer",
      borderRadius: "50%",
      backgroundColor: "grey",
      color: "white",
      padding: "10px",
      height: "30px",
      width: "30px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "20px",
      border: "none",
      fontStyle: "italic",
    },
    status: {
      display: "flex",
      alignItems: "center",
      gap: "7px",
      height: "20px",
      marginBottom: "10px",
    },
    priority: {
      display: "flex",
      alignItems: "center",
      gap: "7px",
      height: "20px",
      marginBottom: "10px",
    },
    datetime: {
      display: "flex",
      alignItems: "center",
      gap: "7px",
      height: "20px",
      marginBottom: "10px",
    },
    datetimeinput: {
      borderRadius: "8px",
      backgroundColor: "rgb(230, 234, 234)",
      cursor: "pointer",
    },
    select: {
      borderRadius: "8px",
      backgroundColor: "rgb(230, 234, 234)",
      cursor: "pointer",
    },
    mainSection: {
      display: "flex",
      justifyContent: "space-between",
      gap: "20px",
      marginTop: "20px",
    },
  leftSection: {
    flex: 3, // Takes more space
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  rightSection: {
    flex: 1, // Takes less space
    display: "flex",
    flexDirection: "column",
    gap: "4px",
    alignItems: "flex-end",
    justifyContent: "flex-start",
  },
  join: {
    padding: "6px",
    width:"90%",
    borderRadius: "4px",
    backgroundColor: "#6b8eff",
    color: "white",
    fontWeight: "bold",
    cursor: "pointer",
    border: "none",
  },
  members: {
    padding: "6px",
    width:"90%",
    borderRadius: "4px",
    backgroundColor: "#8f8f8f",
    color: "white",
    fontWeight: "bold",
    cursor: "pointer",
    border: "none",
  },
  description: {
    textAlign: "start",
    marginBottom: "15px",
  },
  descript: {
    marginBottom: "6px",
    gap:"10px",
    display: "flex",
    alignItems: "center",
  },
  
  descriptionButton: {
    border: "none",
    marginTop:"6px",
    borderRadius: "8px",
    padding: "6px",
    width: "72%",
    cursor: "pointer",
    textAlign: "start",
    wordWrap: "break-word",
    boxSizing: "border-box",
  },
  dateTime: {
    marginTop: "4px",
    color: "rgb(120, 120, 120)",
    fontSize: "12px", 
    fontWeight: "400",
  },

  descriptionInputContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    alignItems: "flex-start",
  },
  descriptionInput: {
    width: "100%",
    outline:"none",
    borderRadius: "12px",
    padding: "6px",
    height: "40px",
    backgroundColor: "white",
    border: "none",
    color: "black",
    fontSize: "14px",
    resize: "none",
    overflow: "hidden",
    boxSizing: "border-box",
  },
  addButton: {
    padding: "6px",
    borderRadius: "10px",
    cursor: "pointer",
    border: "none",
    fontWeight:"bold",
    backgroundColor: "rgb(86, 193, 246,0.8)",
    color: "white",
  },
  joincontainer:{
    display:"flex",
    width:"20px"
  },
  activity: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    alignItems: "flex-start",
    marginBottom: "15px",
  },
  activityInput: {
    width: "100%",
    outline:"none",
    padding: "8px",
    borderRadius: "10px",
    backgroundColor: "white",
    border: "none",
    color: "black",
    fontSize: "13px",
    resize: "none",
    overflow: "hidden",
    boxSizing: "border-box",
  },
  comment: {
    padding: "8px",
    borderRadius: "10px",
    cursor: "pointer",
    border: "none",
    backgroundColor: "rgb(86, 193, 246,0.8)",
    color: "white",
    fontWeight: "bold",
  },
  deleteContainer: {
    textAlign: "end",
     cursor: 'pointer',
     display: "flex",
      justifyContent: "flex-end",
      gap:"20px",
      marginTop:"20px"
  },
  deleteButton: {
    border: "none",
    borderRadius: "24px",
    padding: "8px",
    fontWeight: "bold",
    backgroundColor: "rgb(246, 52, 52, 0.9)",
    color: "white",
    fontStyle: "italic",
    cursor: 'pointer',
  },
  
};

export default PopUp;


PopUp.propTypes = {
    task: PropTypes.shape({
      title: PropTypes.string.isRequired,
      status: PropTypes.string.isRequired,
      priority: PropTypes.string.isRequired,
    }).isRequired,
    onEdit: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
    onClose:PropTypes.func.isRequired,
  };
  