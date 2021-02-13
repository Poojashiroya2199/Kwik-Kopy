import React from "react";


function App() {
  return (
    <div >
  
    {/* <!-- Start Breadcrumbs --> */}
    <section className="breadcrumbs">
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-sm-12 col-xs-12">
            <h2>Awesome Projects</h2>
            <ul className="bread-list">
              <li><a href="index.html">Home<i className="fa fa-angle-right"></i></a></li>
              <li className="active"><a href="projects-masonry.html">Projects Masonry</a></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    {/* <!--/ End Breadcrumbs --> */}
  
    {/* <!-- Start Project --> */}
    <section id="projects" className="projects section">
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-sm-12 col-xs-12">
            <div className="section-title">
              <h1>Our Works</h1>
              <p>Contry to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece Distinctio tenetur, dolores aperiam, quasi perferendis nemo mollitia</p>
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
        <div className="row">
          <div className="col-md-12 col-sm-12 col-xs-12">
            <div id="project-item" className="cbp">
              <div className="cbp-item  webdesign development video branding package">
                {/* <!-- Single Project --> */}
                <div className="project-single">
                  <div className="project-inner">
                    <div className="project-head">
                      <img src="images/project/1.jpg" alt=""/>
                    </div>
                    <div className="project-bottom">
                      <h4><a href="app">Powerfull Theme</a><span className="category">Development</span></h4>
                    </div>
                    <div className="button">
                      <a href="https://www.youtube.com/watch?v=E-2ocmhF6TA" className="btn video-play cbp-lightbox"><i className="fa fa-play"></i></a>
                      <a href="project-single.html" className="btn"><i className="fa fa-link"></i></a>
                    </div>
                  </div>
                </div> 
                {/* <!--/ End Single Project --> */}
              </div>
              <div className="cbp-item  webdesign branding package">
                {/* <!-- Single Project --> */}
                <div className="project-single">
                  <div className="project-inner">
                    <div className="project-head">
                      <img src="images/project/2.jpg" alt=""/>
                    </div>
                    <div className="project-bottom">
                      <h4><a href="app">Crazy Design</a><span className="category">Branding</span></h4>
                    </div>
                    <div className="button">
                      <a data-fancybox="portfolio" href="images/project/2.jpg" className="btn"><i className="fa fa-photo"></i></a>
                      <a href="project-single.html" className="btn"><i className="fa fa-link"></i></a>
                    </div>
                  </div>
                </div>
                {/* <!--/ End Single Project --> */}
              </div>
              <div className="cbp-item  webdesign development video">
                {/* <!-- Single Project --> */}
                <div className="project-single">
                  <div className="project-inner">
                    <div className="project-head">
                      <img src="images/project/msonry1.jpg" alt=""/>
                    </div>
                    <div className="project-bottom">
                      <h4><a href="app">Bootstrap Framework</a><span className="category">Development</span></h4>
                    </div>
                    <div className="button">
                      <a href="https://www.youtube.com/watch?v=E-2ocmhF6TA" className="btn video-play cbp-lightbox"><i className="fa fa-play"></i></a>
                      <a href="project-single.html" className="btn"><i className="fa fa-link"></i></a>
                    </div>
                  </div>
                </div>
                {/* <!--/ End Single Project --> */}
              </div>
              <div className="cbp-item branding development">
                {/* <!-- Single Project --> */}
                <div className="project-single">
                  <div className="project-inner">
                    <div className="project-head">
                      <img src="./images/project/msonry2.jpg" alt=""/>
                    </div>
                    <div className="project-bottom">
                      <h4><a href="app">Fully Responsive</a><span className="category">Branding</span></h4>
                    </div>
                    <div className="button">
                      <a data-fancybox="portfolio" href="images/project/msonry2.jpg" className="btn"><i className="fa fa-photo"></i></a>
                      <a href="project-single.html" className="btn"><i className="fa fa-link"></i></a>
                    </div>
                  </div>
                </div>
                {/* <!--/ End Single Project --> */}
              </div>
              <div className="cbp-item  webdesign development video">
                {/* <!-- Single Project --> */}
                <div className="project-single">
                  <div className="project-inner">
                    <div className="project-head">
                      <img src="./images/project/5.jpg" alt=""/>
                    </div>
                    <div className="project-bottom">
                      <h4><a href="app">Easy To Use</a><span className="category">Development</span></h4>
                    </div>
                    <div className="button">
                      <a href="https://www.youtube.com/watch?v=E-2ocmhF6TA" className="btn video-play cbp-lightbox"><i className="fa fa-play"></i></a>
                      <a href="project-single.html" className="btn"><i className="fa fa-link"></i></a>
                    </div>
                  </div>
                </div>
                {/* <!--/ End Single Project --> */}
              </div>
              <div className="cbp-item  webdesign development branding">
                {/* <!-- Single Project --> */}
                <div className="project-single">
                  <div className="project-inner">
                    <div className="project-head">
                      <img src="./images/project/6.jpg" alt=""/>
                    </div>
                    <div className="project-bottom">
                      <h4><a href="app">Modern Design</a><span className="category">Printing</span></h4>
                    </div>
                    <div className="button">
                      <a data-fancybox="portfolio" href="images/project/6.jpg" className="btn"><i className="fa fa-photo"></i></a>
                      <a href="project-single.html" className="btn"><i className="fa fa-link"></i></a>
                    </div>
                  </div>
                </div>
                {/* <!--/ End Single Project --> */}
              </div>
              <div className="cbp-item  webdesign development branding">
                {/* <!-- Single Project --> */}
                <div className="project-single">
                  <div className="project-inner">
                    <div className="project-head">
                      <img src="./images/project/msonry3.jpg" alt=""/>
                    </div>
                    <div className="project-bottom">
                      <h4><a href="app">Modern Design</a><span className="category">Printing</span></h4>
                    </div>
                    <div className="button">
                      <a data-fancybox="portfolio" href="images/project/msonry3.jpg" className="btn"><i className="fa fa-photo"></i></a>
                      <a href="project-single.html" className="btn"><i className="fa fa-link"></i></a>
                    </div>
                  </div>
                </div>
                {/* <!--/ End Single Project --> */}
              </div>
              <div className="cbp-item  webdesign development branding">
                {/* <!-- Single Project --> */}
                <div className="project-single">
                  <div className="project-inner">
                    <div className="project-head">
                      <img src="./images/project/1.jpg" alt=""/>
                    </div>
                    <div className="project-bottom">
                      <h4><a href="app">Modern Design</a><span className="category">Printing</span></h4>
                    </div>
                    <div className="button">
                      <a data-fancybox="portfolio" href="images/project/1.jpg" className="btn"><i className="fa fa-photo"></i></a>
                      <a href="project-single.html" className="btn"><i className="fa fa-link"></i></a>
                    </div>
                  </div>
                </div>
                {/* <!--/ End Single Project --> */}
              </div>
              <div className="cbp-item  webdesign development branding">
                {/* <!-- Single Project --> */}
                <div className="project-single">
                  <div className="project-inner">
                    <div className="project-head">
                      <img src="images/project/1.jpg" alt=""/>
                    </div>
                    <div className="project-bottom">
                      <h4><a href="app">Modern Design</a><span className="category">Printing</span></h4>
                    </div>
                    <div className="button">
                      <a data-fancybox="portfolio" href="images/project/1.jpg" className="btn"><i className="fa fa-photo"></i></a>
                      <a href="project-single.html" className="btn"><i className="fa fa-link"></i></a>
                    </div>
                  </div>
                </div>
                {/* <!--/ End Single Project --> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* <!--/ End Project --> */}
  
   
    </div>
  );
}

export default App;
