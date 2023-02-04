import ChartTooltip from "../elements/ChartTooltip.js";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Cell, Tooltip, LabelList } from "recharts";
import { useState } from "react";
import "./ScrollableBarChart.scss";

const CustomizedTick = ({ x, y, payload }) => {
  console.log(x);
  return (
    <text type="category" dx={x - 30} y={y - 30} className="scrollable-bar-chart__custom-tick" textAnchor="start">
      <tspan x="52" dy="0.355em">
        {payload.value}
      </tspan>
    </text>
  );
};

function ScrollableBarChart({ data }) {
  const size = Object.keys(data).length;
  let customHeight = 87 * size;
  return (
    <div className="scrollable-bar-chart__scroll-wrapper">
      <ResponsiveContainer width="100%" height={customHeight}>
        <BarChart data={data} layout={"vertical"} barSize={30} reverseStackOrder="false" margin={{ top: 20, right: 50, left: 20 }}>
          <YAxis type="category" dataKey="name" axisLine={false} tick={<CustomizedTick />} tickLine={false} width={1} />
          <XAxis type="number" hide />
          <Tooltip content={<ChartTooltip />} cursor={false} outline={"none"} />
          <Bar dataKey="percentage" className="scrollable-bar-chart__bar">
            {data.map((entry, index) => (
              <Cell fill={entry.fillColor} key={index} className="scrollable-bar-chart__cell" />
            ))}
            <LabelList dataKey="percentage" position="right" formatter={(value) => value + "%"} className="scrollable-bar-chart__custom-label" />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default ScrollableBarChart;
