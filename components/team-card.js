import React from "react";

const TeamCard = ({ data }) => {
  const { name, designation, image, content } = data;
  return (
    <div className="single-team-carousel">
      <div className="inner row">
        <div className="img-box col-md-6 my-auto mx-auto">
          <img src={image} alt={name} />
        </div>
        <div className="team-content col-md-6">
          <div className="title">
            <span>{designation}</span>
            <h3>{name}</h3>
          </div>
          <p>{content}</p>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
