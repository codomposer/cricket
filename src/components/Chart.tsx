import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

const Chart = () => {
  const COLORS = ["#FFBD4A", "#008A81"];
  const pieData = [
    {
      name: "Kings XI Punjab",
      value: 33.7,
    },
    {
      name: "Delhi Capitals",
      value: 66.3,
    },
  ];

  //  @ts-ignore
  const CustomTooltip = ({ active, payload, label }) => {
    if (active) {
      return (
        <div
          className="custom-tooltip"
          style={{
            backgroundColor: "#000",
            color: "#fff",
            borderRadius: "5px",
            paddingBottom: "3px",
          }}
        >
          <label className="font-normal text-xs px-3">{`${payload[0].value}%`}</label>
        </div>
      );
    }
    return null;
  };

  return (
    <div>
      <PieChart width={730} height={300}>
        <Pie
          data={pieData}
          color="#000000"
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={120}
          fill="#8884d8"
        >
          {pieData.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={COLORS[index % COLORS.length]}
            />
          ))}
        </Pie>
        {/* @ts-ignore */}
        <Tooltip content={<CustomTooltip />} />
        <Legend />
      </PieChart>
    </div>
  );
};

export default Chart;
