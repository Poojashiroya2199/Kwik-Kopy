import React from "react";
import team1 from "./../images/team/team1.jpg";
import team2 from "./../images/team/team2.jpg";
import team3 from "./../images/team/team3.jpg";
import team4 from "./../images/team/team4.jpg";

export default function Team(){
    return (
        <>
        <section id="team" className="team section">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-sm-12 col-xs-12">
                        <div className="section-title">
                            <h1>Meet The Team</h1>
                            <p>Contry to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece Distinctio tenetur, dolores aperiam, quasi perferendis nemo mollitia</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {/* <div className="col-md-3 col-sm-6 col-xs-12"> */}
                        {/* <!-- Single Team --> */}
                        <div className="single-team one default">
                            {/* <!-- Team Head --> */}
                            <div className="t-head">
                                <img src={team1} alt="app" width="100%" height="100%"/>
                                <div className="t-hover">
                                    <ul className="t-social">
                                        <li><a href="app"><i className="fa fa-facebook"></i></a></li>
                                        <li><a href="app"><i className="fa fa-twitter"></i></a></li>
                                        <li><a href="app"><i className="fa fa-behance"></i></a></li>
                                        <li><a href="app"><i className="fa fa-dribbble"></i></a></li>				
                                    </ul>
                                </div>
                            </div>
                            {/* <!-- Team Bottom --> */}
                            <div className="t-bottom">
                                <div className="t-icon">
                                    <a href="#team1"><i className="fa fa-plus"></i></a>
                                </div>
                                <h2 className="t-name">Angel Rimu</h2>
                                <p className="what">Creative</p>
                            </div>
                        </div>
                        {/* <!-- End Single Team --> */}
                    {/* </div>		 */}
                    {/* <div className="col-md-3 col-sm-6 col-xs-12"> */}
                        {/* <!-- Single Team --> */}
                        <div className="single-team two default">
                            {/* <!-- Team Head --> */}
                            <div className="t-head">
                                <img src={team2} alt="app" width="100%" height="100%"/>
                                <div className="t-hover">
                                    <ul className="t-social">
                                        <li><a href="app"><i className="fa fa-facebook"></i></a></li>
                                        <li><a href="app"><i className="fa fa-twitter"></i></a></li>
                                        <li><a href="app"><i className="fa fa-behance"></i></a></li>
                                        <li><a href="app"><i className="fa fa-dribbble"></i></a></li>				
                                    </ul>
                                </div>
                            </div>
                            {/* <!-- Team Bottom --> */}
                            <div className="t-bottom">
                                <div className="t-icon">
                                    <a href="#team2"><i className="fa fa-plus"></i></a>
                                </div>
                                <h2 className="t-name">Shakil Hossain</h2>
                                <p className="what">Developer</p>
                            </div>
                        </div>
                        {/* <!-- End Single Team --> */}
                    {/* </div>	 */}
                    {/* <div className="col-md-3 col-sm-6 col-xs-12"> */}
                        {/* <!-- Single Team --> */}
                        <div className="single-team three default">
                            {/* <!-- Team Head --> */}
                            <div className="t-head">
                                <img src={team3} alt="app" width="100%" height="100%"/>
                                <div className="t-hover">
                                    <ul className="t-social">
                                        <li><a href="app"><i className="fa fa-facebook"></i></a></li>
                                        <li><a href="app"><i className="fa fa-twitter"></i></a></li>
                                        <li><a href="app"><i className="fa fa-behance"></i></a></li>
                                        <li><a href="app"><i className="fa fa-dribbble"></i></a></li>				
                                    </ul>
                                </div>
                            </div>
                            {/* <!-- Team Bottom --> */}
                            <div className="t-bottom">
                                <div className="t-icon">
                                    <a href="#team3"><i className="fa fa-plus"></i></a>
                                </div>
                                <h2 className="t-name">Sufia Mizan</h2>
                                <p className="what">Branding</p>
                            </div>
                        </div>
                        {/* <!-- End Single Team --> */}
                    {/* </div>		 */}
                    {/* <div className="col-md-3 col-sm-6 col-xs-12"> */}
                        {/* <!-- Single Team --> */}
                        <div className="single-team four default">
                            {/* <!-- Team Head --> */}
                            <div className="t-head">
                                <img src={team4} alt="app" width="100%" height="100%"/>
                                <div className="t-hover">
                                    <ul className="t-social">
                                        <li><a href="app"><i className="fa fa-facebook"></i></a></li>
                                        <li><a href="app"><i className="fa fa-twitter"></i></a></li>
                                        <li><a href="app"><i className="fa fa-behance"></i></a></li>
                                        <li><a href="app"><i className="fa fa-dribbble"></i></a></li>				
                                    </ul>
                                </div>
                            </div>
                            {/* <!-- Team Bottom --> */}
                            <div className="t-bottom">
                                <div className="t-icon">
                                    <a href="#team4"><i className="fa fa-plus"></i></a>
                                </div>
                                <h2 className="t-name">SM Jehad</h2>
                                <p className="what">CEO/Officer</p>
                            </div>
                        </div>
                        {/* <!-- End Single Team --> */}
                    {/* </div>	 */}
                </div>
                </div>
        </section>
        </>
    )
}