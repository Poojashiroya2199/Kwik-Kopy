import React from "react";
export default function Whychoose(){
    return (
        <>
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
        </>
    )
}