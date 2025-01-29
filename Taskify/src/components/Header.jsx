import { Link } from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(prevState => !prevState);
  };

  return (
    <nav style={styles.navbar}>
      <div style={styles.leftSection}>
        <Link to="/" style={styles.logo}>
         <img style={{height:"50px",width:"50px",background:"none"}} src="companylogo.png"/>
        </Link>
      </div>

      {/* <div style={styles.searchContainer}>
        <input type="text" placeholder="Search Tasks..." style={styles.input} />
      </div> */}

      <div style={styles.navLinks}>

      <Link to="/" style={styles.navLink}>
  <div style={styles.badgeContainer}>
    <img src="streak.png" height="20px"  />
    <span style={styles.badge}>0</span>
  </div>
  <p style={styles.text}>Streak</p>
</Link>

<Link to="/dashboard" style={styles.navLink}>
  <div style={styles.badgeContainer}>
    <img src="dashboard.png" height="24px"  />
  </div>
  <p style={styles.text}>DashBoard</p>
</Link>



        <Link to="/member" style={styles.navLink}>
          <img src="members.jpg"  style={styles.profileIcon}/>
          <p style={styles.text}>Members</p>
        </Link>

        <div style={styles.profileContainer} onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
          <img
            alt="Profile"
            src="https://www.w3schools.com/w3images/avatar2.png"
            style={styles.profileIcon}
          />
          {isDropdownVisible && (
            <div style={styles.dropdownMenu}>
              <div style={styles.dropdownItem}>Profile</div>
              <div style={styles.dropdownItem}>Logout</div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '8px 4%',
    backgroundColor: '#333',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
    color: '#fff',
    position: 'sticky',
    top: '0',
    zIndex: 1000,
  },
  leftSection: {
    display: 'flex',
    alignItems: 'center',
  },
  logo: {
    fontSize: '26px',
    fontWeight: 'bold',
    color: '#fff',
    textDecoration: 'none',
    textTransform: 'uppercase',
    letterSpacing: '1px',
  },
  searchContainer: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '0 30px 0 0',
  },
  input: {
    width: "60%",
    padding: '7px 18px',
    borderRadius: '50px',
    border: '1px solid #ddd',
    backgroundColor: '#fff',
    fontSize: '16px',
    color: '#333',
    outline: 'none',
    transition: 'border 0.3s ease',
    boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
  },
  navLinks: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  },
  navLink: {
    textDecoration: 'none',
    color: '#fff',
    flexDirection:"column",
    fontSize: '18px',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    padding: '5px 15px',
    borderRadius: '25px',
    transition: 'background-color 0.3s ease',
  },
  badgeContainer: {
  position: 'relative', 
  display: 'inline-block',
},

badge: {
  position: 'absolute',
  top: '-8px', 
  right: '-15px', 
  backgroundColor: 'red',
  color: 'white',
  borderRadius: '50%',
  padding: '3px 6px',
  fontSize: '12px',
  fontWeight: 'bold',
  lineHeight: '1',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
},

  navLinkHover: {
    backgroundColor: '#555',
  },
 
  profileContainer: {
    position: 'relative',
    cursor: 'pointer',
  },
  profileIcon: {
    height: '30px',
    width: '30px',
    borderRadius: '50%',
    objectFit: 'cover',
    transition: 'transform 0.3s ease',
  },
  profileIconHover: {
    transform: 'scale(1.1)',
  },
  dropdownMenu: {
    position: 'absolute',
    top: '45px',
    right: '0',
    backgroundColor: '#fff',
    color: '#333',
    border: '1px solid #ddd',
    borderRadius: '5px',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
    zIndex: 1000,
    padding: '10px 15px',
    width: '180px',
  },
  dropdownItem: {
    padding: '10px 0',
    fontSize: '16px',
    cursor: 'pointer',
    borderBottom: '1px solid #ddd',
    textAlign: 'center',
  },
  text: {
    marginLeft: '8px',
    fontSize: '13px',
    fontWeight: 'lighter',
  },
};

export default Navbar;
