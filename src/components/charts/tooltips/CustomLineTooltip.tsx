import { Point } from "@nivo/line";
import { ChartTooltip } from "./ChartTooltip";

interface CustomLineTooltipProps {
  point: Point;
  byIndex?: boolean;
}

export const CustomLineTooltip = ({
  point,
  byIndex,
}: CustomLineTooltipProps): JSX.Element => {
  const { color, serieId, data } = point;
  const text = `${byIndex ? data.x : serieId.toString().toUpperCase()}: ${data.y}`;

  return <ChartTooltip text={text} color={color} />;
};
