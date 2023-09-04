import { numberWithCommas } from "@/lib/utils";
import { ChartTooltip } from "./ChartTooltip";

interface BasicBarTooltipProps {
  id: React.ReactNode;
  value?: number | string | Date;
  color: string;
  indexValue: string | number;
  enableChip?: boolean;
}

interface CustomBarTooltipProps {
  data: BasicBarTooltipProps;
  byIndex?: boolean;
  isPercent?: boolean;
  anchor?: "top" | "bottom" | "left" | "right" | "center";
}

export const CustomBarTooltip = ({
  data,
  byIndex,
  isPercent,
  anchor,
}: CustomBarTooltipProps): JSX.Element => {
  const { color, value, id, indexValue, enableChip } = data;
  const tAnchor = anchor ? anchor : "top";
  const text =
    value !== undefined
      ? `${
          byIndex
            ? indexValue.toString().toUpperCase()
            : id?.toString().toUpperCase()
        }: ${numberWithCommas(value.toString())}`
      : "Undefined";

  return (
    <ChartTooltip
      text={text}
      color={color}
      isPercent={isPercent}
      anchor={tAnchor}
      enableChip={enableChip}
    />
  );
};
