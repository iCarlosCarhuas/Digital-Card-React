import React from "react";

export default function Info(){
    return(
    <div className="info-container">
        <nav>
            <img className="photo-profile" src= "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" width="320px"/>
            <h1>John Doe</h1>
            <h5>Frontend Developer</h5>
            <p>C-Art&Studios.vercel.app</p>   
        </nav>
        
        <button className="email-btn"><i className="fa-solid fa-envelope"></i> Email</button>
        <button className="linkedin-btn"><i className="fa-brands fa-linkedin"></i> LinkedIn</button>
    </div>
    )
} 
