import React from "react";

const GoogleMap = ({ extraClassName }) => {
  return (
    <div className={`google-map__${extraClassName}`}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.294972696198!2d7.483838514047612!3d9.036834191356213!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0bfaac5d5e69%3A0xefca904ceb6c5fdd!2sUTC%20Area%2010!5e0!3m2!1sen!2sng!4v1642732584896!5m2!1sen!2sng"
        title="template google map"
        className={`map__${extraClassName}`}
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default GoogleMap;
