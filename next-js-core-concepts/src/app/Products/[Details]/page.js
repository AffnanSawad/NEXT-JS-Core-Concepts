// app/product/[detailsId]/page.jsx

const Detailspage = async ({ params }) => {

  
    
    const detailsId = await params;

   
  
    console.log("Details ID:", detailsId); // Should show in terminal
  
    return (
      <div>
        <h1 className="text-4xl text-purple-500 font-bold text-center mt-20">
          Details of this Product : 
        </h1>
      </div>
    );
  };
  
  export default Detailspage;
  