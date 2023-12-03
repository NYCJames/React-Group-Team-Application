import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";

function Root({ selectedTeam, teamMemberCount }) {
  return (
    <>
      <NavBar></NavBar>
      <Header
        selectedTeam={selectedTeam}
        teamMemberCount={teamMemberCount}
      ></Header>
      {/* <Content></Content> */}
      {/* <Employees
            employeeList={employeeList}
            handleSelectCard={handleSelectCard}
            handleTeamSelectionChange={handleTeamSelectionChange}
            selectedTeam={selectedTeam}
            // setSelectedTeam={setSelectedTeam}
            employees={employees}
            // setEmployees={setEmployees}
          ></Employees> */}
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
}

export default Root;
