import React, { useState } from "react";

function GroupedTeamMembers({
  employees,
  selectedTeam,
  setSelectedTeam,
  teamMemberCount,
}) {
  // console.log(selectedTeam, teamMemberCount);

  const [groupedEmployees, setGroupedEmployees] = useState(
    groupTeamEmployees()
  );

  function handleGroupedTeamClick(event) {
    // console.log(event, event.currentTarget.id);
    const newGroupData = groupedEmployees.map(function (value) {
      return value.team === event.currentTarget.id
        ? { ...value, collapsed: !value.collapsed }
        : { ...value, collapsed: true };
    });

    // console.log(newGroupData);

    setGroupedEmployees(newGroupData);
    setSelectedTeam(event.currentTarget.id);
  }

  function groupTeamEmployees() {
    const output = [];
    const teamNamesMap = new Map();

    // console.log(employees);
    employees.map(function (value) {
      if (!teamNamesMap.get(value.teamName)) {
        // console.log(`adding new team`);
        teamNamesMap.set(value.teamName, [value]);
      } else {
        // console.log(`appending name`);
        const newArray = teamNamesMap.get(value.teamName);
        newArray.push(value);
        teamNamesMap.set(value.teamName, newArray);
      }
    });
    // console.log(teamNamesMap);

    const teamNames = teamNamesMap.keys();

    output.push(
      ...[...teamNames].map(function (value) {
        return {
          team: value,
          members: teamNamesMap.get(value),
          collapsed: selectedTeam === value ? false : true,
        };
      })
    );

    // console.log(output);

    return output;
  }

  return (
    <main className="container">
      {groupedEmployees.map(function (value) {
        // console.log(value);
        return (
          <div
            className="card mt-2"
            key={value.team}
            style={{ cursor: "pointer" }}
          >
            <h4
              id={value.team}
              className="card-header text-secondary bg-white"
              onClick={handleGroupedTeamClick}
            >
              Team Name: {value.team}
            </h4>
            <div
              id={`collapse_${value.team}`}
              className={value.collapsed === true ? "collapse" : ""}
            >
              <hr></hr>
              {value.members.map(function (item) {
                return (
                  <div key={item.id} className="mt-2">
                    <h5 className="card-title mt-2">
                      <span className="text-dark">
                        Full Name: {item.fullName}
                      </span>
                    </h5>
                    <p>Designation: {item.designation}</p>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </main>
  );
}

export default GroupedTeamMembers;
