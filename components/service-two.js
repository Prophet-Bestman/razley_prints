import React from "react";
import serviceTwo1 from "@/images/what-we-do-1-1.jpg";
const ServiceTwo = () => {
  return (
    <section className="what-we-do sec-pad">
      <div className="thm-container">
        <div className="sec-title text-center">
          <span>Our features</span>
          <h3>What We Do</h3>
          <p></p>
          To deliver creative Print & Marketing Solutions that make our clients
          successful. <br /> We keep our promises, provide creative solutions,
          and achieve our client’s goals
        </div>
        <div className="row">
          <div className="col-lg-6 col-md-12">
            <div className="single-what-we-do">
              <div className="img-box">
                <img src="/img/raz/mission.jpg" alt="" />
              </div>
              <div className="text-box hvr-bounce-to-bottom">
                <a href="/service-details">
                  <h3>3D Printing</h3>
                </a>
                <p>
                  There are many people variation of passages of lorem Ipsum
                  available in the majority have suffer alteration in some.
                </p>
                <a
                  href="/all-services"
                  className="read-more fas fa-angle-right"
                ></a>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12">
            <div className="row">
              <div className="col-sm-6">
                <div className="single-what-we-do-one hvr-bounce-to-bottom">
                  <i className="printify-icon-paper-drill"></i>
                  <a href="/all-services">
                    <h3>Digital Printing</h3>
                  </a>
                  <p>
                    There are many people variation of passages of lorem Ipsum
                    available in the majority have suffer alteration in some.
                  </p>
                  <a
                    href="/all-services"
                    className="read-more fas fa-angle-right"
                  ></a>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="single-what-we-do-one hvr-bounce-to-bottom">
                  <i className="printify-icon-printing-text"></i>
                  <a href="/service-details">
                    <h3>Offset Printing</h3>
                  </a>
                  <p>
                    There are many people variation of passages of lorem Ipsum
                    available in the majority have suffer alteration in some.
                  </p>
                  <a
                    href="/all-services"
                    className="read-more fas fa-angle-right"
                  ></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceTwo;
