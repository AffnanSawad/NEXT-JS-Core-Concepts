import Image from 'next/image';
import React from 'react';

const page = () => {
    return (
        <div>
            <h1>Image Optimization</h1>

            <Image  src="https://i.ibb.co.com/C3H1ptTM/photo-2025-05-07-12-10-47.jpg" alt='not found' height={300} width={400} />  
        </div>
    );
};

export default page;