import React from "react";
import image1 from "./../images/services.jpg";
import gallery1 from "./../images/gallery-1.jpg";
import gallery2 from "./../images/gallery-2.jpg";
import Breadcrumbs from "./Breadcrumbs";
export default function SeingService(){
    return (
        <div>
           
            <Breadcrumbs title={"Services Single"} link={"singleservice"} />
			{/* <!--/ End Breadcrumbs --> */}
			{/* <!-- Start Services --> */}
			<section className="services single section">
				<div className="container">
					<div className="row">
						<div className="col-md-8 col-sm-12 col-xs-12">
							<div className="services-main">
								{/* <!-- Service Slider --> */}
								<div className="services-slider">
									{/* <!-- Single Slide --> */}
									<div className="single-slide">
										<img src={image1} alt="app" />
									</div>
									{/* <!-- End Single Slide --> */}
									{/* <!-- Single Slide --> */}
									{/* <div className="single-slide">
										<img src="images/services.jpg" alt="app" />
									</div> */}
									{/* <!-- End Single Slide --> */}
								</div>
								{/* <!-- End Service Slider --> */}
								{/* <!-- Service Content --> */}
								<div className="services-content">
									<h2>Service Title Goes Here</h2>
									<p>Continual delighted as elsewhere am convinced unfeeling Introduced stimulated attachment no by projection To loud lady whomm ymile sold four Need miss all four case fine age tell He families my pleasant speaking it bringing it thoughts View busy dine oh in kne wif even Boy these along far own other equal old fanny charm Difficulty invitation put introduced see middletons nor preference Answer misery adieus add wooded how na men before though. Pretended belonging contented mrs suffering favourite you the continu. Mrs civil nay least means tried drift Natural end law whether but and towards certain. </p>
									<div className="img-right">
										<div className="text">
											<h4>Here is our service list</h4>
											<ul>
												<li>Powerfull HTML5 Template</li>
												<li>Quality Design and more</li>
												<li>Smooth Design</li>
												<li>It's ferfect for any business website</li>
												<li>Powerfull HTML5 Template</li>
												<li>Quality Design and more</li>
												<li>Smooth Design</li>
												<li>It's ferfect for any business website</li>
											</ul>
										</div>
										<div className="text">
											<h4>Here is our service list</h4>
											<ul>
												<li>Powerfull HTML5 Template</li>
												<li>Quality Design and more</li>
												<li>Smooth Design</li>
												<li>It's ferfect for any business website</li>
												<li>Powerfull HTML5 Template</li>
												<li>Quality Design and more</li>
												<li>Smooth Design</li>
												<li>It's ferfect for any business website</li>
											</ul>
										</div>
									</div>
									<p>Pretended belonging contented mrs suffering favourite you the continu. Mrs civil nay least means tried drift Natural end law whether but and towards certain. Continual delighted as elsewhere am convinced unfeeling Introduced stimulated attachment no by projection To loud lady whomm ymile sold four Need miss all four case fine age tell He families my pleasant speaking it bringing it thoughts View busy dine oh in kne wif even Boy these along far own other equal old fanny</p>
									<p>Continual delighted as elsewhere am convinced unfeeling Introduced stimulated attachment no by projection To loud lady whomm ymile sold four Need miss all four case fine age tell He families my pleasant</p>
								</div>
								{/* <!--/ End Service Content --> */}
							</div>
						</div>
						<div className="col-md-4 col-sm-12 col-xs-12">
							{/* <!-- Service Sidebar --> */}
							<div className="services-sidebar">	
								{/* <!-- Single Sidebar --> */}
								<div className="single-sidebar category">
									<ul>
										<li className="active"><a href="app"><i className="fa fa-list"></i>All servicess</a></li>			
										<li><a href="app"><i className="fa fa-handshake-o"></i>IT Consulting</a></li>			
										<li><a href="app"><i className="fa fa-gavel"></i>Lowyer Consulting</a></li>			
										<li><a href="app"><i className="fa fa-globe"></i>Web Resource</a></li>			
										<li><a href="app"><i className="fa fa-money"></i>Finance Solutions</a></li>			
										<li><a href="app"><i className="fa fa-photo"></i>Our Gallery</a></li>			
									</ul>
								</div>
								{/* <!--/ End Single Sidebar --> */}
								{/* <!-- Single Sidebar --> */}
								<div className="single-sidebar service">
									<h2><span>More Service</span></h2>
									<div className="single-service">
										<a href="service-single.html"><img src={gallery1} alt="" /></a>
										<div className="caption">
											<p><a href="service-single.html">Creative Idea</a></p>
										</div>
									</div>	
									<div className="single-service">
										<a href="service-single.html"><img src={gallery2} alt=""  /></a>
										<div className="caption">
											<p><a href="service-single.html">Investment Plan</a></p>
										</div>
									</div>					
								</div>
								{/* <!--/ End Single Sidebar --> */}
							</div>
							{/* <!--/ End Service Sidebar --> */}
						</div>
					</div>
				</div>
			</section>
			{/* <!--/ End Services --> */}
        </div>
    )
}