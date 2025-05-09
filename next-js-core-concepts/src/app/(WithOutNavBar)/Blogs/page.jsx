import BlogsCard from '@/components/BlogsCard';
import cssFile from './Blog.module.css'


export const metadata =  {
   
   title : "Blogs",
   description : "Blog Page"

}

const BlogsPage = async({params}) => {
   
    // Data Fetching & Show Components :

    const res = await fetch("http://localhost:5000/blogs", {

        cache : "no-store"

    })
  
    const blogs = await res.json();

    console.log(blogs);



    return (
        <div>
            <h1 className='text-4xl font-bold text-blue-600'>This Is Blog !</h1>

            <h1 className={cssFile.color}> In build CSS</h1>
         

         {/* Mapping */}
         <div className="grid grid-cols-3 gap-12 md:grid-cols-1">

        {
         
         blogs.map(blog => <BlogsCard 
         
            key={blog.id}

            blog={blog}
         
         
         /> )
        }


         </div>



        </div>
    );
};

export default BlogsPage;