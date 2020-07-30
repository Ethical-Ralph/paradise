import React from "react";

const Winners = () => {
  return (
    <>
      <div class="container">
        <div class="page-post">
          <h2 class="page-post-title pb-2 pt-4 mb-4 mt-4 active-p">
            Top 5 all time winners
          </h2>
        </div>
        <div class="row justify-content-md-center">
          <div class="col-md-auto col-lg-12">
            <div
              class="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm position-relative"
              style={{ height: "510px", backgroundColor: "aqua" }}
            >
              <div class="col d-flex flex-column position-static">
                <div
                  id="myCarousel"
                  class="carousel slide"
                  data-ride="carousel"
                >
                  <ol class="carousel-indicators">
                    <li
                      data-target="#myCarousel"
                      data-slide-to="0"
                      class="active"
                    ></li>
                    <li data-target="#myCarousel" data-slide-to="1"></li>
                    <li data-target="#myCarousel" data-slide-to="2"></li>
                  </ol>
                  <div class="carousel-inner">
                    <div class="carousel-item main-carousel active">
                      <img
                        class="bd-placeholder-img"
                        width="100%"
                        height="100%"
                        src="assets/img/1.png"
                        focusable="false"
                      />
                      <div class="container">
                        <div class="carousel-caption">
                          <h1>Hero Prizes!</h1>
                          <p>
                            <a
                              class="btn btn-lg btn-primary"
                              href="#"
                              role="button"
                            >
                              Enter Now
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <a
                    class="carousel-control-prev"
                    href="#myCarousel"
                    role="button"
                    data-slide="prev"
                  >
                    <span
                      class="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span class="sr-only">Previous</span>
                  </a>
                  <a
                    class="carousel-control-next"
                    href="#myCarousel"
                    role="button"
                    data-slide="next"
                  >
                    <span
                      class="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span class="sr-only">Next</span>
                  </a>
                </div>
              </div>
              <div class="col-auto p-4 mt-4 d-flex d-lg-block text-dark text-center">
                <h4 class="mb-0">Thaibault Soulert!</h4>
                <h4 class="mt-5 mb-5">Proud Winner of the</h4>
                <h3 class="mt-5 mb-5">IPhone 11</h3>
                <h4 class="mt-5 mb-5">For just under $3,</h4>
                <h4 class="mt-5 mb-5">
                  Live draw of <br />
                  <span>Thu, May 7, 2020, 12:30 PM</span>
                </h4>
              </div>
            </div>
            <h4 class="text-center pt-4">Love it. Live it. Paradise.</h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default Winners;
