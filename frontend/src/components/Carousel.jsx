import React from "react";

export default function Carousel(){
    return (
        <>
        <section className="hero-area">
				<div className="slider-one">
					
					<div className="single-slider" >
						<div className="container">
							<div className="row">
								<div className="col-md-7 col-sm-12 col-xs-12">
								
									<div className="slide-text">
										<h1><span className="short">You are entire</span>Creative Business</h1>
										<p>welcome to tromas, Contrary to popular belief. Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old .</p>
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
									
								</div>
							</div>
						</div>
					</div>
					

					<div className="single-slider">
						<div className="container">
							<div className="row">
								<div className="col-md-7 col-md-offset-5 col-sm-12 col-xs-12">
									
									<div className="slide-text right">
										<h1><span className="short">You are entire</span>Perfect Business</h1>
										<p>welcome to tromas, Contrary to popular belief. Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old .</p>
										<div className="slide-btn">	
											<a href="contact.html" className="btn primary">Contact Us</a>
										</div>
									</div>
									
								</div>
							</div>
						</div>
					</div>
					

					<div className="single-slider" >
						<div className="container">
							<div className="row">
								<div className="col-md-7 col-sm-12 col-xs-12">
									
									<div className="slide-text">
										<h1><span className="short">You are entire</span>Tromas Business</h1>
										<p>welcome to tromas, Contrary to popular belief. Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old .</p>
										<div className="slide-btn">	
											<a href="#projects" className="btn primary">Our Projects<i className="fa fa-long-arrow-down"></i></a>
										</div>
									</div>
									
								</div>
							</div>
						</div>
					</div>
					
				</div>
			</section>
			
        </>
    )
}