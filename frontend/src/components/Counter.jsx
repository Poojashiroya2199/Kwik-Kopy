import React from "react";

export default function Counter(){
    return (
        <>
        <section id="counter" className="counter section">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-sm-12 col-xs-12">
                        {/* single-counter */}
                        <div className="counter-single">
                            <div className="icon">
                                <i className="fa fa-tasks"></i>
                            </div>
                            <div className="s-info">
                                <span className="number">4021</span>
                                <p>Satisfied Clients</p>
                            </div>
                        </div>
                    {/* end signle-counter */}
                    </div>
                    <div className="col-md-12 col-sm-12 col-xs-12">
                        {/* single-counter */}
                        <div className="counter-single">
                            <div className="icon">
                                <i className="fa fa-users"></i>
                            </div>
                            <div className="s-info">
                                <span className="number">98</span>
                                <p>Ongoing Projects</p>
                            </div>
                        </div>
                    {/* end signle-counter */}
                    </div>
                    <div className="col-md-12 col-sm-12 col-xs-12">
                        {/* single-counter */}
                        <div className="counter-single">
                            <div className="icon">
                                <i className="fa fa-coffee"></i>
                            </div>
                            <div className="s-info">
                                <span className="number">2999</span>
                                <p>Cups of Coffee</p>
                            </div>
                        </div>
                    {/* end signle-counter */}
                    </div>
                    <div className="col-md-12 col-sm-12 col-xs-12">
                        {/* single-counter */}
                        <div className="counter-single">
                            <div className="icon">
                                <i className="fa fa-trophy"></i>
                            </div>
                            <div className="s-info">
                                <span className="number">57</span>
                                <p>Winning Awards</p>
                            </div>
                        </div>
                    {/* end signle-counter */}
                    </div>
                </div>
            </div>

        </section>
        </>
    )
}