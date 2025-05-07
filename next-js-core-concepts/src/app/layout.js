import "./globals.css";
import NavBar from "@/components/shared/NavBar";

import { Roboto } from 'next/font/google'
 
const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})

export const metadata = {
  title: " NEXT JS CORE CONCEPTS ",
  description: "LEARNING NEXT JS CORE CONCEPTS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={roboto.className}>
      <body
       
      >  
      <NavBar/>
        {children}
      </body>
    </html>
  );
}
