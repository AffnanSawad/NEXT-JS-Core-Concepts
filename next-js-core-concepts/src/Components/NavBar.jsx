"use client"
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";


const NavBar = () => {
   
    // Jate nav optn e clink korle ota highLight Hoye thake
    const pathname = usePathname();

    //  Login button e click korle login page e navigate kora

    const router = useRouter()


    const handleLogIn = () => {

        router.push('/LogIn')
    }



    return (
        <div className="flex justify-between items-center gap-5 bg-purple-300 px-6 py-5">

            <h1 className="text-3xl font-bold">Next JS</h1>
       
        <div >
           
           <nav >
            <ul className="flex justify-between items-center space-x-4">


            <Link  href={'/'}  className={`${pathname === "/" && "bg-red-700"}`}>
           
            <li className="font-bold">Home</li> 
            
            </Link>        
                
                
        <Link href={'/About'} className={`${pathname === "/About" && "bg-red-700"}`}>
        
        <li className="font-bold">About</li>
        
        </Link>


          <Link href={'/Contact'} className={`${pathname === "/Contact" && "bg-red-700"}`}>     
          
        <li className="font-bold">Contact</li> 
            
            
        </Link>


        <Link href={'/Developers'} className={`${pathname === "/Developers" && "bg-red-700"}`}>     
          
          <li className="font-bold"> Developers</li> 
              
              
          </Link>


        
        <button  onClick={handleLogIn} className={`${pathname === "/LogIn" && "bg-red-700"}`} > LogIn </button>

            </ul>

        
           



           </nav>

        </div>
 
 
       </div>
    );
};

export default NavBar;