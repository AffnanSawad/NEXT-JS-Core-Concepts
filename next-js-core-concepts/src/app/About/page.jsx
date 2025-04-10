import Link from "next/link";

const Aboutpage = () => {
    return (
        <div>
            <h1> This is a About Page . </h1>

            <div className="flex justify-center gap-5 bg-purple-300">
               
               <Link href={'/About/Mission'}> <li> Mission </li>  </Link>

               <Link href={'/About/Steps'}> <li> Steps </li>  </Link>

            </div>
        </div>
    );
};

export default Aboutpage;