import React from "react";
import { useRef ,useState } from "react";
import './slide.css';
import Pro from "./pro";

function SlideProduct({title}){



    return(
     <div className="slide_products slide">
        <div className="container">
            <div className="top_slide">
                <h2>{title}</h2>
                <p>Add bestselling products to weekly line up</p>
            </div>
            <Pro item={title} />
    
        </div>

     </div>
    )
}
export default SlideProduct;