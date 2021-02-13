import React from "react";
import Breadcrumbs from "./Breadcrumbs";
import image1 from "./../images/project/proj-thumb1.jpg";
import image2 from "./../images/project/proj-thumb2.jpg";
import image3 from "./../images/project/proj-thumb3.jpg";
import image4 from "./../images/project/proj-thumb4.jpg";
export default function SingleProject(){
    return (
        <div className="singleproject">
            <Breadcrumbs title={"Project Single"} link={"/singleproject"} />
			<section id="projects" className="projects section single">
				<div className="container">
					<div className="row">	
						<div className="col-md-12 col-sm-12 col-xs-12">
							<div className="project-single">
								<div className="project-inner">
									<div className="project-head">
										<div className="project-slider">
											<ul className="bxslider">
											  <li><img src={image1} alt="#" /></li>
											  {/* <li><img src={image2} alt="#" /></li> */}
											  {/* <li><img src="images/project/proj-thumb3.jpg" alt="#" /></li>
											  <li><img src="images/project/proj-thumb4.jpg" alt="#" /></li> */}
											</ul>
											<div id="bx-pager">
											  <a data-slide-index="0" href="app"><img src={image1} alt="#" /></a>
											  <a data-slide-index="1" href="app"><img src={image2} alt="#"/></a>
											  <a data-slide-index="2" href="app"><img src={image3} alt="#" /></a>
											  <a data-slide-index="3" href="app"><img src={image4} alt="#" /></a>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="row">	
						{/* <!--  Project --> */}
						<div className="col-md-4 col-sm-12 col-xs-12">
							<div className="project-sidebar">
								<div className="single-sidebar project-info">
									{/* <!-- Single Widget --> */}
									<div className="single-info">
										<i className="fa fa-user"></i>
										<h4>Customer</h4>
										<a href="app">Tromas Group</a>
									</div>
									{/* <!--/ End Single Widget --> */}
									{/* <!-- Single Widget --> */}
									<div className="single-info">
										<i className="fa fa-tags "></i>
										<h4>Category</h4>
										<a href="app">Web Design</a>
									</div>
									{/* <!--/ End Single Widget --> */}
									{/* <!-- Single Widget --> */}
									<div className="single-info">
										<i className="fa fa-calendar"></i>
										<h4>date</h4>
										<a href="app">08th July, 2017</a>
									</div>
									{/* <!--/ End Single Widget --> */}
									{/* <!-- Single Widget --> */}
									<div className="single-info">
										<i className="fa fa-globe"></i>
										<h4>Website</h4>
										<a href="app">www.codeglim.com</a>
									</div>
									 {/* <!--/ End Single Widget --> */}
								</div>
								<div className="single-sidebar brochure">
									{/* <!-- Single Widget --> */}
									<img src="images/project/3.jpg" alt=""/>
									<a href="app">Download brochure<i className="fa fa-download"></i></a>
									{/* <!--/ End Single Widget --> */}
								</div>
							</div>
						</div>
						<div className="col-md-8">
							<div className="project-content">
								<h2>Project Title Goes Here</h2>
								<p> Nunc imperdiet gravida erat, in porta magna feugiat quis. Aenean non massa a diam porta vulputate nec at nisi. Donec sed odio ultricies, facilisis ex vel, tincidunt libero. Donec diam tortor, mattis sit amet nibh nec, eleifend sodales lacus. In eu eros ut augue tristique dictum viverra nec sapien. Phasellus condimentum dictum sapien, nec fermentum lacus aliquet eget. Mauris sodales consectetur tortor, sed pretium arcu iaculis sit amet. Phasellus vel lectus elit. Cras porta vitae ipsum nec consectetur. Duis suscipit tristique nulla vitae faucibus. Curabitur sit amet neque a sapien lobortis egestas. Nunc tellus nisi, imperdiet ut convallis posuere, venenatis ut libero. Sed fringilla diam eros, nec iaculis justo faucibus eget. </p>
								<blockquote>Do what you love to do and give it your very best. Whether it's business or baseball, or the theater, or any field. If you don't love what you're doing and you can't give it your best, get out of it. Life is too short. You'll be an old man before you know it.</blockquote>
								<p> Cras dignissim metus quis lobortis dignissim. Vestibulum accumsan nulla a justo facilisis, vel tempor ex mattis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut in ultricies ligula, in ornare est. Ut maximus nibh ut felis lacinia, ut commodo enim convallis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Ut hendrerit risus in ipsum pharetra, a sagittis dui sodales. Duis et libero eget eros tempor semper. Nunc ac gravida dui. Praesent quis sem quis lectus feugiat congue tristique id erat.  </p>
								<a href="app" className="btn">Live Preview</a>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* <!--/ End Project --> */}
        </div>
    )
}