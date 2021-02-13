import React from "react";
export default function Ourskill(){
    return (
        <>
			{/* <!-- Our Skill --> */}
			<section id="our-skill" className="our-skill section">
				<div className="container">
					<div className="row">
						<div className="col-md-12 col-sm-12 col-xs-12">
							<div className="section-title">
								<h1>About Company</h1>
								<p>Contry to popular belief, Lorem Ipsum It has roots in a piece of classical Latin</p>
							</div>
						</div>
					</div>
					<div className="row"> 
						<div className="col-md-6 col-sm-12 col-xs-12">
							<div className="skill-text">
								<h2>How we work</h2>
								<p>ontrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old ontrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old</p>
								<p>ontrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old ontrary</p>
								<a href="contact.html" className="btn primary">Contact Us</a>
							</div>
						</div>
						<div className="col-md-6 col-sm-12 col-xs-12">
							{/* <!-- Single Skill --> */}
							<div className="single-skill">
								<div className="skill-info">
									<h4>Finance</h4>
								</div>
								<div className="progress">
									<div className="progress-bar" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style={{width:"70%"}}>
									<span className="percent">70%</span></div>
								</div>
							</div>
							{/* <!--/ End Single Skill --> */}
							{/* <!-- Single Skill --> */}
							<div className="single-skill">
								<div className="skill-info">
									<h4>Marketings</h4>
								</div>
								<div className="progress">
									<div className="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"  style={{width:"90%"}}>
									<span className="percent">90%</span></div>
								</div>
							</div>
							{/* <!--/ End Single Skill --> */}
							{/* <!-- Single Skill --> */}
							<div className="single-skill">
								<div className="skill-info">
									<h4>Resource</h4>
								</div>
								<div className="progress">
									<div className="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{width:"60%"}} >
									<span className="percent">60%</span></div>
								</div>
							</div>
							{/* <!--/ End Single Skill --> */}
							{/* <!-- Single Skill --> */}
							<div className="single-skill">
								<div className="skill-info">
									<h4>Development</h4>
								</div>
								<div className="progress">
									<div className="progress-bar" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style={{width:"80%"}} >
									<span className="percent">80%</span></div>
								</div>
							</div>
							{/* <!--/ End Single Skill --> */}
						</div>
					</div>
				</div>
			</section>
        </>
    )
}