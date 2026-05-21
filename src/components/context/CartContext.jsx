import React, {  createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export default function CartProvider({children}){


    const [cartItem,setCartItem]=useState(() =>{
        const save =localStorage.getItem('cartItem');
        return save ? JSON.parse(save) : []
    });

   const incert =(id)=>{
    setCartItem(prevItems => prevItems.map((item =>
        item.id === id ? {...item , quantity: item.quantity - 1}
        : item
    
    )))
   }

   
   const decreace =(id)=>{
    setCartItem(prevItems => prevItems.map((item =>
        item.id === id && item.quantity > 1 
        ? {...item , quantity: item.quantity - 1}
        : item
    
    )))
   }

   
   
   const remove =(id)=>{
    setCartItem(prevItems => prevItems.filter(
        item => item.id !== id 
    )
    )
   }


const addToCart = (product) => {

    setCartItem((prevItems) => {
        // فحص: إذا كان المنتج موجوداً مسبقاً، لا تفعل شيئاً (يمنع الـ Loop)
        const isExist = prevItems.find(item => String(item.id) === String(product.id));
        if (isExist) {
            return prevItems; 
        }
        // إذا لم يكن موجوداً، أضفه للمصفوفة الجديدة
        return [...prevItems, {...product,quantity: 1}];
    });
}

    useEffect(() =>{
        localStorage.setItem('cartItem', JSON.stringify(cartItem))
    },[cartItem])

    return(
        <CartContext.Provider value={{cartItem,addToCart,incert,decreace,remove }}>
            {children}
        </CartContext.Provider>

    )
}