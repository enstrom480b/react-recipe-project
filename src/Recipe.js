
import React,{useState,useEffect} from 'react';
const Recipe =({title,images,calories})=>{
return(

    <div>
        
    <h3>{title}</h3>
    <h3>{calories}</h3>
    <img src={images} alt=" "/>
    </div>
    )
}
export default Recipe