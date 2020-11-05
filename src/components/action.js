import React from "react";

function ActionComponent(props) {
  return (
    <div className="row w-100 mx-auto border-bottom border-light mb-3">
      <div className="col-2">
        <p
          className={
            props.skill.level > props.currentLevel
              ? "text-danger"
              : "text-light"
          }
        >
          {props.skill.level}
        </p>
      </div>
      <div className="col-5">
        {/* <p className="text-light">{props.skill.name}</p> */}
        <a
          href={props.skill.link}
          target="_blank"
          rel="noreferrer"
          className={
            props.skill.level > props.currentLevel
              ? "text-danger"
              : "text-light"
          }
        >
          {props.skill.name}
        </a>
      </div>
      <div className="col-2">
        <p
          className={
            props.skill.level > props.currentLevel
              ? "text-danger"
              : "text-light"
          }
        >
          {props.skill.experience}
        </p>
      </div>
      <div className="col-3">
        <p
          className={
            props.skill.level > props.currentLevel
              ? "text-danger"
              : "text-light"
          }
        >
          {Math.ceil(props.expNeeded / props.skill.experience)}
        </p>
      </div>
    </div>
  );
}

export default ActionComponent;
