"use client";

import { STATUS_COLOR } from "@/lib/constants";
import { coal_plants_by_status } from "@/lib/sample-data";
import { numberWithCommas } from "@/lib/utils";
import { ResponsiveBar } from "@nivo/bar";
import { CustomBarTooltip } from "./tooltips";

export function GlobalCoalPlants() {
  const dataKeys = [
    "operational",
    "construction",
    "planned",
    "halted",
    "cancelled",
    "retired",
  ];

  const barData: { [key: string]: string | number }[] = [];
  dataKeys.forEach((key) => {
    barData.push({
      status: key.toString().toUpperCase(),
      color: STATUS_COLOR[key],
      value: coal_plants_by_status[key],
    });
  });

  return (
    <div className="mt-10">
      <h5 className="font-bold pb-4">
        Global Coal Plants and Development Pipeline by Status
      </h5>

      <div className="w-full h-[300px]">
        <ResponsiveBar
          data={barData}
          keys={["value"]}
          tooltip={(input) => {
            return <CustomBarTooltip data={input} byIndex />;
          }}
          indexBy="status"
          theme={{
            tooltip: { container: { padding: 0 } },
            axis: { ticks: { text: { fontSize: "9px" } } },
          }}
          margin={{ top: 20, right: 30, bottom: 44, left: 70 }}
          padding={0.3}
          layers={[
            "grid",
            "axes",
            "bars",
            "markers",
            "legends",
            "annotations",
            ({ bars }) => {
              return (
                <g>
                  {bars.map(({ width, x, y, data }, i) => {
                    return (
                      <text
                        key={i}
                        transform={`translate(${x + width / 4}, ${y - 10})`}
                        text-anchor="left"
                        dominant-baseline="central"
                        className="font-bold text-xs"
                      >
                        {numberWithCommas(data.value ?? 0)}
                      </text>
                    );
                  })}
                </g>
              );
            },
          ]}
          label={(d) => ""}
          valueScale={{ type: "linear" }}
          borderColor={{ from: "color", modifiers: [["darker", 1.6]] }}
          colors={(bar) => bar.data.color.toString()}
          axisTop={null}
          axisRight={null}
          axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            legendPosition: "middle",
            legendOffset: 32,
          }}
          axisLeft={{
            tickValues: [0, 1000, 2000],
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            format: (v) => `${v / 1000}K`,
            legend: "Capacity GW",
            legendPosition: "middle",
            legendOffset: -60,
          }}
          animate={true}
        />
      </div>
    </div>
  );
}
