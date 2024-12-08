import React, { useState } from 'react';

const PopUp = ({ onClose, task }) => {
  const [description, setDescription] = useState("");
  const [showInput, setShowInput] = useState(true);
  const [allActivity, setAllActivity] = useState([]);
  const [selectedStatus, setSelectedStatus] = useState(task);
  const [activityValue, setActivityValue] = useState("");
  const [joined, setJoined] = useState(false);

  const commentFunction = () => {
    if (activityValue.trim() !== "") {
      setAllActivity([...allActivity, activityValue]);
      setActivityValue("");
    }
  };

  const showInputFunction = () => {
    if (description.trim() !== "") {
      setShowInput(false);
    }
  };

  return (
    <div style={styles.mainContainer}>
      <div style={styles.container}>
        <div style={styles.name}>
          <p> name of task</p>
          <button style={styles.closeButton} onClick={onClose}>x</button>
        </div>

        <div style={styles.status}>
          <p>Status: {task}</p>
        </div>

        <div style={styles.priority}>
          <p>Priority</p>
          <select
            value={selectedStatus}
            style={styles.select}
            onChange={(e) => setSelectedStatus(e.target.value)}
          >
            <option value="normal">Normal</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div>

        <div style={styles.datetime}>
          <label htmlFor="date-time">Select Date and Time:</label>
          <input type="datetime-local" style={styles.datetimeinput} id="date-time" name="date-time" />
        </div>


        <div style={styles.mainSection}>
  {/* Left Section: Description and Comments */}
  <div style={styles.leftSection}>
    <div style={styles.description}>
      <p style={styles.descript}>Description:</p>
      {!showInput ? (
        <button style={styles.descriptionButton}>
          {description.trim() !== "" && description}
        </button>
      ) : (
        <div style={styles.descriptionInputContainer}>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="descriptionPlaceholder"
            style={styles.descriptionInput}
            placeholder="Add more details"
            onInput={(e) => {
              e.target.style.height = "auto"; // Reset height for recalculation
              e.target.style.height = `${e.target.scrollHeight}px`; // Set height based on content
            }}
          />
          <button onClick={showInputFunction} style={styles.addButton}>
            Add
          </button>
        </div>
      )}
    </div>

    <div style={styles.activity}>
      <p style={styles.descript}>Comments:</p>
      <textarea
        value={activityValue}
        onChange={(e) => setActivityValue(e.target.value)}
        className="activityPlaceholder"
        style={styles.activityInput}
        placeholder="Write a comment"
        onInput={(e) => {
          e.target.style.height = "auto"; // Reset height for recalculation
          e.target.style.height = `${e.target.scrollHeight}px`; // Set height based on content
        }}
      />
      <button onClick={commentFunction} style={styles.comment}>
        Comment
      </button>
    </div>
  </div>

  {/* Right Section: Join and Members */}
  <div style={styles.rightSection}>
    <button style={styles.join} onClick={() => setJoined(!joined)}>
      {joined ? "Joined" : "Join"}
    </button>
    <button style={styles.members}>Members1</button>
    <button style={styles.members}>Members2</button>
    <button style={styles.members}>Members3</button>
    <button style={styles.members}>Members4</button>
    <button style={styles.members}>Members5</button>
    <button style={styles.members}>Members6</button>
    <button style={styles.members}>Members7</button>
  </div>
  
</div>




        {allActivity.map((value, index) => {
          return (
            <div key={index}>
              <p style={styles.descriptionButton}>{value}</p>
            </div>
          );
        })}

        <div style={styles.deleteContainer}>
          <button style={styles.deleteButton}>Delete Task</button>
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
      backgroundColor: "white",
      padding: "20px",
      width: "80%",
      maxWidth: "600px",
      textAlign: "center",
      borderRadius: "4px",
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
      marginBottom: "10px",
      fontSize: "20px",
      fontWeight: "bold",
      marginLeft: "40%",
    },
    closeButton: {
      cursor: "pointer",
      borderRadius: "50%",
      backgroundColor: "red",
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
  description: {
    textAlign: "start",
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
  },
  
  descriptionButton: {
    border: "none",
    marginTop:"2px",
    borderRadius: "8px",
    padding: "6px",
    width: "72%",
    cursor: "pointer",
    textAlign: "start",
    backgroundColor: "rgb(216, 213, 212, 0.5)",
    wordWrap: "break-word",
    boxSizing: "border-box",
  },
  descriptionInputContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    alignItems: "flex-start",
  },
  descriptionInput: {
    width: "100%",
    borderRadius: "6px",
    padding: "6px",
    height: "40px",
    backgroundColor: "rgb(216, 213, 212)",
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
    backgroundColor: "rgb(100, 150, 255)",
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
    padding: "6px",
    borderRadius: "10px",
    backgroundColor: "rgb(216, 213, 212)",
    border: "none",
    color: "black",
    fontSize: "14px",
    resize: "none",
    overflow: "hidden",
    boxSizing: "border-box",
  },
  comment: {
    padding: "6px",
    borderRadius: "10px",
    cursor: "pointer",
    border: "none",
    backgroundColor: "rgb(100, 150, 255)",
    color: "white",
  },
  deleteContainer: {
    textAlign: "end",
    marginRight: "10px",
    marginTop: "40px",
  },
  deleteButton: {
    border: "none",
    borderRadius: "24px",
    padding: "10px",
    fontWeight: "bold",
    backgroundColor: "rgb(246, 52, 52, 0.9)",
    color: "white",
    fontStyle: "italic",
  },
  
};

export default PopUp;

