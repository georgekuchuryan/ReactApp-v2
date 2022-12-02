import React from "react";
import styles from "./Timer.scss";
import { useState } from "react";

function Register() {
  const [seconds, setSeconds] = useState(0);
  setInterval(() => {
    setSeconds((seconds) => {
      return seconds + 1;
    });
  }, 1000);
  return (
    <div className="right-border">
      <h5>
        Current time:{" "}
        <span className="time">{new Date().toLocaleTimeString()}</span>{" "}
      </h5>
    </div>
  );
}

export default Register;
