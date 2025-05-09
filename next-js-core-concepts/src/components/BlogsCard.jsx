import Link from 'next/link';
import React from 'react';

const BlogsCard = ({blog}) => {
   
   
    return (
      <div className="max-w-md mx-auto mt-12 bg-white shadow-lg rounded-2xl p-6 mb-4 border border-gray-200 hover:shadow-xl transition-shadow duration-300">
  <h1 className="text-2xl font-bold text-gray-800 mb-2">{blog.name}</h1>
  <h2 className="text-lg text-gray-600 mb-1">By: {blog.author_name}</h2>
  <p className="text-sm text-gray-500 mb-2">Published on: {blog.date}</p>
  <p className="text-base text-green-600 font-semibold">Price: ${blog.price}</p>

 
 <Link href={`/Blogs/${blog.id}`}>
 
 <button className=' text-white bg-red-700 h-10 w-40 rounded-2xl my-10 hover:bg-red-400'>View Details</button>
 
 </Link>



</div>

    );
};

export default BlogsCard;