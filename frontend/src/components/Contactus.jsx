import React from "react";
export default function Contactus(){
    return (
        <div>
{/* // <!-- Start Contact --> */}
			<section id="contact-us" className="contact-us section">
				<div className="container">
					<div className="row">
						<div className="col-md-12 col-sm-12 col-xs-12">
							<div className="section-title">
								<h1>Contact Us</h1>
								<p>Contry to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old</p>
							</div>
						</div>
					</div>
					<div className="row">
						{/* <!-- Contact Form --> */}
						<div className="col-md-8 col-sm-6 col-xs-12">
							<form className="form" method="post" action="mail/mail.php">
								<div className="row">
									<div className="col-md-6">
										<div className="form-group">
											<input type="text" name="name" placeholder="Full Name" required="required" />
										</div>
									</div>
									<div className="col-md-6">
										<div className="form-group">
											<input type="email" name="email" placeholder="Your Email" required="required" />
										</div>
									</div>
									<div className="col-md-12">
										<div className="form-group">
											<input type="text" name="subject" placeholder="Subject" required="required" />
										</div>
									</div>
									<div className="col-md-12">
										<div className="form-group">
											<textarea name="message" rows="7" placeholder="Type Your Message Here" ></textarea>
										</div>
									</div>
									<div className="col-md-12">
										<div className="form-group button">	
											<button type="submit" className="btn primary">Submit Message</button>
										</div>
									</div>
								</div>
							</form>
						</div>
						{/* <!--/ End Contact Form --> */}
						{/* <!-- Contact Address --> */}
						<div className="col-md-4 col-sm-6 col-xs-12">
							<div className="contact-address">
								<div className="contact">
									<h2>Get In Touch</h2>
									<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
									{/* <!-- Single Address --> */}
									<div className="single-address">
										<span><i className="fa fa-headphones"></i>Phone</span>
										<p>+(123) 45678910, +(346) 45678910</p>
									</div>
									{/* <!--/ End Single Address --> */}
									{/* <!-- Single Address --> */}
									<div className="single-address">
										<span><i className="fa fa-envelope"></i>Email</span>
										<p><a href="mailto:info@youremail.com">info@youremail.com</a>, <a href="mailto:success@youremail.com">success@youremail.com</a></p>
									</div>
									{/* <!--/ End Single Address -->
									<!--/ End Single Address -->
									<!-- Single Address --> */}
									<div className="single-address">
										<span><i className="fa fa-map"></i>Corporate Office:</span>
										<p>Road no 3, Block-D, Khilgaon 1200, Dhaka Bangladesh</p>
									</div>
									{/* <!--/ End Single Address --> */}
								</div>
							</div>
						</div>
						{/* <!--/ End Contact Address --> */}
					</div>
				</div>
			</section>
			{/* <!--/ End Contact --> */}
            </div>
 )
}
