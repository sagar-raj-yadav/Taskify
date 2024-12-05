import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
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
        {/* <Link to="/my-orders" style={styles.navLink}>
          <p style={styles.icon}>🛒</p>
        </Link>

        <Link to="/cart" style={styles.navLink}>
          <div style={styles.cartIcon}>
            <p style={styles.icon}>🛍️</p>
            <span style={styles.cartCount}>5</span>
          </div>
        </Link>

        <Link to="/blog" style={styles.navLink}>
          <p style={styles.icon}>📝</p>
          <p style={styles.text}>Blog</p>
        </Link> */}

        <div style={styles.profileContainer}>
          <img
            alt="Profile"
            src="https://www.w3schools.com/w3images/avatar2.png"
            style={styles.profileIcon}
            onClick={toggleDropdown}
          />
          {isDropdownOpen && (
            <div style={styles.dropdownMenu}>
              <p style={styles.dropdownItem} onClick={() => navigate('/profile')}>
                Profile
              </p>
              <p style={styles.dropdownItem} onClick={handleLogout}>
                Logout
              </p>
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
    width:"60%",
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
  inputFocus: {
    border: '1px solid #007bff',
    boxShadow: '0 0 8px rgba(0,123,255,0.5)',
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
  icon: {
    fontSize: '20px',
  },
  cartIcon: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
  },
  cartCount: {
    position: 'absolute',
    top: '-8px',
    right: '-8px',
    backgroundColor: '#f44336',
    color: '#fff',
    borderRadius: '50%',
    padding: '4px 8px',
    fontSize: '12px',
  },
  profileContainer: {
    position: 'relative',
  },
  profileIcon: {
    height: '40px',
    width: '40px',
    borderRadius: '50%',
    cursor: 'pointer',
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
  dropdownItemLast: {
    borderBottom: 'none',
  },
  text: {
    marginLeft: '8px',
    fontSize: '14px',
    fontWeight: 'lighter',
  },
};

export default Navbar;
