import ProducrCard from "@/components/ProducrCard";


const CarsPage = async() => {


    const res = await fetch("http://localhost:3004/bikes", {
        next: { revalidate: 10 }
      })

    const carsData = await res.json()

    console.log(carsData);


    return (
        <div>
            {
                carsData.map( product=> <ProducrCard 
                
                    key={product.id} product={product}
                
                />)
            }
        </div>
    );
};

export default CarsPage;