

const BlogsDetails = async ({params}) => {

    console.log(await params);

    const {BlogsID} = await params ;
    
    const res = await fetch(`http://localhost:5000/blogs/${BlogsID}`)

    const blog = await res.json();

    console.log(blog)


    return (
       <div className="max-w-2xl mx-auto mt-10 p-6 bg-white rounded-xl shadow-md border border-gray-200">
  <h1 className="text-3xl font-extrabold text-blue-700 mb-6 text-center">Dynamic Page</h1>

  <div className="space-y-4">
    <h2 className="text-2xl font-bold text-gray-800">{blog.name}</h2>
    <p className="text-lg text-gray-600">
      <span className="font-semibold">Author:</span> {blog.author_name}
    </p>
    <p className="text-md text-gray-500">
      <span className="font-semibold">Published:</span> {blog.date}
    </p>
    <p className="text-xl text-green-600 font-bold">
      <span className="font-semibold">Price:</span> ${blog.price}
    </p>
  </div>
</div>

    );
};

export default BlogsDetails;