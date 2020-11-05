import "./App.css";
import experience from "./levels";
import skills from "./skills";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import ActionComponent from "./components/action";

function App() {
  const [targetExp, setTargetExp] = useState(83);
  const [currentExp, setCurrentExp] = useState(0);
  const [currentSkill, setCurrentSkill] = useState("agility");
  const [usedSkillActions, setUsedSkillActions] = useState([]);

  let xp = experience;
  let exp = Object.keys(xp);
  let skillNames = Object.keys(skills);

  const targetLevelChange = (level) => {
    console.log(level);
    setTargetExp(xp[level]);
    console.log(targetExp);
  };

  const changeCurrentExp = (exp) => {
    console.log(exp);
    setCurrentExp(exp);
  };

  const changeSkill = (skill) => {
    setCurrentSkill(skill);
    setUsedSkillActions(skills[skill]);
  };

  if (currentExp.toString().includes(".")) {
    window.alert("you a bitch");
    let str = currentExp.toString();
    let i = str.indexOf(".");
    let str2 = str.substring(0, i);
    setCurrentExp(parseInt(str2));
  }

  return (
    <div className="App container-fluid text-light">
      <header className="App-header pt-5">
        <p className="mb-3">Experience Calculator</p>
      </header>
      <div className="row w-100">
        <div className="col-12 col-md-8 col-lg-5 mx-auto card shadow text-light align-items-center p-4 bg-dark">
          <select
            className="form-control w-50 text-center mb-4"
            value={currentSkill}
            onChange={(e) => changeSkill(e.target.value)}
          >
            {skillNames.map(function (key) {
              return <option value={key}>{key}</option>;
            })}
          </select>

          <h5>Current Experience</h5>
          <input
            type="number"
            step="1"
            min="0"
            max="200000000"
            className="form-control w-50 text-center mb-3"
            value={currentExp}
            onChange={(e) => changeCurrentExp(e.target.value)}
          />

          <h5>Target Level</h5>
          <select
            className="form-control w-25 text-center mb-4"
            onChange={(e) => targetLevelChange(e.target.value)}
          >
            {exp.map(function (exp) {
              return <option value={exp}>{exp}</option>;
            })}
          </select>

          <h5 className="border-top border-light w-50 pt-3">
            Experience Needed
          </h5>
          <input
            type="number"
            value={targetExp - currentExp}
            className="form-control w-50 text-center mb-3 shadow"
            disabled
          />
        </div>
      </div>
      <div className="row w-100">
        <div className="col-12 col-md-8 mx-auto card shadow p-4 bg-dark mt-3">
          <div className="row w-100 mx-auto border-bottom border-light mb-3">
            <div className="col-1">
              <p className="text-light">
                <b>Level</b>
              </p>
            </div>
            <div className="col-5">
              <p className="text-light">
                <b>Name</b>
              </p>
            </div>
            <div className="col-2">
              <p className="text-light">
                <b>Exp Gained</b>
              </p>
            </div>
            <div className="col-2">
              <p className="text-light">
                <b>Actions</b>
              </p>
            </div>
            <div className="col-2">
              <p className="text-light">
                <b>Link</b>
              </p>
            </div>
          </div>
          {usedSkillActions.map(function (skill) {
            return (
              // <div className="row w-100">
              //   <h4 className="text-light">
              //     {skill.name} | Level Req: {skill.level} | Exp Gained:{" "}
              //     {skill.experience}
              //   </h4>
              // </div>
              <ActionComponent
                skill={skill}
                expNeeded={targetExp - currentExp}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
