import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return (
    <img
      className="avatar"
      src="img/oagf.jpg"
      alt="Octavia Alexandra García Figuereo"
    />
  );
}

function Intro() {
  return (
    <div>
      <h1>Octavia García</h1>
      <p>
        Programming beginner. Learning what's needed to become a Fronted
        Developer.
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      <Skill skill="HTML & CSS" color="orange" />
      <Skill skill="JavaScript" color="yellow" />
      <Skill skill="React" color="blue" />
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.skill}</span>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
