import React, { useEffect, useState } from "react";
import { FaRegHeart, FaStar } from "react-icons/fa";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { useParams } from "react-router-dom";
import "./ProductDetails.css";
import { TiShoppingCart } from "react-icons/ti";
function ProductDetails() {
    const { id } = useParams();
    const [p, setP] = useState(null);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const res = await fetch(`https://dummyjson.com/products/${id}`);
                const data = await res.json();
                setP(data);
                setLoading(false);

            }
            catch (error) {
                console.log(error);
            }


        }
        fetchProduct(); //run function for fetch data
    }, [id])




    if (loading) return <p>loading.......</p>
    if (!p) return <p>Product not Found</p>
    return (
        <div className="item_details">
            <div className="container">
                <div className="imgs_item">
                    <div className="big_img">
                        <img id="big_img" src={p.images[0]} alt="image a product" />

                    </div>

                    <div className="sm_img">
                        {
                            p.images.map((img, index) => (
                                <div className="img_div_sm">
                                    <img key={index} src={img} alt="photo" onClick={() =>
                                        document.getElementById("big_img").src = img
                                    } />
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className="details_item">
                    <h1 className="name">{p.title}</h1>

                    <div className="stars">
                        <FaStar /> <FaStar /> <FaStar /> <FaStar />
                        <FaRegStarHalfStroke />
                    </div>

                    <p className="price">${p.price}</p>
                    <h5>Availability : <span>{p.availabilityStatus}</span></h5>
                    <h5>Brand : <span>{p.brand}</span></h5>
                    <p className="desc">{p.description}</p>
                    <h5 className="stock"><span>Hurry Up! Only</span> <span>{p.stock}</span> <span>products left in stock</span></h5>
                    <button className="btn">
                        Add To Cart <TiShoppingCart />
                    </button>
                    <div className="icons">
                        <span><FaRegHeart /></span>
                    </div>

                </div>
            </div>


        </div>
    )
}
export default ProductDetails;