import React from "react";

function ActionComponent(props) {
  return (
    <div className="row w-100 mx-auto border-bottom border-light mb-3">
      <div className="col-1">
        <p className="text-light">{props.skill.level}</p>
      </div>
      <div className="col-5">
        <p className="text-light">{props.skill.name}</p>
      </div>
      <div className="col-2">
        <p className="text-light">{props.skill.experience}</p>
      </div>
      <div className="col-2">
        <p className="text-light">
          {Math.ceil(props.expNeeded / props.skill.experience)}
        </p>
      </div>
      <div className="col-2">
        {/* <p className="text-light">{props.skill.link}</p> */}
        <a href={props.skill.link} target="_blank" className="text-light">
          info
        </a>
      </div>
    </div>
  );
}

export default ActionComponent;
