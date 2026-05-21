import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Logo from '../../img/logo.png';
import { FaRegHeart, FaSearch } from "react-icons/fa";
import { TiShoppingCart } from "react-icons/ti";
import './header.css';
import { CartContext } from "../context/CartContext";



function TopHeader() {

    const { cartItem } = useContext(CartContext);




    return (
        <div className="top_header">
            <div className="container">
                <Link className="logo" to="/" ><img src={Logo} alt="logo-img"></img></Link>

                <form action="" className="search_box">
                    <input type="text" name="search" id="search" placeholder="Search For Products..."></input>
                    <button type="submit"><FaSearch /></button>

                </form>

                <div className="header_icons">
                    <div className="icon">
                        <FaRegHeart />
                        <span className="count">0</span>
                    </div>

                    <div className="icon">
                        <Link to="/cart">

                            <TiShoppingCart />
                            <span className="count">{cartItem.length}</span>
                        </Link>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default TopHeader;