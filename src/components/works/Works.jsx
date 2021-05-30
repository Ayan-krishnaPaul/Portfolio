import React, { useState } from 'react'
import "./works.scss"

export default function Works() {

  const[currentSlide, setCurrentSlide] = useState(0);
    const data = [
        {
          id: "1",
          icon: "./assets/mobile.png",
          title: "Game Character",
          desc:
            "we propose an automatic character face creation method that predicts both facial shape and texture from a single portrait. ",
          img:
            "https://i.pinimg.com/originals/4c/82/33/4c82335c793626ef48df48a01b329adc.jpg",
        },
        {
          id: "2",
          icon: "./assets/globe.png",
          title: "Fake News",
          desc:
            "Here, we show you how you can detect fake news (classifying an article as REAL or FAKE) using the state-of-the-art models.",
          img:
            "https://images.theconversation.com/files/284418/original/file-20190717-173334-1b9vdud.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=900.0&fit=crop",
        },
        {
          id: "3",
          icon: "./assets/writing.png",
          title: "Dr. Bot",
          desc:
            "health chatbot tries to understand patients symptoms and then uses the data to provide diagnoses and prescribe medicine in real time.",
          img:
            "https://www.ringcentral.co.uk/gb/en/blog/wp-content/uploads/2021/01/businessman-touching-digital-chat-bot-on-tablet-for-provide-access-to-information-and-data-in-online-network-robot-application-and-global-connection-ai-artificial-intelligence-scaled.jpg.webp",
        },
      ];


      const handleClick = (way)=>{
        way === "left" 
        ? setCurrentSlide(currentSlide > 0 ? currentSlide-1 : 2) 
        : setCurrentSlide(currentSlide < data.length-1 ? currentSlide + 1 : 0);
      };
      
    return (
        <div className="works" id="works">
            <div className="slider" style={{transform:`translateX(-${currentSlide * 85}vw)`}}>
              {data.map(d=>(
                <div className="container">
                    <div className="item">
                        <div className="left">
                            <div className="leftContainer">
                                <div className="imgContainer">
                                <img src={d.icon} alt="" />
                                </div>
                                <h2>{d.title}</h2>
                                <p>
                                  {d.desc}
                                </p>
                                <span>Projects</span>
                            </div>
                        </div>
                        <div className="right">
                            <img src={d.img} alt="" />
                        </div>
                    </div>
                </div>
                ))}
            </div>
            <img src="assets/arrow.png" className="arrow left" alt="" onClick={()=>handleClick("left")}/>
            <img src="assets/arrow.png" className="arrow right" alt="" onClick={()=>handleClick()}/>
        </div>
    )
}
