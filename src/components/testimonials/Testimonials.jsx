import React from 'react'
import "./testimonials.scss"

export default function Testimonials() {

    const data = [
        {
          id: 1,
          name: "Dhaka Board",
          title: "Board of Intermediate and Secondary Education, Dhaka",
          img:
            "https://upload.wikimedia.org/wikipedia/en/b/b0/Board_of_Intermediate_and_Secondary_Education_Dhaka_Logo.jpg",
          icon: "assets/Dhaka.png",
          desc:
            "This is to certify that Ayan Krishna Paul duly passed the Secondary School Certificate (SSC) Examination in Science group and secured G.P.A5.00 on a scale of 5.00.",
        },
        {
          id: 2,
          name: "AIU",
          title: "Association of Indian Universities",
          img:
            "https://pbs.twimg.com/profile_images/1143803869224267781/jaunkYpe_400x400.jpg",
          icon: "assets/AIU.png",
          desc:
            "Ayan Krishna Paul has passed Higher Secondary Certificate Examination with Physics, Chemistry, Biology, English etc. from the Board of Intermidiate and Seconday Education, Dhaka an accredited Board in Bangladesh.",
          featured: true,
        },
        {
          id: 3,
          name: "Dhaka Board",
          title: "Board of Intermediate and Secondary Education, Dhaka",
          img:
            "https://upload.wikimedia.org/wikipedia/en/b/b0/Board_of_Intermediate_and_Secondary_Education_Dhaka_Logo.jpg",
          icon: "assets/Dhaka.png",
          desc:
            "This is to certify that Ayan Krishna Paul duly passed the Higher Secondary Certificate (HSC) Examination in Science group and secured G.P.A5.00 on a scale of 5.00.",
        },
      ];

    return (
        <div className="testimonials" id="testimonials">
            <h1>Testimonials</h1>
            <div className="container">
                {data.map(d=>(
                <div className={d.featured ? "card featured" : "card"}>
                    <div className="top">
                        <img src="assets/right-arrow.png" className="left" alt="" />
                        <img 
                        className="user"
                        src={d.img} 
                        alt="" />
                        <img className="right" src={d.icon} alt="" />
                    </div>
                    <div className="center">
                        {d.desc}
                    </div>
                    <div className="bottom">
                        <h3>{d.name}</h3>
                        <h4>{d.title}</h4>
                    </div>
                </div>
                ))}
            </div>
        </div>
    )
}
