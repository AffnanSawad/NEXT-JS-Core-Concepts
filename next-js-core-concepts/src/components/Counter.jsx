'use client'

import { useState } from 'react';

const Counter = () => {
 

    const [counter , setcounter] = useState(0)



    return (
        <div style={{ textAlign: 'center', marginTop: '100px' }}>
      <button
         onClick={ ()=> setcounter(counter - 1) }
        style={{
          fontSize: '24px',
          padding: '10px 20px',
          margin: '10px',
          backgroundColor: '#f44336',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer'
        }}
      >
        −
      </button>

      <button
         onClick={ ()=> setcounter(counter + 1) }
        style={{
          fontSize: '24px',
          padding: '10px 20px',
          margin: '10px',
          backgroundColor: '#4CAF50',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer'
        }}
      >
        +
      </button>

      <h1 className='text-4xl font-extrabold '> Total :  {counter} </h1>
    </div>
    );
};

export default Counter;