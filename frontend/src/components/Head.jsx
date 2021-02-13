import React from "react";
import {Link} from  "react-router-dom";
import logo from "./../images/logo.png";
export default function Head(){
    return (
        <>
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
                                            <li className="active"><Link to="/">Home</Link></li>
                                            <li><Link to="/aboutus">About Us</Link></li>
                                            <li><a href="app">services<i className="fa fa-angle-down"></i></a>
                                                <ul className="drop-down">
                                                    <li><Link to="/ourservices">Our services</Link></li>
                                                    <li><Link to="/singleservice">service Single</Link></li>
                                                </ul>
                                            </li>
                                            <li><a href="app">Projects<i className="fa fa-angle-down"></i></a>
                                                <ul className="drop-down">
                                                    <li><Link to="/project">Projects</Link></li>
                                                    <li><Link to="/singleproject">Project Single</Link></li>
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
        </>
    )
}