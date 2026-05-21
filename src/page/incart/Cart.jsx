import React, { useContext } from "react";
import { CartContext } from "../../components/context/CartContext";
import { FaTrashAlt } from "react-icons/fa";
import './cart.css';

function Cart(){

    const {cartItem , incert,decreace ,remove } =useContext(CartContext);
    const total=cartItem.reduce((acc,item) => acc + item.price * item.quantity,0);

    return(
        <div className="check">
            <div className="order">
                <h1>Order Summary</h1>
                <div className="items">
                    {cartItem.length === 0 ?(<p>No item in cart</p>) : 
                    (
                        cartItem.map((item,index) =>(
                            <div className="item_cart" key={index}>
                                <div className="image_name">
                                    <div className="img_div">
                                         <img src={item.images[0]} alt="image" />
                                    </div>
                                   

                                    <div className="content">
                                        <h4>{item.title}</h4>
                                        <p className="price"> $ {item.price}</p>
                                        <div className="quantity_control">
                                            <button onClick={() => decreace(item.id)}>-</button>
                                            <span className="quantity">{item.quantity}</span>
                                            <button onClick={() => incert(item.id)}>+</button>
                                        </div>
                                    </div>
                                  
                                </div>
                                  <button onClick={() => remove(item.id)} className="delete_item"><FaTrashAlt/></button>

                            </div>
                        ))
                    )
                    }

                </div>

                <div className="bottom_summary">
                    <div className="shop_table">
                        <p>Total : </p>
                        <span className="total_checkout">${total}</span>

                    </div>
                    <div className="button_div">
                        <button type="submit">Place Order</button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Cart;