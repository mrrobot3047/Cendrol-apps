import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);
  const [isTrue, setIsTrue] = useState(true);
  const squareColor = '#f2f4f3';

  const handleClick = () => {
    setCount(count + 1);
    setIsTrue(!isTrue);
  };
  const handleClick1 = () => {
    setCount(count + 10);
  };
  const buttonStyle = {
    backgroundColor: isTrue ? 'red' : 'blue',
    padding:'15px',
    borderRadius:'5px',
    margin:'30px',
    border:'none'

    // Add other styling properties as needed
  };

  return (
    <>
    <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
    <div style={{ backgroundColor: squareColor, width: '300px', height: '300px' }}>
        <div
          style={{
            backgroundColor: buttonStyle.backgroundColor,
            width: '200px',
            height: '200px',
            borderRadius: '50%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            margin: 'auto',
          }}
        >
            <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
            <span style={{fontSize:'20px'}}>{count}</span>
            <span onClick={handleClick1} style={{fontSize:'15px',textDecoration:'underline',cursor:'pointer'}}>Click to increase counter</span>

            </div>
         
        </div>
       
      </div>
      <div>
      <button style={buttonStyle} onClick={handleClick}>
        Change color
      </button>

      </div>
      

    </div>
     
     
    </>
  );
};

export default Counter;
