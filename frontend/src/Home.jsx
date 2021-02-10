import React from "react";
import "./css/skin/skin1.css";
import "./css/theme-plugin.css";
import  "./css/responsive.css";
import "./css/style.css";
import logo from "./images/logo.png";
import image1 from "./images/project/1.jpg";  
import image2 from "./images/project/2.jpg";
import image3 from "./images/project/3.jpg";
import image4 from "./images/project/4.jpg";
import image5 from "./images/project/5.jpg";
import image6 from "./images/project/6.jpg";
import team1 from "./images/team/team1.jpg";
import team2 from "./images/team/team2.jpg";
import team3 from "./images/team/team3.jpg";
import team4 from "./images/team/team4.jpg";
// import blog1 from "./images/blog/blog1.jpg";
// import blog2 from "./images/blog/blog2.jpg";
// import blog3 from "./images/blog/blog3.jpg";
import gallery1 from "./images/gallery-1.jpg";
import gallery2 from "./images/gallery-2.jpg";
import gallery3 from "./images/gallery-3.jpg";
import gallery4 from "./images/gallery-4.jpg";
import gallery5 from "./images/gallery-5.jpg";
import gallery6 from "./images/gallery-6.jpg";
import gallery7 from "./images/gallery-7.jpg";
import gallery8 from "./images/gallery-8.jpg";
import gallery9 from "./images/gallery-9.jpg";


export default function Home(){
    return (
        <div id="bg">
        <div id="layout" className="">
        {/* <!-- Start Header --> */}
        <header id="header" className="header">
            <div className="container">
                <div className="row">
                    <div className="col-md-3 col-sm-3 col-xs-12">
                        {/* <!-- Logo --> */}
                        <div className="logo">
                            <a href="index.html"><img src={logo} alt="logo"/></a>
                        </div>
                        {/* <!--/ End Logo --> */}
                        {/* <div className="mobile-nav"></div> */}
                    </div>
                    <div className="col-md-9 col-sm-9 col-xs-12">
                        {/* <!-- Header Widget --> */}
                        <div className="header-widget">
                            {/* <!-- Single Widget --> */}
                            <div className="single-widget">
                                <i className="fa fa-clock-o"></i>
                                <h4>Opening Time</h4>
                                <p>Mon-Sat: 9.00-18.00</p>
                            </div>
                            {/* <!--/ End Single Widget --> */}
                            {/* <!-- Single Widget --> */}
                            <div className="single-widget">
                                <i className="fa fa-envelope"></i>
                                <h4>Email address</h4>
                                <p><a href="mailto:info@yourwebsite">info@yourwebsite.com</a></p>
                            </div>
                            {/* <!--/ End Single Widget --> */}
                            {/* <!-- Single Widget --> */}
                            <div className="single-widget">
                                <i className="fa fa-phone"></i>
                                <h4>Phone</h4>
                                <p>+880123-467-789</p>
                            </div>
                            {/* <!--/ End Single Widget --> */}
                        </div>
                        {/* <!--/ End Header Widget --> */}
                    </div>
                </div>
            </div>
            {/* <!-- Header Inner --> */}
            <div className="header-inner">
                <div className="container">
                    <div className="row">
                        {/* <div className="col-md-12 col-sm-12 col-xs-12"> */}
                            <div className="nav-area">
                                {/* <!-- Main Menu --> */}
                                <nav className="mainmenu">
                                    <div className="collapse navbar-collapse">	
                                        <ul className="nav navbar-nav">
                                            <li className="active"><a href="app">Home</a></li>
                                            <li><a href="about-us.html">About Us</a></li>
                                            <li><a href="app">services<i className="fa fa-angle-down"></i></a>
                                                <ul className="drop-down">
                                                    <li><a href="services.html">Our services</a></li>
                                                    <li><a href="service-single.html">service Single</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="app">Projects<i className="fa fa-angle-down"></i></a>
                                                <ul className="drop-down">
                                                    <li><a href="projects.html">Projects</a></li>
                                                    <li><a href="project-single.html">Project Single</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="app">Blogs<i className="fa fa-angle-down"></i></a>
                                                <ul className="drop-down">
                                                    <li><a href="blog-grid.html">Blogs Grid</a></li>
                                                    <li><a href="blog-single.html">Blog Single</a></li>
                                                </ul>
                                            </li>					
                                            <li><a href="contact.html">Contact</a></li>												
                                        </ul>
                                    </div>
                                </nav>
                                {/* <!--/ End Main Menu --> */}
                                {/* <!-- Social --> */}
                                <ul className="social">
                                    <li><a href="app"><i className="fa fa-linkedin"></i></a></li>
                                    <li><a href="app"><i className="fa fa-facebook"></i></a></li>
                                    <li className="active"><a href="app"><i className="fa fa-twitter"></i></a></li>
                                    <li><a href="app"><i className="fa fa-youtube"></i></a></li>
                                    <li><a href="app"><i className="fa fa-behance"></i></a></li>
                                </ul>
                                {/* <!--/ End Social --> */}
                            </div>
                        {/* </div> */}
                    </div>
                </div>
            </div>
            {/* <!--/ End Header Inner --> */}
        </header>
        {/* <!--/ End Header --> */}
    
        {/* <!-- Start Hero Area --> */}
        <section className="hero-area">
            <div className="slider-one">
                {/* <!-- Single Slider -->  */}
                <div className="single-slider"
                 style={{ backgroundImage:"url(./images/slider/slider-bg1.jpg)"}}
                 >
                    <div className="container">
                        <div className="row">
                            <div className="col-md-7 col-sm-12 col-xs-12">
                                {/* <!-- Slider Text --> */}
                                <div className="slide-text">
                                    <h1><span className="short">You are entire</span>Creative Business</h1>
                                    <p>welcome to tromas, Contrary to popular belief. Lorem Ipsum is not simply random text. It has roots in a piece of classNameical Latin literature from 45 BC, making it over 2000 years old .</p>
                                    <div className="slide-btn">	
                                        <a href="https://www.youtube.com/watch?v=FZQPhrdKjow" className="btn primary video-play video-popup mfp-fade">Play Video<i className="fa fa-play"></i>
                                            <div className="waves-block">
                                                <div className="waves wave-1"></div>
                                                <div className="waves wave-2"></div>
                                                <div className="waves wave-3"></div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                {/* <!--/ End SLider Text --> */}
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!--/ End Single Slider --> */}
                {/* <!-- Single Slider -->  */}
                <div className="single-slider"
                 style={{backgroundImage:"url(./images/slider/slider-bg2.jpg)"}}
                 >
                    <div className="container">
                        <div className="row">
                            <div className="col-md-7 col-md-offset-5 col-sm-12 col-xs-12">
                                {/* <!-- Slider Text --> */}
                                <div className="slide-text right">
                                    <h1><span className="short">You are entire</span>Perfect Business</h1>
                                    <p>welcome to tromas, Contrary to popular belief. Lorem Ipsum is not simply random text. It has roots in a piece of classNameical Latin literature from 45 BC, making it over 2000 years old .</p>
                                    <div className="slide-btn">	
                                        <a href="contact.html" className="btn primary">Contact Us</a>
                                    </div>
                                </div>
                                {/* <!--/ End SLider Text --> */}
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!--/ End Single Slider --> */}
                {/* <!-- Single Slider -->  */}
                <div className="single-slider" 
                style={{backgroundImage:"url(./images/slider/slider-bg3.jpg)"}}
                >
                    <div className="container">
                        <div className="row">
                            <div className="col-md-7 col-sm-12 col-xs-12">
                                {/* <!-- Slider Text --> */}
                                <div className="slide-text">
                                    <h1><span className="short">You are entire</span>Tromas Business</h1>
                                    <p>welcome to tromas, Contrary to popular belief. Lorem Ipsum is not simply random text. It has roots in a piece of classNameical Latin literature from 45 BC, making it over 2000 years old .</p>
                                    <div className="slide-btn">	
                                        <a href="#projects" className="btn primary">Our Projects<i className="fa fa-long-arrow-down"></i></a>
                                    </div>
                                </div>
                                {/* <!--/ End SLider Text --> */}
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!--/ End Single Slider --> */}
            </div>
        </section>
        {/* <!--/ End Hero Area --> */}
        
        {/* <!-- Start Features --> */}
        <section className="features">
            <div className="container">
                <div className="row">
                    {/* <!-- Features Single --> */}
                    <div className="col-md-4 col-sm-4 col-xs-12 features-single">
                        <i className="fa fa-meetup"></i>
                        <h2>01/ Strategy</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer adipiscing erat</p>
                    </div>
                    {/* <!--/ End Features Single --> */}
                    {/* <!-- Features Single --> */}
                    <div className="col-md-4 col-sm-4 col-xs-12 features-single active ">
                        <i className="fa fa-code"></i>
                        <h2>02/ Planning</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer adipiscing erat</p>
                    </div>
                    {/* <!--/ End Features Single --> */}
                    {/* <!-- Features Single --> */}
                    <div className="col-md-4 col-sm-4 col-xs-12 features-single">
                        <i className="fa fa-sellsy"></i>
                        <h2>03/ build</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer adipiscing erat</p>
                    </div>
                    {/* <!--/ End Features Single --> */}
                </div>
            </div>
        </section>
        {/* <!--/ End Features --> */}
        
        {/* <!-- Start Services --> */}
        <section id="services" className="services section">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-sm-12 col-xs-12">
                        <div className="section-title">
                            <h1>Our services</h1>
                            <p>Contry to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {/* <!-- Single Service --> */}
                    <div className="col-md-4 col-sm-6 col-xs-12">
                        <div className="single-services">
                            <div className="icon"><i className="fa fa-edit"></i></div>
                            <div className="icon two"><i className="fa fa-edit"></i></div>
                            <h2><a href="service-single.html">Business Consulting</a></h2>
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy. Lorem ipsum dolor sit amet</p>
                        </div>
                    </div>
                    {/* <!--/ End Single Service --> */}
                    {/* <!-- Single Service --> */}
                    <div className="col-md-4 col-sm-6 col-xs-12">
                        <div className="single-services">
                            <div className="icon"><i className="fa fa-lightbulb-o"></i></div>
                            <div className="icon two"><i className="fa fa-lightbulb-o"></i></div>
                            <h2><a href="service-single.html">Creative Idea</a></h2>
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy. Lorem ipsum dolor sit amet</p>
                        </div>
                    </div>
                    {/* <!--/ End Single Service --> */}
                    {/* <!-- Single Service --> */}
                    <div className="col-md-4 col-sm-6 col-xs-12">
                        <div className="single-services">
                            <div className="icon"><i className="fa fa-money"></i></div>
                            <div className="icon two"><i className="fa fa-money"></i></div>
                            <h2><a href="service-single.html">Investment Plan</a></h2>
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy. Lorem ipsum dolor sit amet</p>
                        </div>
                    </div>
                    {/* <!--/ End Single Service --> */}
                    {/* <!-- Single Serv/ice --> */}
                    <div className="col-md-4 col-sm-6 col-xs-12">
                        <div className="single-services">
                            <div className="icon"><i className="fa fa-clock-o"></i></div>
                            <div className="icon two"><i className="fa fa-clock-o"></i></div>
                            <h2><a href="service-single.html">Time sensetive</a></h2>
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy. Lorem ipsum dolor sit amet</p>
                        </div>
                    </div>
                    {/* <!--/ End Single Service --> */}
                    {/* <!-- Single Service --> */}
                    <div className="col-md-4 col-sm-6 col-xs-12">
                        <div className="single-services">
                            <div className="icon"><i className="fa fa-globe"></i></div>
                            <div className="icon two"><i className="fa fa-globe"></i></div>
                            <h2><a href="service-single.html">World Marketing</a></h2>
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy. Lorem ipsum dolor sit amet</p>
                        </div>
                    </div>
                    {/* <!--/ End Single Service --> */}
                    {/* <!-- Single Service --> */}
                    <div className="col-md-4 col-sm-6 col-xs-12">
                        <div className="single-services">
                            <div className="icon"><i className="fa fa-magic"></i></div>
                            <div className="icon two"><i className="fa fa-magic"></i></div>
                            <h2><a href="service-single.html">Trusted Support</a></h2>
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy. Lorem ipsum dolor sit amet</p>
                        </div>
                    </div>
                    {/* <!--/ End Single Service --> */}
                </div>
            </div>
        </section>
        {/* <!--/ End Services --> */}
        
        {/* <!-- Why Choose Us --> */}
        <section id="why-choose" className="why-choose section">
            <div className="container-fluid fix">
                <div className="row fix">
                    <div className="col-md-4 col-sm-12 col-xs-12 fix">
                        <div className="working-process">
                            <h2>Our Working process</h2>
                            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters</p>
                            <a href="about-us.html" className="btn"> Read More</a>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-12 col-xs-12 fix">
                        <div className="choose-main">
                            {/* <!-- Single Choose --> */}
                            <div className="single-choose">
                                <i className="fa fa-check"></i>
                                <div>
                                <h4>Deep Customization Process</h4>
                                <p>notare quam littera gothica, quam nunc putamus parum claram</p>
                                </div>
                            </div>
                            {/* <!-- End Single Choose -->	 */}
                            {/* <!-- Single Choose --> */}
                            <div className="single-choose">
                                <i className="fa fa-support"></i>
                                <div>
                                <h4>Day/Night Live Support</h4>
                                <p>notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas</p>
                                </div>
                            </div>
                            {/* <!-- End Single Choose --> */}
                            {/* <!-- Single Choose --> */}
                            <div className="single-choose">
                                <i className="fa fa-optin-monster" style={{fontSize:"24px"}}></i>
                                <div>
                                <h4>Powerfull Theme Options</h4>
                                <p>notare quam littera gothica, quam nunc putamus parum claram</p>
                                </div>
                            </div>
                            {/* <!-- End Single Choose -->	 */}
                        </div>
                    </div>			
                    <div className="col-md-4 col-sm-12 col-xs-12 fix">
                        <div className="why-video">
                            {/* <!-- Video Animation --> */}
                            <div className="promo-video">
                                <div className="waves-block">
                                    <div className="waves wave-1"></div>
                                    <div className="waves wave-2"></div>
                                    <div className="waves wave-3"></div>
                                </div>
                            </div>
                            {/* <!--/ End Video/ Animation --> */}
                            {/* <!-- Promo Video --> */}
                            <div className="video"><a href="https://www.youtube.com/watch?v=E-2ocmhF6TA" className="btn video-play video-popup mfp-fade"><i className="fa fa-play"></i></a></div>
                            {/* <!--/ End Promo Video --> */}
                        </div>
                    </div>					
                </div>
            </div>
        </section>	
        {/* <!--/ End Why Choose Us --> */}
        
        {/* <!-- Start Projects --> */}
        <section id="projects" className="projects section">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-sm-12 col-xs-12">
                        <div className="section-title">
                            <h1>Our Works</h1>
                            <p>It has roots in a piece Distinctio tenetur, dolores aperiam, quasi perferendis nemo mollitia</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 col-sm-12 col-xs-12">
                        {/* <!-- project Nav --> */}
                        <div className="project-nav">
                            <ul className="cbp-l-filters-work" id="project-menu">
                                <li data-filter="*" className="cbp-filter-item active">All<div className="cbp-filter-counter"></div></li>  
                                <li data-filter=".webdesign" className="cbp-filter-item">Design<div className="cbp-filter-counter"></div></li>
                                <li data-filter=".development" className="cbp-filter-item">Development<div className="cbp-filter-counter"></div></li>
                                <li data-filter=".branding" className="cbp-filter-item">Branding<div className="cbp-filter-counter"></div></li>
                                <li data-filter=".package" className="cbp-filter-item">Package<div className="cbp-filter-counter"></div></li>
                                <li data-filter=".video" className="cbp-filter-item">Video<div className="cbp-filter-counter"></div></li>
                            </ul>  		
                        </div>
                        {/* <!--/ End project Nav --> */}
                    </div>
                </div>					
                <div className="row">
                    <div className="col-md-12 col-sm-12 col-xs-12">
                        <div id="project-item" className="cbp">
                            <div className="cbp-item"  
                            // webdesign development video branding package"
                            >
                                {/* <!-- Single Project --> */}
                                <div className="project-single">
                                    <div className="project-inner">
                                        <div className="project-head">
                                            <img src={image1} alt="app"/>
                                        </div>
                                        {/* <div className="project-bottom">
                                            <h4><a href="project-single.html">Powerfull Theme</a><span className="category">Development</span></h4>
                                        </div>
                                        <div className="button">
                                            <a href="https://www.youtube.com/watch?v=E-2ocmhF6TA" className="btn video-play cbp-lightbox"><i className="fa fa-play"></i></a>
                                            <a href="project-single.html" className="btn"><i className="fa fa-link"></i></a>
                                        </div> */}
                                    </div>
                                </div> 
                                {/* <!--/ End Single Project --> */}
                            </div>
                            <div className="cbp-ite" 
                            //  webdesign branding package"
                             >
                                {/* <!-- Single Project --> */}
                                <div className="project-single">
                                    <div className="project-inner">
                                        <div className="project-head">
                                            <img src={image2} alt="app" />
                                        </div>
                                        {/* <div className="project-bottom">
                                            <h4><a href="project-single.html">Crazy Design</a><span className="category">Branding</span></h4>
                                        </div>
                                        <div className="button">
                                            <a data-fancybox="portfolio" href="images/project/2.jpg" className="btn"><i className="fa fa-photo"></i></a>
                                            <a href="project-single.html" className="btn"><i className="fa fa-link"></i></a>
                                        </div> */}
                                    </div>
                                </div>
                                {/* <!--/ End Single Project --> */}
                            </div>
                            <div className="cbp-item"
                            //   webdesign development video"
                              >
                                {/* <!-- Single Project --> */}
                                <div className="project-single">
                                    <div className="project-inner">
                                        <div className="project-head">
                                            <img src={image3} alt="app" />
                                        </div>
                                        {/* <div className="project-bottom">
                                            <h4><a href="project-single.html">Bootstrap Framework</a><span className="category">Development</span></h4>
                                        </div>
                                        <div className="button">
                                            <a href="https://www.youtube.com/watch?v=E-2ocmhF6TA" className="btn video-play cbp-lightbox"><i className="fa fa-play"></i></a>
                                            <a href="project-single.html" className="btn"><i className="fa fa-link"></i></a>
                                        </div> */}
                                    </div>
                                </div>
                                {/* <!--/ End Single Project --> */}
                            </div>
                            <div className="cbp-item"
                            //  branding development"
                             >
                                {/* <!-- Single Project --> */}
                                <div className="project-single">
                                    <div className="project-inner">
                                        <div className="project-head">
                                            <img src={image4} alt="app" />
                                        </div>
                                        {/* <div className="project-bottom">
                                            <h4><a href="project-single.html">Fully Responsive</a><span className="category">Branding</span></h4>
                                        </div>
                                        <div className="button">
                                            <a data-fancybox="portfolio" href="images/project/4.jpg" className="btn"><i className="fa fa-photo"></i></a>
                                            <a href="project-single.html" className="btn"><i className="fa fa-link"></i></a>
                                        </div> */}
                                    </div>
                                </div>
                                {/* <!--/ End Single Project --> */}
                            </div>
                            <div className="cbp-item"
                            //   webdesign development video"
                              >
                                {/* <!-- Single Project --> */}
                                <div className="project-single">
                                    <div className="project-inner">
                                        <div className="project-head">
                                            <img src={image5} alt="app"/>
                                        </div>
                                        {/* <div className="project-bottom">
                                            <h4><a href="project-single.html">Easy To Use</a><span className="category">Development</span></h4>
                                        </div>
                                        <div className="button">
                                            <a href="https://www.youtube.com/watch?v=E-2ocmhF6TA" className="btn video-play cbp-lightbox"><i className="fa fa-play"></i></a>
                                            <a href="project-single.html" className="btn"><i className="fa fa-link"></i></a>
                                        </div> */}
                                    </div>
                                </div>
                                {/* <!--/ End Single Project --> */}
                            </div>
                            <div className="cbp-item"  
                            // webdesign development branding"
                            >
                                {/* <!-- Single Project --> */}
                                <div className="project-single">
                                    <div className="project-inner">
                                        <div className="project-head">
                                            <img src={image6} alt="app"/>
                                        </div>
                                        {/* <div className="project-bottom">
                                            <h4><a href="project-single.html">Modern Design</a><span className="category">Printing</span></h4>
                                        </div>
                                        <div className="button">
                                            <a data-fancybox="portfolio" href="images/project/6.jpg" className="btn"><i className="fa fa-photo"></i></a>
                                            <a href="project-single.html" className="btn"><i className="fa fa-link"></i></a>
                                        </div> */}
                                    </div>
                                </div>
                                {/* <!--/ End Single Project --> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <!--/ End Projects --> */}
    
        {/* <!-- Start Team --> */}
        <section id="team" className="team section">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-sm-12 col-xs-12">
                        <div className="section-title">
                            <h1>Meet The Team</h1>
                            <p>Contry to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece Distinctio tenetur, dolores aperiam, quasi perferendis nemo mollitia</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {/* <div className="col-md-3 col-sm-6 col-xs-12"> */}
                        {/* <!-- Single Team --> */}
                        <div className="single-team one default">
                            {/* <!-- Team Head --> */}
                            <div className="t-head">
                                <img src={team1} alt="app" width="100%" height="100%"/>
                                <div className="t-hover">
                                    <ul className="t-social">
                                        <li><a href="app"><i className="fa fa-facebook"></i></a></li>
                                        <li><a href="app"><i className="fa fa-twitter"></i></a></li>
                                        <li><a href="app"><i className="fa fa-behance"></i></a></li>
                                        <li><a href="app"><i className="fa fa-dribbble"></i></a></li>				
                                    </ul>
                                </div>
                            </div>
                            {/* <!-- Team Bottom --> */}
                            <div className="t-bottom">
                                <div className="t-icon">
                                    <a href="#team1"><i className="fa fa-plus"></i></a>
                                </div>
                                <h2 className="t-name">Angel Rimu</h2>
                                <p className="what">Creative</p>
                            </div>
                        </div>
                        {/* <!-- End Single Team --> */}
                    {/* </div>		 */}
                    {/* <div className="col-md-3 col-sm-6 col-xs-12"> */}
                        {/* <!-- Single Team --> */}
                        <div className="single-team two default">
                            {/* <!-- Team Head --> */}
                            <div className="t-head">
                                <img src={team2} alt="app" width="100%" height="100%"/>
                                <div className="t-hover">
                                    <ul className="t-social">
                                        <li><a href="app"><i className="fa fa-facebook"></i></a></li>
                                        <li><a href="app"><i className="fa fa-twitter"></i></a></li>
                                        <li><a href="app"><i className="fa fa-behance"></i></a></li>
                                        <li><a href="app"><i className="fa fa-dribbble"></i></a></li>				
                                    </ul>
                                </div>
                            </div>
                            {/* <!-- Team Bottom --> */}
                            <div className="t-bottom">
                                <div className="t-icon">
                                    <a href="#team2"><i className="fa fa-plus"></i></a>
                                </div>
                                <h2 className="t-name">Shakil Hossain</h2>
                                <p className="what">Developer</p>
                            </div>
                        </div>
                        {/* <!-- End Single Team --> */}
                    {/* </div>	 */}
                    {/* <div className="col-md-3 col-sm-6 col-xs-12"> */}
                        {/* <!-- Single Team --> */}
                        <div className="single-team three default">
                            {/* <!-- Team Head --> */}
                            <div className="t-head">
                                <img src={team3} alt="app" width="100%" height="100%"/>
                                <div className="t-hover">
                                    <ul className="t-social">
                                        <li><a href="app"><i className="fa fa-facebook"></i></a></li>
                                        <li><a href="app"><i className="fa fa-twitter"></i></a></li>
                                        <li><a href="app"><i className="fa fa-behance"></i></a></li>
                                        <li><a href="app"><i className="fa fa-dribbble"></i></a></li>				
                                    </ul>
                                </div>
                            </div>
                            {/* <!-- Team Bottom --> */}
                            <div className="t-bottom">
                                <div className="t-icon">
                                    <a href="#team3"><i className="fa fa-plus"></i></a>
                                </div>
                                <h2 className="t-name">Sufia Mizan</h2>
                                <p className="what">Branding</p>
                            </div>
                        </div>
                        {/* <!-- End Single Team --> */}
                    {/* </div>		 */}
                    {/* <div className="col-md-3 col-sm-6 col-xs-12"> */}
                        {/* <!-- Single Team --> */}
                        <div className="single-team four default">
                            {/* <!-- Team Head --> */}
                            <div className="t-head">
                                <img src={team4} alt="app" width="100%" height="100%"/>
                                <div className="t-hover">
                                    <ul className="t-social">
                                        <li><a href="app"><i className="fa fa-facebook"></i></a></li>
                                        <li><a href="app"><i className="fa fa-twitter"></i></a></li>
                                        <li><a href="app"><i className="fa fa-behance"></i></a></li>
                                        <li><a href="app"><i className="fa fa-dribbble"></i></a></li>				
                                    </ul>
                                </div>
                            </div>
                            {/* <!-- Team Bottom --> */}
                            <div className="t-bottom">
                                <div className="t-icon">
                                    <a href="#team4"><i className="fa fa-plus"></i></a>
                                </div>
                                <h2 className="t-name">SM Jehad</h2>
                                <p className="what">CEO/Officer</p>
                            </div>
                        </div>
                        {/* <!-- End Single Team --> */}
                    {/* </div>	 */}
                </div>
                </div>
        </section>
        {/* <!--/ End Team --> */}

        {/* <!-- Start Blogs --> */}
        {/* <section id="blog-main" className="blog-main section">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-sm-12 col-xs-12">
                        <div className="section-title">
                            <h1>Latest Blog</h1>
                            <p> Fusce semper purus suscipit ultricies tincidunt. Nulla eget turpis ac leo euismod pharetra at nec diam. Etiam id purus lacus. Suspendisse ligula nulla, cursus non</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="blog-main">
                        {/* <div className="col-md-12 col-sm-12 col-xs-12"> */}
                            {/* <div className="blog-slider"> */}
                                {/* <!-- Single Slider --> */}
                                {/* <div className="single-blog single-slider">
                                    <div className="blog-post">
                                        <div className="blog-head">
                                            <img src={blog1} alt="app"/>
                                            <a className="link" href="blog-single.html"><i className="fa fa-paper-plane"></i></a>
                                        </div>
                                        <div className="blog-info">
                                            <h2><a href="blog-single.html">10 Tips for Growing Your Business</a></h2>
                                            <div className="meta">
                                                <span><i className="fa fa-list"></i><a href="app">Marketing</a></span>
                                                <span><i className="fa fa-calendar-o"></i>28 Sep, 2017</span>
                                                <span><i className="fa fa-heart-o"></i><a href="app">35</a></span>
                                            </div>
                                            <p>Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula</p>
                                        </div>
                                    </div>				
                                </div> */}
                                {/* <!--/ End Single Slider -->	 */}
                                {/* <!-- Single Slider --> */}
                                {/* <div className="single-blog single-slider">
                                    <div className="blog-post">
                                        <div className="blog-head">
                                            <img src={blog2} alt="app"/>
                                            <a className="link" href="blog-single.html"><i className="fa fa-paper-plane"></i></a>
                                        </div>
                                        <div className="blog-info">
                                            <h2><a href="blog-single.html">Amazing Multipage & Onepage</a></h2>
                                            <div className="meta">
                                                <span><i className="fa fa-list"></i><a href="app">Web</a></span>
                                                <span><i className="fa fa-calendar-o"></i>15 Aug, 2017</span>
                                                <span><i className="fa fa-heart-o"></i><a href="app">35</a></span>
                                            </div>
                                            <p>Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula</p>
                                        </div>
                                    </div>				
                                </div> */}
                                {/* <!--/ End Single Slider -->	 */}
                                {/* <!-- Single Slider --> */}
                                {/* <div className="single-blog single-slider">
                                    <div className="blog-post">
                                        <div className="blog-head">
                                            <img src={blog3} alt="app"/>
                                            <a className="link" href="blog-single.html"><i className="fa fa-paper-plane"></i></a>
                                        </div>
                                        <div className="blog-info">
                                            <h2><a href="blog-single.html">How to start online business</a></h2>
                                            <div className="meta">
                                                <span><i className="fa fa-list"></i><a href="app">Finance</a></span>
                                                <span><i className="fa fa-calendar-o"></i>02 July, 2017</span>
                                                <span><i className="fa fa-heart-o"></i><a href="app">99</a></span>
                                            </div>
                                            <p>Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula</p>
                                        </div>
                                    </div>				
                                </div> */}
                                {/* <!--/ End Single Slider -->	 */}
                                {/* <!-- Single Slider --> */}
                                {/* <div className="single-blog single-slider">
                                    <div className="blog-post">
                                        <div className="blog-head">
                                            <img src={blog1} alt="app"/>
                                            <a className="link" href="blog-single.html"><i className="fa fa-paper-plane"></i></a>
                                        </div>
                                        <div className="blog-info">
                                            <h2><a href="blog-single.html">Discover new banking tricks</a></h2>
                                            <div className="meta">
                                                <span><i className="fa fa-list"></i><a href="app">Marketing</a></span>
                                                <span><i className="fa fa-calendar-o"></i>02 Apr, 2017</span>
                                                <span><i className="fa fa-heart-o"></i><a href="app">35</a></span>
                                            </div>
                                            <p>Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula</p>
                                        </div>
                                    </div>				
                                </div> */}
                                {/* <!--/ End Single Slider -->	 */}
                                {/* <!-- Single Slider --> */}
                                {/* <div className="single-blog single-slider">
                                    <div className="blog-post">
                                        <div className="blog-head">
                                            <img src={blog2} alt="app"/>
                                            <a className="link" href="blog-single.html"><i className="fa fa-paper-plane"></i></a>
                                        </div>
                                        <div className="blog-info">
                                            <h2><a href="blog-single.html">What makes us best in the world?</a></h2>
                                            <div className="meta">
                                                <span><i className="fa fa-list"></i><a href="app">Resource</a></span>
                                                <span><i className="fa fa-calendar-o"></i>25 March, 2017</span>
                                                <span><i className="fa fa-heart-o"></i><a href="app">35</a></span>
                                            </div>
                                            <p>Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula</p>
                                        </div>
                                    </div>				
                                </div> */}
                                {/* <!--/ End Single Slider -->	 */}
                                {/* <!-- Single Slider --> */}
                                {/* <div className="single-blog single-slider">
                                    <div className="blog-post">
                                        <div className="blog-head">
                                            <img src={blog3} alt="app"/>
                                            <a className="link" href="blog-single.html"><i className="fa fa-paper-plane"></i></a>
                                        </div>
                                        <div className="blog-info">
                                            <h2><a href="blog-single.html">Tips for success in 2017</a></h2>
                                            <div className="meta">
                                                <span><i className="fa fa-list"></i><a href="app">Web</a></span>
                                                <span><i className="fa fa-calendar-o"></i>02 Feb, 2017</span>
                                                <span><i className="fa fa-heart-o"></i><a href="app">99</a></span>
                                            </div>
                                            <p>Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula</p>
                                        </div>
                                    </div>				
                                </div> */}
                                {/* <!--/ End Single Slider --*/}
                            {/* </div>
                        </div>
                    </div>						 */}
                {/* </div> */}
            {/* </div>
        </section>  */}
        {/* <!--/ End Blog -->	 */}
        
        {/* <!-- Start Call-To-Action --> */}
        <section className="call-to-action">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-sm-12 col-xs-12">
                        <div className="call-to-main">
                            <h2>we'll one over <span>30 Years of experience you always</span> the best guidance</h2>
                            <a href="contact.html" className="btn"><i className="fa fa-send"></i>Contact Us</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <!--/ End Call-To-Action --> */}
        
        {/* <!-- Start Footer --> */}
        <footer id="footer" className="footer">
            <div className="footer-top">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 col-sm-6 col-xs-12">
                            {/* <!-- Address Widget --> */}
                            <div className="single-widget address">
                                <h2>Head Office</h2>
                                <p>Lorem ipsum dolor sit amet, consectet adipisicing elit, sed do eiusmod temporia.</p>
                                <ul className="list">
                                    <li><i className="fa fa-phone"></i>Phone: +123 456-7890 </li>
                                    <li><i className="fa fa-envelope"></i>Email:<a href="mailto:info@youremail.com">Info@youremail.com</a></li>
                                    <li><i className="fa fa-map-o"></i>Address: Road no 3, Khilgaon 1200, Dhaka Bangladesh</li>
                                </ul>		
                                <ul className="social">
                                    <li><a href="app"><i className="fa fa-facebook"></i></a></li>
                                    <li><a href="app"><i className="fa fa-twitter"></i></a></li>
                                    <li><a href="app"><i className="fa fa-linkedin"></i></a></li>
                                    <li><a href="app"><i className="fa fa-pinterest"></i></a></li>
                                </ul>
                            </div>
                            {/* <!--/ End Address Widget --> */}
                        </div>	
                        <div className="col-md-3 col-sm-6 col-xs-12">
                            {/* <!-- Links Widget --> */}
                            <div className="single-widget links">
                                <h2>Quick Links</h2>
                                <ul className="list">
                                    <li><a href="about-us.html"><i className="fa fa-angle-right"></i>About Our Company</a></li>
                                    <li><a href="services.html"><i className="fa fa-angle-right"></i>Our Latest services</a></li>
                                    <li><a href="projects-masonry.html"><i className="fa fa-angle-right"></i>Our Recent Project</a></li>
                                    <li><a href="blogs-right-sidebar.html"><i className="fa fa-angle-right"></i>Latest Blog</a></li>
                                    <li><a href="app"><i className="fa fa-angle-right"></i>Help Desk</a></li>
                                    <li><a href="contact.html"><i className="fa fa-angle-right"></i>Contact With Us</a></li>
                                </ul>
                            </div>
                            {/* <!--/ End Links Widget --> */}
                        </div>
                        <div className="col-md-3 col-sm-6 col-xs-12">
                            {/* <!-- Twitter Widget --> */}
                            <div className="single-widget twitter">
                                <h2>Recent Tweets</h2>
                                <div className="single-tweet">
                                    <i className="fa fa-twitter"></i>
                                    <p><a href="app">@Tromas</a> Mirum est notare quam littera gothica, quam nunc</p>
                                    <span>4 Minutes Ago</span>
                                </div>
                                <div className="single-tweet">
                                    <i className="fa fa-twitter"></i>
                                    <p><a href="app">@Tromas</a> claram, anteposuerit litterarum</p>
                                    <span>3 Hourse Ago</span>
                                </div>
                                <div className="single-tweet">
                                    <i className="fa fa-twitter"></i>
                                    <p><a href="app">@Tromas</a> per seacula quarta decima et quinta decima.</p>
                                    <span>5 Hourse Ago</span>
                                </div>
                            </div>
                            {/* <!--/ End Twitter Widget --> */}
                        </div>
                        <div className="col-md-3 col-sm-6 col-xs-12">
                            {/* <!-- Gallery Widget --> */}
                            <div className="single-widget photo-gallery">
                                <h2>Photo Gallery</h2>
                                <ul className="list">
                                    <li><a href={gallery1} data-fancybox="photo"><img src="images/gallery-1.jpg" alt="app" /></a></li>
                                    <li><a href={gallery2} data-fancybox="photo"><img src="images/gallery-2.jpg" alt="app"/></a></li>
                                    <li><a href={gallery3} data-fancybox="photo"><img src="images/gallery-3.jpg" alt="app" /></a></li>
                                    <li><a href={gallery4} data-fancybox="photo"><img src="images/gallery-4.jpg" alt="app"/></a></li>
                                    <li><a href={gallery5} data-fancybox="photo"><img src="images/gallery-5.jpg" alt="app" /></a></li>
                                    <li><a href={gallery6} data-fancybox="photo"><img src="images/gallery-6.jpg" alt="app" /></a></li>
                                    <li><a href={gallery7} data-fancybox="photo"><img src="images/gallery-7.jpg" alt="app"/></a></li>
                                    <li><a href={gallery8} data-fancybox="photo"><img src="images/gallery-8.jpg" alt="app" /></a></li>
                                    <li><a href={gallery9} data-fancybox="photo"><img src="images/gallery-9.jpg" alt="app"/></a></li>
                                </ul>
                            </div>
                            {/* <!--/ End Gallery Widget --> */}
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-sm-12 col-xs-12">
                            {/* <!-- copyright --> */}
                            <div className="copyright">
                                <p>&copy; 2020 All Right Reserved.  Design & Developed By <a href="https://codeglim.com">https://www.codeglim.com</a>, Download Premium Themes from our official website <a href="https://codeglim.com">codeglim.com</a>.</p>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </footer>
       
         </div>
        </div>
    )
}