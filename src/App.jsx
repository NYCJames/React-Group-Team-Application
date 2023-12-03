// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import Employees from "./components/Employees";
import { useEffect, useState } from "react";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Root from "./Root";
import GroupedTeamMembers from "./GroupedTeamMembers";
import PageNotFound from "./PageNotFound";

function App() {
  const employeeList = [
    {
      id: 1,
      fullName: "Bob Jones",
      designation: "JavaScript Developer",
      gender: "male",
      teamName: "TeamA",
    },
    {
      id: 2,
      fullName: "Jill Bailey",
      designation: "Node Developer",
      gender: "female",
      teamName: "TeamA",
    },
    {
      id: 3,
      fullName: "Gail Shepherd",
      designation: "Java Developer",
      gender: "female",
      teamName: "TeamA",
    },
    {
      id: 4,
      fullName: "Sam Reynolds",
      designation: "React Developer",
      gender: "male",
      teamName: "TeamB",
    },
    {
      id: 5,
      fullName: "David Henry",
      designation: "DotNet Developer",
      gender: "male",
      teamName: "TeamB",
    },
    {
      id: 6,
      fullName: "Sarah Blake",
      designation: "SQL Server DBA",
      gender: "female",
      teamName: "TeamB",
    },
    {
      id: 7,
      fullName: "James Bennet",
      designation: "Angular Developer",
      gender: "male",
      teamName: "TeamC",
    },
    {
      id: 8,
      fullName: "Jessica Faye",
      designation: "API Developer",
      gender: "female",
      teamName: "TeamC",
    },
    {
      id: 9,
      fullName: "Lita Stone",
      designation: "C++ Developer",
      gender: "female",
      teamName: "TeamC",
    },
    {
      id: 10,
      fullName: "Daniel Young",
      designation: "Python Developer",
      gender: "male",
      teamName: "TeamD",
    },
    {
      id: 11,
      fullName: "Adrian Jacobs",
      designation: "Vue Developer",
      gender: "male",
      teamName: "TeamD",
    },
    {
      id: 12,
      fullName: "Devin Monroe",
      designation: "Graphic Designer",
      gender: "male",
      teamName: "TeamD",
    },
  ];

  const [selectedTeam, setSelectedTeam] = useState(
    JSON.parse(localStorage.getItem("selectedTeam")) || "TeamB"
  );
  const [employees, setEmployees] = useState(employeeList);

  useEffect(
    function () {
      localStorage.setItem("employeeList", JSON.stringify(employees));
    },
    [employees]
  );

  useEffect(
    function () {
      localStorage.setItem("selectedTeam", JSON.stringify(selectedTeam));
    },
    [selectedTeam]
  );

  function handleTeamSelectionChange(event) {
    // console.log(event.target.value);
    setSelectedTeam(event.target.value);
  }

  function handleSelectCard(event) {
    const transformedEmployees = employees.map(function (value) {
      // console.log(value.id === Number(event.currentTarget.id));
      // console.log(value.id);
      return value.id === parseInt(event.currentTarget.id)
        ? value.teamName === selectedTeam
          ? { ...value, teamName: "" }
          : { ...value, teamName: selectedTeam }
        : value;
    });
    // console.log(transformedEmployees);
    setEmployees(transformedEmployees);
    // add drop shadow

    // const testfunction2 = employees.map((value) =>
    //   value.id === parseInt(event.currentTarget.id)
    //     ? value.teamName === selectedTeam
    //       ? { ...value, teamName: "" }
    //       : { ...value, teamName: selectedTeam }
    //     : value
    // );
    // console.log(testfunction2);
  }

  function teamMemberCount() {
    return employees.reduce(function (prev, curr) {
      // console.log(prev, "+", curr);
      if (curr.teamName === selectedTeam) {
        return prev + 1;
      } else {
        return prev;
      }
    }, 0);
  }

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route
        path="/"
        element={
          <Root
            selectedTeam={selectedTeam}
            teamMemberCount={teamMemberCount()}
          ></Root>
        }
        errorElement={<PageNotFound></PageNotFound>}
      >
        <Route
          index
          element={
            <Employees
              // employeeList={employeeList}
              handleSelectCard={handleSelectCard}
              handleTeamSelectionChange={handleTeamSelectionChange}
              selectedTeam={selectedTeam}
              // setSelectedTeam={setSelectedTeam}
              employees={employees}
              // setEmployees={setEmployees}
            ></Employees>
          }
        ></Route>
        <Route
          path="GroupedTeamMembers"
          element={
            <GroupedTeamMembers
              employees={employees}
              selectedTeam={selectedTeam}
              setSelectedTeam={setSelectedTeam}
              teamMemberCount={teamMemberCount()}
            ></GroupedTeamMembers>
          }
        ></Route>
        {/* <Route path="*" element={<PageNotFound></PageNotFound>}></Route> */}
      </Route>
    )
  );

  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
