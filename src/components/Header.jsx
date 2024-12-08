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
          <p>Company</p>
        </Link>
      </div>

      <div style={styles.searchContainer}>
        <input type="text" placeholder="Search Tasks..." style={styles.input} />
      </div>

      <div style={styles.navLinks}>
        <Link to="/member" style={styles.navLink}>
          <p style={styles.icon}>📝</p>
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
    padding: '15px 5%',
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
    gap: '20px',
  },
  navLink: {
    textDecoration: 'none',
    color: '#fff',
    fontSize: '18px',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    padding: '5px 15px',
    borderRadius: '25px',
    transition: 'background-color 0.3s ease',
  },
  navLinkHover: {
    backgroundColor: '#555', // Adding hover effect for links
  },
  icon: {
    fontSize: '20px',
  },
  profileContainer: {
    position: 'relative',
    cursor: 'pointer',
  },
  profileIcon: {
    height: '40px',
    width: '40px',
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
    fontSize: '14px',
    fontWeight: 'lighter',
  },
};

export default Navbar;
