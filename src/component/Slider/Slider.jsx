import React, { useState } from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import './Slider.css';
function Slider(props) {


   
    const images=[
        "https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600",
        "https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600",
        "https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600",
     
    ];

    const [currentImgIndex,setCurrentImgIndex]=useState(0);

    const prevSlide=()=>{

        if(currentImgIndex===0){
            setCurrentImgIndex(2);
        }

        else{
           setCurrentImgIndex(currentImgIndex-1);
        }


        console.log(currentImgIndex);

    }

    const nextSlide=()=>{

        if(currentImgIndex===2){
            setCurrentImgIndex(0);
        }

        else{
           setCurrentImgIndex(currentImgIndex+1);
        }
        console.log(currentImgIndex);

    }
    
    

    return (
       <div className="slider">
        <div className="img-conatiner" >
        {images.map((img, index) => ( 
                <img key={index} src={img} alt={`Image ${index}`} style={{ transform: `translateX(-${currentImgIndex * 100}vw` }} /> 
            ))}
    
        </div>
        <div className="icons">
            <div className="icon" onClick={prevSlide}>
            <ArrowBackIcon/>

            </div>
            <div className="icon" onClick={nextSlide}>
            <ArrowForwardIcon/>

            </div>
        </div>
       </div>
    );
}

export default Slider;