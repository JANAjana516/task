import React, { useEffect, useState } from "react";
import { FaUserPlus } from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { PiSignInBold } from "react-icons/pi";
import { Link, useLocation } from "react-router-dom";


const NavLinks =[
    {title:'Home' , link:'/'},
    {title:'About' , link:'/about'},
    {title:'Accessories' , link:'/accessories'},
    {title:'Blog' , link:'/blog'},
    {title:'Contact' , link:'/contact'},
]
function BtmHeader(){

    const location=useLocation();
    const [categories,setCategories] =useState([]);
    const [isopeen ,setIsopen]=useState(false);
    

    useEffect(()=>{
        fetch('https://dummyjson.com/products/categories')
        .then((res) =>res.json())
        .then((data)=> setCategories(data))
    },[])
    
    




    return(
        <div className="btm_header">
            <div className="container">
                <nav className="nav">
                    <div className="category_nav">
                        <div className="category_btn" onClick={()=>setIsopen(!isopeen) }>
                            <IoMdMenu />
                            <p>Browse Category</p>
                            <MdOutlineKeyboardArrowDown />
                        </div>
                        <div className={`category_nav_list ${isopeen ? "active" : ""}`}>
                             {categories.map((category) => (
                                
                                <Link key={category.slug} to={category.slug}>{category.name}</Link>
                             
                             ))}
                        </div>
                    </div>

                    <div className="nav_links">
                        {NavLinks.map((item)=>(
                            <li key={item.title} className={location.pathname === item.link ? "active" : ""}> <Link to={item.link}>{item.title}</Link></li>

                        ))}
                       
                    </div>

                </nav>

                <div className="Bicon">
                    <Link to="/" ><PiSignInBold /></Link>
                    <Link to="/"><FaUserPlus/> </Link>

                </div>
            </div>

        </div>
    )
}
export default BtmHeader;