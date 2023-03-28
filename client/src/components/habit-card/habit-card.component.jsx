import React from "react";

const HabitCard = (props) => {
  return (
    <div className="habit-card">
      <h3>{props.description}</h3>
      <h4>{props.type}</h4>
    </div>
  )
}

export default HabitCard;
