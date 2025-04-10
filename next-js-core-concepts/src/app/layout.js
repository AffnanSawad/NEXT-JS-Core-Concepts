import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "@/Components/NavBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "NEXT JS CORE CONCEPTS ",
  description: "Learning NEXT JS CORE CONCEPTS ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
          
     
      <NavBar></NavBar>

       <div>
        {children}
       </div>
       
       <footer>
        <h1 className="text-2xl font-bold text-red-500 text-center"> CopyRight Reserved by @ASR Ltd.</h1>
       </footer>




      </body>
    </html>
  );
}
