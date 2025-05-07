import ProducrCard from "@/components/ProducrCard";

const ProductsPage = async() => {


     // Data fetching
    //  revalidate : data change hole / update hole , abar build kora chara , deploy chara 5 sec por por auto update hbe... 
    
     const res = await fetch("http://localhost:3004/bikes",{
        next : {
            revalidate : 5 
        }
     })

     const  products = await res.json()

     console.log(products);


    return (
        <div>
            <h1 className="text-4xl text-purple-500 font-bold text-center mt-20">   This ia a Lists of All Products .</h1>
          
          <div className="grid grid-cols-3 gap-10">
          
          {
            products.map( (product)=> <ProducrCard key={product.id} product={product}  /> )
          }


          </div>


        </div>
    );
};

export default ProductsPage;