import React from "react";
import "./ChartTooltip.scss";
const ChartTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return <div className="custom-tooltip">{`${label} : ${payload[0].value}`}%</div>;
  }

  return null;
};

export default ChartTooltip;
