import ChartTooltip from "../elements/ChartTooltip.js";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Cell, Tooltip } from "recharts";

function ScrollableBarChart({ data }) {
  const size = Object.keys(data).length;
  console.log(size);
  return (
    <div className="scroll-wrapper">
      <ResponsiveContainer width="100%" height={1200}>
        <BarChart data={data} layout={"vertical"} barGap={40} reverseStackOrder="false">
          <YAxis
            type="category"
            dataKey="name"
            axisLine={false}
            tickLine={false}
            tickMargin={10}
            width={250}
            style={{
              fontSize: "1rem",
              fontWeight: "bold",
            }}
          />
          <XAxis type="number" hide />
          <Tooltip content={<ChartTooltip />} cursor={false} outline={"none"} />
          <Bar dataKey="percentage">
            {data.map((entry, index) => (
              <Cell fill={entry.fillColor} key={index} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default ScrollableBarChart;
