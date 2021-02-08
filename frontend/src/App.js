
import './App.css';
import React from "react";
import "./css/skin/skin1.css";
import "./css/theme-plugin.css";
import  "./css/responsive.css";
import "./css/style.css";
import logo from "./images/logo.png";

function App() {
  return (
    <div  id="bg">
      <div id="layout" className="">
    {/* <!-- Start Header --> */}
    <header id="header" className="header">
      <div className="container">
        <div className="row">
          <div className="col-md-3 col-sm-3 col-xs-12">
            {/* <!-- Logo --> */}
            <div className="logo">
              <a href="app"><img src={logo} alt="logo"/></a>
            </div>
            {/* <!--/ End Logo --> */}
            <div className="mobile-nav"></div>
          </div>
          <div className="col-md-9 col-sm-9 col-xs-12">
            {/* <!-- Header Widget --> */}
            <div className="header-widget">
              {/* <!-- Single Widget --> */}
              <div className="single-widget">
                <i className="fa fa-clock-o"></i>
                <h4>Opeening Time</h4>
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
            <div className="col-md-12 col-sm-12 col-xs-12">
              <div className="nav-area">
                {/* <!-- Main Menu --> */}
                <nav className="mainmenu">
                  <div className="collapse navbar-collapse">	
                    <ul className="nav navbar-nav">
                      <li className="active"><a  href="app" >Home</a></li>
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
            </div>
          </div>
        </div>
      </div>
      {/* <!--/ End Header Inner --> */}
    </header>
    {/* <!--/ End Header --> */}
  
    {/* <!-- Start Breadcrumbs --> */}
    <section className="breadcrumbs">
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-sm-12 col-xs-12">
            <h2>Awesome Projects</h2>
            <ul className="bread-list">
              <li><a href="index.html">Home<i className="fa fa-angle-right"></i></a></li>
              <li className="active"><a href="projects-masonry.html">Projects Masonry</a></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    {/* <!--/ End Breadcrumbs --> */}
  
    {/* <!-- Start Project --> */}
    <section id="projects" className="projects section">
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-sm-12 col-xs-12">
            <div className="section-title">
              <h1>Our Works</h1>
              <p>Contry to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece Distinctio tenetur, dolores aperiam, quasi perferendis nemo mollitia</p>
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
              <div className="cbp-item  webdesign development video branding package">
                {/* <!-- Single Project --> */}
                <div className="project-single">
                  <div className="project-inner">
                    <div className="project-head">
                      <img src="images/project/1.jpg" alt=""/>
                    </div>
                    <div className="project-bottom">
                      <h4><a href="app">Powerfull Theme</a><span className="category">Development</span></h4>
                    </div>
                    <div className="button">
                      <a href="https://www.youtube.com/watch?v=E-2ocmhF6TA" className="btn video-play cbp-lightbox"><i className="fa fa-play"></i></a>
                      <a href="project-single.html" className="btn"><i className="fa fa-link"></i></a>
                    </div>
                  </div>
                </div> 
                {/* <!--/ End Single Project --> */}
              </div>
              <div className="cbp-item  webdesign branding package">
                {/* <!-- Single Project --> */}
                <div className="project-single">
                  <div className="project-inner">
                    <div className="project-head">
                      <img src="images/project/2.jpg" alt=""/>
                    </div>
                    <div className="project-bottom">
                      <h4><a href="app">Crazy Design</a><span className="category">Branding</span></h4>
                    </div>
                    <div className="button">
                      <a data-fancybox="portfolio" href="images/project/2.jpg" className="btn"><i className="fa fa-photo"></i></a>
                      <a href="project-single.html" className="btn"><i className="fa fa-link"></i></a>
                    </div>
                  </div>
                </div>
                {/* <!--/ End Single Project --> */}
              </div>
              <div className="cbp-item  webdesign development video">
                {/* <!-- Single Project --> */}
                <div className="project-single">
                  <div className="project-inner">
                    <div className="project-head">
                      <img src="images/project/msonry1.jpg" alt=""/>
                    </div>
                    <div className="project-bottom">
                      <h4><a href="app">Bootstrap Framework</a><span className="category">Development</span></h4>
                    </div>
                    <div className="button">
                      <a href="https://www.youtube.com/watch?v=E-2ocmhF6TA" className="btn video-play cbp-lightbox"><i className="fa fa-play"></i></a>
                      <a href="project-single.html" className="btn"><i className="fa fa-link"></i></a>
                    </div>
                  </div>
                </div>
                {/* <!--/ End Single Project --> */}
              </div>
              <div className="cbp-item branding development">
                {/* <!-- Single Project --> */}
                <div className="project-single">
                  <div className="project-inner">
                    <div className="project-head">
                      <img src="images/project/msonry2.jpg" alt=""/>
                    </div>
                    <div className="project-bottom">
                      <h4><a href="app">Fully Responsive</a><span className="category">Branding</span></h4>
                    </div>
                    <div className="button">
                      <a data-fancybox="portfolio" href="images/project/msonry2.jpg" className="btn"><i className="fa fa-photo"></i></a>
                      <a href="project-single.html" className="btn"><i className="fa fa-link"></i></a>
                    </div>
                  </div>
                </div>
                {/* <!--/ End Single Project --> */}
              </div>
              <div className="cbp-item  webdesign development video">
                {/* <!-- Single Project --> */}
                <div className="project-single">
                  <div className="project-inner">
                    <div className="project-head">
                      <img src="images/project/5.jpg" alt=""/>
                    </div>
                    <div className="project-bottom">
                      <h4><a href="app">Easy To Use</a><span className="category">Development</span></h4>
                    </div>
                    <div className="button">
                      <a href="https://www.youtube.com/watch?v=E-2ocmhF6TA" className="btn video-play cbp-lightbox"><i className="fa fa-play"></i></a>
                      <a href="project-single.html" className="btn"><i className="fa fa-link"></i></a>
                    </div>
                  </div>
                </div>
                {/* <!--/ End Single Project --> */}
              </div>
              <div className="cbp-item  webdesign development branding">
                {/* <!-- Single Project --> */}
                <div className="project-single">
                  <div className="project-inner">
                    <div className="project-head">
                      <img src="images/project/6.jpg" alt=""/>
                    </div>
                    <div className="project-bottom">
                      <h4><a href="app">Modern Design</a><span className="category">Printing</span></h4>
                    </div>
                    <div className="button">
                      <a data-fancybox="portfolio" href="images/project/6.jpg" className="btn"><i className="fa fa-photo"></i></a>
                      <a href="project-single.html" className="btn"><i className="fa fa-link"></i></a>
                    </div>
                  </div>
                </div>
                {/* <!--/ End Single Project --> */}
              </div>
              <div className="cbp-item  webdesign development branding">
                {/* <!-- Single Project --> */}
                <div className="project-single">
                  <div className="project-inner">
                    <div className="project-head">
                      <img src="images/project/msonry3.jpg" alt=""/>
                    </div>
                    <div className="project-bottom">
                      <h4><a href="app">Modern Design</a><span className="category">Printing</span></h4>
                    </div>
                    <div className="button">
                      <a data-fancybox="portfolio" href="images/project/msonry3.jpg" className="btn"><i className="fa fa-photo"></i></a>
                      <a href="project-single.html" className="btn"><i className="fa fa-link"></i></a>
                    </div>
                  </div>
                </div>
                {/* <!--/ End Single Project --> */}
              </div>
              <div className="cbp-item  webdesign development branding">
                {/* <!-- Single Project --> */}
                <div className="project-single">
                  <div className="project-inner">
                    <div className="project-head">
                      <img src="images/project/1.jpg" alt=""/>
                    </div>
                    <div className="project-bottom">
                      <h4><a href="app">Modern Design</a><span className="category">Printing</span></h4>
                    </div>
                    <div className="button">
                      <a data-fancybox="portfolio" href="images/project/1.jpg" className="btn"><i className="fa fa-photo"></i></a>
                      <a href="project-single.html" className="btn"><i className="fa fa-link"></i></a>
                    </div>
                  </div>
                </div>
                {/* <!--/ End Single Project --> */}
              </div>
              <div className="cbp-item  webdesign development branding">
                {/* <!-- Single Project --> */}
                <div className="project-single">
                  <div className="project-inner">
                    <div className="project-head">
                      <img src="images/project/1.jpg" alt=""/>
                    </div>
                    <div className="project-bottom">
                      <h4><a href="app">Modern Design</a><span className="category">Printing</span></h4>
                    </div>
                    <div className="button">
                      <a data-fancybox="portfolio" href="images/project/1.jpg" className="btn"><i className="fa fa-photo"></i></a>
                      <a href="project-single.html" className="btn"><i className="fa fa-link"></i></a>
                    </div>
                  </div>
                </div>
                {/* <!--/ End Single Project --> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* <!--/ End Project --> */}
  
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
                  <li><a href="images/gallery-1.jpg" data-fancybox="photo"><img src="images/gallery-1.jpg" alt=""/></a></li>
                  <li><a href="images/gallery-2.jpg" data-fancybox="photo"><img src="images/gallery-2.jpg" alt=""/></a></li>
                  <li><a href="images/gallery-3.jpg" data-fancybox="photo"><img src="images/gallery-3.jpg" alt="" /></a></li>
                  <li><a href="images/gallery-4.jpg" data-fancybox="photo"><img src="images/gallery-4.jpg" alt="" /></a></li>
                  <li><a href="images/gallery-5.jpg" data-fancybox="photo"><img src="images/gallery-5.jpg" alt="" /></a></li>
                  <li><a href="images/gallery-6.jpg" data-fancybox="photo"><img src="images/gallery-6.jpg" alt="" /></a></li>
                  <li><a href="images/gallery-7.jpg" data-fancybox="photo"><img src="images/gallery-7.jpg" alt="" /></a></li>
                  <li><a href="images/gallery-8.jpg" data-fancybox="photo"><img src="images/gallery-8.jpg" alt="" /></a></li>
                  <li><a href="images/gallery-9.jpg" data-fancybox="photo"><img src="images/gallery-9.jpg" alt="" /></a></li>
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
              {/* <!--/ End Copyright --> */}
            </div>
          </div>
        </div>
      </div>
    </footer>
     {/* <!--/ End footer --> */}
    
   
  </div>
    </div>
  );
}

export default App;
