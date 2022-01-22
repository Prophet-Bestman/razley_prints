import Link from "next/link";
import React from "react";

const ServiceCardTwo = ({ data }) => {
  const { image, title, text, url } = data;
  return (
    <div className="single-service-three">
      <div className="img-box">
        <img src={image} alt={title} />
      </div>
      <div className="text-box hvr-bounce-to-bottom">
        <p href={url}>
          <a>
            <h3>{title}</h3>
          </a>
        </p>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default ServiceCardTwo;
