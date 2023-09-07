"use client";

import { GlobalEmissionPathwaysColor } from "@/lib/constants";
import { EmissionPathways, IEmissionPathway } from "@/lib/sample-data";
import { ResponsiveLine } from "@nivo/line";
import { CustomLineTooltip } from "./tooltips";

const transformData = () => {
  return [
    { id: "No Action", key: "no_action" },
    { id: "Current", key: "current" },
    { id: "Target 1.5\u00B0", key: "target_1_5_deg" },
    { id: "Target 2\u00B0", key: "target_2_deg" },
  ].map((item) => ({
    id: item.id,
    _data: EmissionPathways.map((e) => ({
      x: e.year,
      y: e[item.key as keyof IEmissionPathway],
    })),
    get data() {
      return this._data;
    },
    set data(value) {
      this._data = value;
    },
  }));
};

export const GlobalEmissionPathways = (): JSX.Element => {
  return (
    <div className="mt-10">
      <h5 className="font-bold mb-3">Global Emission Reduction Scenarios</h5>
      <p className="text-xs text-gray-500 pb-4">
        GHG Emissions from Coal Plants (in GtCO2e)
      </p>

      <div className="w-full h-[400px]">
        <ResponsiveLine
          data={transformData()}
          margin={{ top: 50, bottom: 50, left: 40, right: 40 }}
          axisTop={null}
          tooltip={({ point }) => <CustomLineTooltip point={point} />}
          theme={{
            axis: { ticks: { text: { fontSize: "9px" } } },
            legends: { text: { fontSize: "9px" } },
          }}
          axisRight={null}
          colors={[
            GlobalEmissionPathwaysColor.no_action,
            GlobalEmissionPathwaysColor.current,
            GlobalEmissionPathwaysColor.target_1_5_deg,
            GlobalEmissionPathwaysColor.target_2_deg,
          ]}
          enableGridY={false}
          axisLeft={{
            tickPadding: 14,
          }}
          axisBottom={{
            tickValues: ["2010", "2020", "2030", "2040", "2050"],
            tickSize: 0,
            tickPadding: 8,
            tickRotation: 0,
            legendOffset: 36,
            legendPosition: "middle",
          }}
          pointSize={10}
          pointLabelYOffset={-12}
          useMesh={true}
          legends={[
            {
              anchor: "top-left",
              direction: "row",
              justify: false,
              translateX: -5,
              translateY: -30,
              itemsSpacing: 55,
              itemDirection: "left-to-right",
              itemWidth: 34,
              itemHeight: 20,
              itemOpacity: 0.75,
              symbolSize: 12,
              symbolShape: "circle",
              symbolBorderColor: "rgba(0, 0, 0, .5)",
            },
          ]}
        />
      </div>
    </div>
  );
};
