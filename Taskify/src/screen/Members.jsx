import { useState } from 'react';
import Header from '../components/Header';


const Members = () => {
  const [members, setMembers] = useState([]);
  const [showInputs, setShowInputs] = useState(false);
  const [newMember, setNewMember] = useState({
    name: '',
    email: '',
    contact: '',
    position: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewMember((prevMember) => ({
      ...prevMember,
      [name]: value,
    }));
  };

  const handleAddMember = () => {
    const { name, email, contact, position ,team} = newMember;
    if (name && email && contact && position && team) {
      setMembers([
        ...members,
        { ...newMember }
      ]);
      setNewMember({
        name: '',
        email: '',
        contact: '',
        position: '',
        team:''
      });
      setShowInputs(false); // Hide inputs after adding
    }
  };

  const handleCancel = () => {
    setNewMember({
      name: '',
      email: '',
      contact: '',
      position: '',
      team:''
    });
    setShowInputs(false); // Hide inputs when cancel is clicked
  };

  return (
    <>
      <Header/>
    <div style={styles.container}>
      <button onClick={() => setShowInputs(!showInputs)} style={styles.addButton}>
        Add Member
      </button>

      {showInputs && (
    <div style={styles.inputContainer}>
        <div style={styles.inputRow}>
            <input
              name="name"
              value={newMember.name}
              onChange={handleInputChange}
              placeholder="Name"
              style={styles.input}
            />
            <input
              name="email"
              value={newMember.email}
              onChange={handleInputChange}
              placeholder="Email"
              style={styles.email}
            />
            <input
              name="contact"
              value={newMember.contact}
              onChange={handleInputChange}
              placeholder="Contact"
              style={styles.input}
            />
            <input
              name="position"
              value={newMember.position}
              onChange={handleInputChange}
              placeholder="Position"
              style={styles.input}
            />
             <input
              name="team"
              value={newMember.team}
              onChange={handleInputChange}
              placeholder="Team"
              style={styles.input}
            />
             <div style={styles.buttonContainer}>
            <button onClick={handleAddMember} style={styles.addButton}>Add</button>
            <button onClick={handleCancel} style={styles.cancelButton}>Cancel</button>
          </div>
        </div>
         
     </div>
      )}

      <table style={styles.table}>
        <thead>
          <tr style={styles.tableHeader}>
            <th style={styles.tableHeaderCell}>Name</th>
            <th style={styles.tableHeaderCell}>Email</th>
            <th style={styles.tableHeaderCell}>Contact</th>
            <th style={styles.tableHeaderCell}>Position</th>
            <th style={styles.tableHeaderCell}>Team</th>
          </tr>
        </thead>
        <tbody>
          {members.map((member, index) => (
            <tr key={index} style={styles.tableRow}>
              <td style={styles.tableCell}>{member.name}</td>
              <td style={styles.tableCell}>{member.email}</td>
              <td style={styles.tableCell}>{member.contact}</td>
              <td style={styles.tableCell}>{member.position}</td>
              <td style={styles.tableCell}>{member.team}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>

  );
};

const styles = {
  container: {
    marginTop:"30px",
    padding: '20px',
    maxWidth: '800px',
    margin: '0 auto',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
  },
  addButton: {
    padding: '6px 10px',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '16px',
    width: '100%',
  },
  cancelButton: {
    padding: '6px 10px',
    backgroundColor: '#f44336',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '16px',
    width: '100%',
  },
  inputContainer: {
    marginTop:"20px",
    marginBottom: '20px',
  },
  inputRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems:"center",
    gap: '20px',
    marginBottom: '10px',
  },
  input: {
    padding: '10px',
    width: '22%',
    border: '1px solid #ccc',
    borderRadius: '4px',
    fontSize: '10px',
  },
  email:{
    padding: '10px',
    width: '62%',
    border: '1px solid #ccc',
    borderRadius: '4px',
    fontSize: '10px',
  },
  line: {
    height: '1px',
    backgroundColor: '#ddd',
    margin: '10px 0',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems:"center",
    gap: '10px',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    marginTop: '20px',
  },
  tableHeader: {
    backgroundColor: '#f1f1f1',
  },
  tableHeaderCell: {
    padding: '12px 15px',
    textAlign: 'left',
    fontWeight: 'bold',
    borderBottom: '2px solid #ddd',
  },
  tableRow: {
    borderBottom: '1px solid #ddd',
  },
  tableCell: {
    padding: '12px 15px',
    textAlign: 'left',
    // border:'1px solid #ddd'
  },
};

export default Members;
