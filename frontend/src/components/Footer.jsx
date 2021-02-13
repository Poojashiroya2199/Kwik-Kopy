import React from "react";
import gallery1 from "./../images/gallery-1.jpg";
import gallery2 from "./../images/gallery-2.jpg";
import gallery3 from "./../images/gallery-3.jpg";
import gallery4 from "./../images/gallery-4.jpg";
import gallery5 from "./../images/gallery-5.jpg";
import gallery6 from "./../images/gallery-6.jpg";
import gallery7 from "./../images/gallery-7.jpg";
import gallery8 from "./../images/gallery-8.jpg";
import gallery9 from "./../images/gallery-9.jpg";

export default function Footer(){
    return (
        <>
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
                                    <li><a href="./images/gallery-1.jpg" data-fancybox="photo"><img src={gallery1} alt="app" /></a></li>
                                    <li><a href="./images/gallery-2.jpg" data-fancybox="photo"><img src={gallery2} alt="app"/></a></li>
                                    <li><a href="./images/gallery-3.jpg" data-fancybox="photo"><img src={gallery3} alt="app" /></a></li>
                                    <li><a href="./images/gallery-4.jpg" data-fancybox="photo"><img src={gallery4} alt="app"/></a></li>
                                    <li><a href="./images/gallery-5.jpg" data-fancybox="photo"><img src={gallery5} alt="app" /></a></li>
                                    <li><a href="./images/gallery-6.jpg" data-fancybox="photo"><img src={gallery6} alt="app" /></a></li>
                                    <li><a href="./images/gallery-7.jpg" data-fancybox="photo"><img src={gallery7} alt="app"/></a></li>
                                    <li><a href="./images/gallery-8.jpg" data-fancybox="photo"><img src={gallery8} alt="app" /></a></li>
                                    <li><a href="./images/gallery-9.jpg" data-fancybox="photo"><img src={gallery9} alt="app"/></a></li>
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
                                <p>&copy; 2020 All Right Reserved.  Design & Developed By <a href="https://www.beyonddigitate.com/">https://www.beyonddigitate.com</a>, Get Premium Services from our official website <a href="https://www.beyonddigitate.com/">Beyond Digitate</a>.</p>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        </>
    )
}