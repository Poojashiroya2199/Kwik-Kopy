import React from "react";
export default function Work(){
    return (
        <>
         <section id="projects" className="projects section">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-sm-12 col-xs-12">
                        <div className="section-title">
                            <h1>Our Works</h1>
                            <p>It has roots in a piece Distinctio tenetur, dolores aperiam, quasi perferendis nemo mollitia</p>
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
            </div>
        </section> 
        </>
    )
}