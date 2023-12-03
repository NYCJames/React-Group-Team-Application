// import { useState } from "react";
import reactLogo from "../assets/react.svg";
import TeamMembers from "./TeamMembers";
import TeamsDropdown from "./TeamsDropdown";
import viteLogo from "/vite.svg";
import "bootstrap/dist/css/bootstrap.css";

function Employees({
  employeeList,
  handleSelectCard,
  handleTeamSelectionChange,
  selectedTeam,
  employees,
}) {
  return (
    <>
      <main className="container">
        <h1>Employees Test</h1>
        <div className="row justify-content-center mt-3 mb-3">
          <div className="col-6">
            <TeamsDropdown
              selectedTeam={selectedTeam}
              handleTeamSelectionChange={handleTeamSelectionChange}
            ></TeamsDropdown>
          </div>
          <div className="col-8">
            <div className="card-collection">
              <TeamMembers
                employees={employees}
                reactLogo={reactLogo}
                viteLogo={viteLogo}
                selectedTeam={selectedTeam}
                handleSelectCard={handleSelectCard}
              ></TeamMembers>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Employees;
