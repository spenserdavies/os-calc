import "./App.css";
import experience from "./levels";
import skills from "./skills";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";
import ActionComponent from "./components/action";

function App() {
  let xp = experience;
  let exp = Object.keys(xp);
  let skillNames = Object.keys(skills);

  const [currentLevel, setCurrentLevel] = useState(1);
  const [targetExp, setTargetExp] = useState(xp[currentLevel + 1]);
  const [currentExp, setCurrentExp] = useState(0);
  const [currentSkill, setCurrentSkill] = useState("agility");
  const [usedSkillActions, setUsedSkillActions] = useState(skills["agility"]);
  const [expNeeded, setExpNeeded] = useState(83);

  useEffect(() => {
    setExpNeeded(targetExp - currentExp);
  }, [currentExp, targetExp]);

  const targetLevelChange = (level) => {
    setTargetExp(xp[level]);
    setExpNeeded(targetExp - currentExp);
  };

  const changeCurrentExp = (exp) => {
    if (parseInt(exp) <= 13034431) {
      setCurrentExp(exp);

      for (let i = 1; i < 100; i++) {
        if (exp >= xp[i] && exp < xp[i + 1]) {
          setCurrentLevel(i);
        }
      }
      if (targetExp < currentExp) {
        setTargetExp(xp[currentLevel + 1]);
      }
      setExpNeeded(targetExp - exp);
    }
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
          {/* <h1 className="text-light">{currentLevel}</h1> */}
          <select
            className="form-control w-50 text-center mb-4"
            value={currentSkill}
            onChange={(e) => changeSkill(e.target.value)}
          >
            {skillNames.map(function (key) {
              return (
                <option value={key} key={key}>
                  {key}
                </option>
              );
            })}
          </select>

          <h5>Current Experience</h5>
          <input
            type="number"
            step="1"
            min="0"
            max="13034430"
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
              if (parseInt(exp) > currentLevel) {
                return (
                  <option key={exp} value={exp}>
                    {exp}
                  </option>
                );
              } else {
                return;
              }
            })}
          </select>

          <h5 className="border-top border-light w-50 pt-3">
            Experience Needed
          </h5>
          <input
            type="number"
            value={expNeeded}
            className="form-control w-50 text-center mb-3 shadow"
            disabled
          />
        </div>
      </div>
      <div className="text-light">
        CurrentExp: {currentExp} <br />
        CurrentLevel: {currentLevel}
        <br />
        TargetExp: {targetExp}
        <br />
        ExpNeeded: {expNeeded}
      </div>
      <div className="row w-100">
        <div className="col-12 col-md-8 mx-auto card shadow p-4 bg-dark mt-3">
          <div className="row w-100 mx-auto border-bottom border-light mb-3">
            <div className="col-2">
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
            <div className="col-3">
              <p className="text-light">
                <b>Actions Left</b>
              </p>
            </div>
          </div>
          {usedSkillActions.map(function (skill) {
            return (
              <ActionComponent
                key={skill.name}
                skill={skill}
                expNeeded={targetExp - currentExp}
                currentLevel={currentLevel}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
