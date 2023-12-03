import React from "react";

function TeamMemberCards({
  selectedTeam,
  handleSelectCard,
  viteLogo,
  reactLogo,
  value,
}) {
  return (
    <div
      key={value.id}
      id={value.id}
      className={
        value.teamName === selectedTeam ? "card m-2 standout" : "card m-2"
      }
      style={{ cursor: "pointer" }}
      onClick={handleSelectCard}
    >
      <img
        src={value.gender === "male" ? viteLogo : reactLogo}
        width="200"
        height="200"
        className="card-img-top"
      ></img>

      <div className="card-body">
        <h5 className="card-title">{value.fullName}</h5>
        <p className="card-text">{value.designation}</p>
      </div>
    </div>
  );
}

export default TeamMemberCards;
