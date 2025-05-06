"use client"
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";



const NavBar = () => {
  

    const [isMenuOpen, setIsMenuOpen] = useState(false);
          
  
//     Nav Options  //
    const NavItems = [
       
        { title: "Home", path: "/Home" },
       
        { title: "Products", path: "/Products" },
       
        { title: "Counters", path: "/Counters" },
      
        { title: "Blog", path: "/Blog" },
    ];

    return (
        <div className="w-full navbar bg-white text-black shadow-sm mx-auto px-4">
            

            {/* Desktop Nav Items */}
            <div className="navbar-center hidden lg:flex">
                <div className="flex space-x-6">
                    {NavItems.map((item) => (
                        <Link
                            key={item.title}
                            href={item.path}
                            className="font-semibold hover:text-orange-600 duration-300"
                        >
                            {item.title}
                        </Link>
                    ))}
                </div>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="lg:hidden navbar-end">
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="focus:outline-none"
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    </svg>
                </button>
            </div>

            {/* Mobile Menu Dropdown */}
            {isMenuOpen && (
                <div className="absolute top-16 left-0 w-full bg-white shadow-md flex flex-col items-center py-4 z-50">
                    {NavItems.map((item) => (
                        <Link
                            key={item.title}
                            href={item.path}
                            className="py-2 text-lg font-semibold hover:text-orange-600 duration-300"
                            onClick={() => setIsMenuOpen(false)} // Close menu when clicked
                        >
                            {item.title}
                        </Link>
                    ))}
                    <button className="mt-4 btn btn-error">Appointment</button>

                    
                </div>
            )}

           
               
 

     
     </div>
      
    );
};

export default NavBar;