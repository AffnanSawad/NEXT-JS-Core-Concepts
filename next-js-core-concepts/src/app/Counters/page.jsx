import Counter from '@/components/Counter';

// SEO & ROUTE NAME SHOWN ON BROWSER
export const metadata = {
   
    title: "Counting Page" ,

    description : "This is a counting page"
}

const page = () => {
    return (
        <div>
            <Counter/> 
        </div>
    );
};

export default page;