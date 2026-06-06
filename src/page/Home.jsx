import React, { useEffect, useState } from "react";
import Side from "./Side";
import Header from "./Header";
import Body from "./Body";

function Home(){
    return(
       <div style={{ display:'flex' , height:'100vh'}}>
         <Side />
         <div style={{ flex:1}}>
            <Header/>
            <Body/>
            </div>
        
        </div>
       
    )
}
export default Home;