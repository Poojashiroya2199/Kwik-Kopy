import React from "react";
import "./css/skin/skin1.css";
import "./css/theme-plugin.css";
import  "./css/responsive.css";
import "./css/style.css";
// import image1 from "./images/project/1.jpg";  
// import image2 from "./images/project/2.jpg";
// import image3 from "./images/project/3.jpg";
// import image4 from "./images/project/4.jpg";
// import image5 from "./images/project/5.jpg";
// import image6 from "./images/project/6.jpg";
// import blog1 from "./images/blog/blog1.jpg";
// import blog2 from "./images/blog/blog2.jpg";
// import blog3 from "./images/blog/blog3.jpg";


import Carousel from "./components/Carousel";
import Features from "./components/Features";
import Services from "./components/Services";
import Whychoose from "./components/Whychoose";
import Work from "./components/Work";
import Counter from "./components/Counter";
import Team from "./components/Team";
// import Carousel1 from "./components/carousel1";
export default function Home(){
    return (
        <div >
        <Carousel />
        <Features/>
        <Services />
        <Whychoose />
        <Work/>
        <Counter />
        <Team />
       
         </div>
    )
}