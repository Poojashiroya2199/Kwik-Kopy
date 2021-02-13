import React from "react";

export default function Features(){
    return (
        <>
        <section className="features">
            <div className="container">
                <div className="row">
                    {/* <!-- Features Single --> */}
                    <div className="col-md-4 col-sm-4 col-xs-12 features-single">
                        <i className="fa fa-meetup"></i>
                        <h2>01/ Strategy</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer adipiscing erat</p>
                    </div>
                    {/* <!--/ End Features Single --> */}
                    {/* <!-- Features Single --> */}
                    <div className="col-md-4 col-sm-4 col-xs-12 features-single active ">
                        <i className="fa fa-code"></i>
                        <h2>02/ Planning</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer adipiscing erat</p>
                    </div>
                    {/* <!--/ End Features Single --> */}
                    {/* <!-- Features Single --> */}
                    <div className="col-md-4 col-sm-4 col-xs-12 features-single">
                        <i className="fa fa-sellsy"></i>
                        <h2>03/ build</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer adipiscing erat</p>
                    </div>
                    {/* <!--/ End Features Single --> */}
                </div>
            </div>
        </section>
        </>
    )
}