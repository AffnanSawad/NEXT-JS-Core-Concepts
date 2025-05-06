'use client'

import { useRouter } from 'next/navigation';
import React from 'react';

const HomePage = () => {

   //  Navigate Hook:
   
       const navigateToCounters = useRouter();
   
       const handlenavigateToCounters = ()=> {
   
           navigateToCounters.push('/Counters')
       }


    return (
        <div>
            <h1 className="text-4xl text-red-500 font-bold text-center mt-20">Hello !This is a HOME Page</h1>
        
        
        
            <button
         onClick={handlenavigateToCounters }
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
        Count Now
      </button>
        
        
        
        
        
        
        </div>
    );
};

export default HomePage;