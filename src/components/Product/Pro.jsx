import React, { useContext, useEffect, useState } from "react";

import { Navigation } from "swiper/modules";
import {  Swiper ,SwiperSlide } from "swiper/react";

import 'swiper/css';
import 'swiper/css/navigation';

import { FaCheck, FaRegHeart, FaRegStarHalfStroke, FaShare, FaStar } from "react-icons/fa6";
import { FaCartArrowDown } from "react-icons/fa";
import { data, Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";


function Pro(title){


         const {cartItem , addToCart}=useContext(CartContext);
        const [dataa, setData] = useState([]);// لتخزين البيانات
        const [loading,setLoading]=useState(true);

       

 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://dummyjson.com/products/category/${title.item}`);
        const json = await response.json();
         setData(json.products); // تحديث الحالة بالبيانات الجديدة
        console.log(json);
      
      } catch (error) {
        console.error("خطأ في جلب البيانات:", error);
      }
      finally{
        setLoading(false);
      }
    };

    fetchData();
  }, []); // المصفوفة الفارغة تعني تشغيل التأثير مرة واحدة فقط



    return (
        <Swiper
            navigation={true}
            slidesPerView={4}
            spaceBetween={20}
            loop={dataa.length > 4}
            modules={[Navigation]}
            className="mySwiper"
        >
            {dataa && dataa.map((product) => {
                // فحص إذا كان هذا المنتج بالتحديد موجوداً في السلة
                const isInCart = cartItem.some(i =>String(i.id) === String(product.id));

                return (
                    <SwiperSlide key={product.id}>
                        {/* إضافة كلاس in_cart بناءً على النتيجة */}
                        <div className={`product ${isInCart ?'in_cart' : ''}`}>
                            <Link to={`/product/${product.id}`}>
                                <span className="status"><FaCheck /> in cart</span>
                                <div className="img_product">
                                    <img src={product.images && product.images[0]} alt="product" />
                                </div>
                                <p className="name_product">{product.title}</p>
                                <div className="stars">
                                    <FaStar /><FaStar /><FaStar /><FaStar /><FaRegStarHalfStroke />
                                </div>
                                <p className="price"> $ {product.price}</p>
                            </Link>

                            <div className="icons">
                                <span className='bicon' onClick={() => addToCart(product)}>
                                    <FaCartArrowDown />
                                </span>
                                <span><FaRegHeart /></span>
                                <span><FaShare /></span>
                            </div>
                        </div>
                    </SwiperSlide>
                );
            })}
        </Swiper>
    );
}

export default Pro;