import React, { Fragment } from "react";
import Link from "next/link";
import { Col, Row } from "react-bootstrap";
import {
  FooterAboutData,
  FooterLinksData,
  FooterPostsData,
  FooterContactData,
  FooterBottomData,
} from "@/data";

const Footer = () => {
  return (
    <Fragment>
      <footer className="footer">
        <div className="thm-container">
          <Row>
            <Col lg={6}>
              <div className="footer-widget about-widget">
                <div className="title">
                  <h3>{FooterAboutData.title}</h3>
                </div>
                <p>{FooterAboutData.text}</p>

                <form action="#" className="footer-subscribe">
                  <input type="text" name="email" placeholder="Email address" />
                  <button type="submit">
                    <i className="fa fa-angle-right"></i>
                  </button>
                </form>
              </div>
            </Col>
            <Col lg={3}>
              <div className="footer-widget links-widget explore">
                <div className="title">
                  <h3>{FooterLinksData.title}</h3>
                </div>
                <ul className="link-list">
                  {FooterLinksData.links.map(({ url, label }, index) => {
                    return (
                      <li key={index}>
                        <Link href={url}>
                          <a>{label}</a>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </Col>
            <Col lg={3}>
              <div className="footer-widget contact-widget">
                <div className="title">
                  <h3>{FooterContactData.title}</h3>
                </div>
                {FooterContactData.infos.map(({ text, url }, index) => {
                  return (
                    <p key={index}>
                      <a target="_blank" href={url}>
                        {text}
                      </a>
                    </p>
                  );
                })}
              </div>
            </Col>
          </Row>
        </div>
      </footer>
      <div className="footer-bottom">
        <div className="thm-container clearfix">
          <div className="float-left copy-text">
            <p>
              &copy; Copyright {new Date().getFullYear()} Branded by{" "}
              <a href="#">LOGNETICS</a>
            </p>
          </div>
          <div className="social-box float-right">
            {FooterBottomData.social.map(({ icon, url }, index) => {
              return (
                <a
                  key={index}
                  href={url}
                  target="_blank"
                  className={`${icon} bg-white text-red hvr-pulse`}
                ></a>
              );
            })}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Footer;
