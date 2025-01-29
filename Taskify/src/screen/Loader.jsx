const Loader = () => {
  const styles = {
    wrapper: {
      display: 'flex',
      gap: '10px',
    },
    dot: {
      borderRadius: '50%',
      backgroundColor: '#008ae6',
      boxShadow: '0 5px 10px rgba(0, 0, 0, 0.1)',
      animation: 'animate 1s ease-in-out infinite alternate',
    },
    dot1: {
      animationDelay: '-0.25s',
    },
    dot2: {
      backgroundColor: '#e60000',
      animationDelay: '-0.5s',
    },
    dot3: {
      backgroundColor: '#ffcc00',
      animationDelay: '-0.75s',
    },
    dot4: {
      backgroundColor: '#008800',
      animationDelay: '-1s',
    },
  };

  return (
    <>
      <style>
        {`
          @keyframes animate {
            0% {
              transform: translateY(-10px);
            }
            100% {
              transform: translateY(5px);
            }
          }
        `}
      </style>
      <div style={styles.wrapper}>
        <span
          style={{
            ...styles.dot,
            ...styles.dot1,
            width: '10px',  // Reduced size
            height: '10px', // Reduced size
          }}
        ></span>
        <span
          style={{
            ...styles.dot,
            ...styles.dot2,
             width: '10px',  // Reduced size
            height: '10px', // Reduced size
          }}
        ></span>
        <span
          style={{
            ...styles.dot,
            ...styles.dot3,
             width: '10px',  // Reduced size
            height: '10px', // Reduced size
          }}
        ></span>
        <span
          style={{
            ...styles.dot,
            ...styles.dot4,
             width: '10px',  // Reduced size
            height: '10px', // Reduced size
          }}
        ></span>
      </div>
    </>
  );
};

export default Loader;
