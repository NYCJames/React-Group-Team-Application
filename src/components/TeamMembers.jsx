import React from "react";
import TeamMemberCards from "./TeamMemberCards";

function TeamMembers({
  selectedTeam,
  employees,
  handleSelectCard,
  viteLogo,
  reactLogo,
}) {
  return employees.map(function (value) {
    return (
      <TeamMemberCards
        key={crypto.randomUUID()}
        handleSelectCard={handleSelectCard}
        viteLogo={viteLogo}
        reactLogo={reactLogo}
        selectedTeam={selectedTeam}
        value={value}
      ></TeamMemberCards>
    );
  });
}

export default TeamMembers;
