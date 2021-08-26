import React, { useState,useEffect, useRef } from 'react'
import "./FirstClass.css"
import pix1 from "./Image/0.png"
import pix2 from "./Image/1.png"
import pix3 from "./Image/2.png"
import pix4 from "./Image/3.png"
import pix5 from "./Image/4.png"
import pix6 from "./Image/5.png"



const FirstClass = () => {
    const MyRef = useRef()
    const [me , setMe] = useState(null)
    const [computer , setComputer] = useState(0)

    const getRand = (min , max ) => {
        const myData =  Math.floor(Math.random() *(max - min + 1))+ min
        setComputer(myData)
    }
    useEffect(() => {
        MyRef.current = computer
    }, [computer])

    useEffect(() => {
        setInterval (()=>{
            getRand(0,5)
        },3000)
       
    }, [])


    return (
        <div className="FirstContainer">
            <div className="TextContainer" >
                <div className="Codelabdiv">Codelab</div>
                <div>A simple game development for kids</div>
            </div>
            <div className="BoxContainer">
                <div className="box1Cointainer">
                    <img onClick={()=>{
                        setMe(0)
                    }} className="ImgContainer" src={pix1} alt="img.jpg"/>
                    <img  
                     onClick={()=>{
                        setMe(1)
                    }}
                    className="ImgContainer" src={pix2} alt="img.jpg"/>
                    <img 
                     onClick={()=>{
                        setMe(2)
                    }}
                    className="ImgContainer" src={pix3} alt="img.jpg"/>
                    <img 
                     onClick={()=>{
                        setMe(3)
                    }}
                    className="ImgContainer" src={pix4} alt="img.jpg"/>
                    <img  
                     onClick={()=>{
                        setMe(4)
                    }}
                    className="ImgContainer" src={pix5} alt="img.jpg"/>
                    <img 
                     onClick={()=>{
                        setMe(5)
                    }}
                    className="ImgContainer" src={pix6} alt="img.jpg"/>
                </div>
                <div className="box2Cointainer">
                    <div className="StopContainer">
                        {
                            MyRef.current === 0 ? <img className="ImgContainer" src={pix1} alt="img.jpg"/>: 
                            MyRef.current ===  1 ? <img className="ImgContainer" src={pix2} alt="img.jpg"/>:
                            MyRef.current ===  2 ? <img className="ImgContainer" src={pix3} alt="img.jpg"/>:
                            MyRef.current ===  3 ? <img className="ImgContainer" src={pix4} alt="img.jpg"/>:
                            MyRef.current === 4 ? <img className="ImgContainer" src={pix5} alt="img.jpg"/>:
                            MyRef.current ===  5 ? <img className="ImgContainer" src={pix6} alt="img.jpg"/>:null
                        }
                    </div>
                </div>
            </div>
            <div>
       
            </div>
            <div className="CompContainer">
                <h3>Me</h3>
                <h3>Computer</h3>

            </div>
            <div>
                <h3>Result:</h3>
                {/* <div>output:{computer}</div> */}
            </div>
            <div>
                {me === computer? <div>Wow...you're Right</div>: 
                 me !== computer? <div> hmmm...you're wrong</div> :
                 me === null ? <div> Null </div> : null
                }
            </div>

        </div>
    )
}

export default FirstClass
