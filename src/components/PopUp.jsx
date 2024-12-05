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
          <p>Task Name</p>
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
          <input type="datetime-local" id="date-time" name="date-time" />
        </div>

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

              <button
                onClick={showInputFunction}
                style={styles.addButton}
              >
                Add
              </button>

              <div>
                <button
                  style={styles.join}
                  onClick={() => setJoined(!joined)}
                >
                  {joined ? "Joined" : "Join"}
                </button>
                <button>Members</button>
              </div>
            </div>
          )}
        </div>

        <div style={styles.activity}>
          <p style={styles.descript}>Activity:</p>
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

          <button
            onClick={commentFunction}
            style={styles.comment}
          >
            Comment
          </button>
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
    maxWidth: "600px", // To ensure the popup is not too wide
    textAlign: "center",
    borderRadius: "20px",
    maxHeight: "80vh",
    overflowY: "auto",  // This allows scrolling when content overflows
    overflowX: "hidden", // Prevent horizontal scrolling
},

  name: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "10px",
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
  select: {
    borderRadius: "8px",
    cursor: "pointer",
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
    borderRadius: "5px",
    padding: "6px",
    width: "100%",
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
  join: {
    padding: "10px",
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

