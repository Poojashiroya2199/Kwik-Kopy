import React from "react";
import {Link} from "react-router-dom";
export default function Breadcrumbs({title,link}){
    return (
        <>
              {/* <!-- Start Breadcrumbs --> */}
			<section className="breadcrumbs">
				<div className="container">
					<div className="row">
						<div className="col-md-12 col-sm-12 col-xs-12">
							<h2>{title}</h2>
							<ul className="bread-list">
								<li><Link to="/">Home<i className="fa fa-angle-right"></i></Link></li>
								<li className="active"><Link to={link}>{title}</Link></li>
							</ul>
						</div>
					</div>
				</div>
			</section>
			{/* <!--/ End Breadcrumbs --> */}
        </>
    )
}