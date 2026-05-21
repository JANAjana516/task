import React, { useEffect, useState } from "react";
import Slider from "../components/Slider";
import SlideProduct from "../components/Product/SlideProduct";

const categories=[
    "smartphones",
    "mobile-accessories",
    "laptops",
    "tablets",
    "sunglasses",
    "sports-accessories",
]
function Home(){
    // const [products ,setProducts]=useState({});
    // const [loading,setLoading]=useState(true);



    // useEffect(()=>{
    //     const fetchProducts = async ()=>{
    //     try{
    //       const results =await Promise.all(
    //         categories.map(async (category) => {
    //             const res = await fetch (`https://dummyjson.com/products/category/${category}`);
    //             const data=await res.json();
    //             return{[category] :data.products}
    //         })
    //       )

    //       const productsData =Object.assign({},...results);
    //       setProducts(productsData);
    //     }
    //     catch (e){
    //         console.error(e)
    //     }
    //     finally{
    //         setLoading(false);
    //     }
    // }
    // },[])
    return(
        <div>
           <Slider/>

          {/* {loading ? 
                   (<p className="load">Loading pleas wait just  2 second ...</p>) 
                   :
                   ( 
                        categories.map((category) =>(
                         <SlideProduct key={category} data={products[category]} title={category}/>
                        ))
                    )
           } */}

           {categories.map((category) =>(
                         <SlideProduct key={category}  title={category}/>
                        ))}

           

           
        </div>
       
    )
}
export default Home;