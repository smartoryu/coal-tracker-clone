import { cn } from "@/lib/utils";
import { useTheme } from "@nivo/core";
import { Chip, TooltipWrapper } from "@nivo/tooltip";

interface ChartTooltipProps {
  text: string;
  color: string;
  anchor?: "top" | "bottom" | "left" | "right" | "center";
  isPercent?: boolean;
  enableChip?: boolean;
}

export const ChartTooltip = ({
  text,
  color,
  anchor,
  isPercent,
  enableChip = true,
}: ChartTooltipProps): JSX.Element => {
  const theme = useTheme();
  const tooltipAnchor = anchor ? anchor : "top";

  return (
    <TooltipWrapper anchor={tooltipAnchor} position={[0, 0]}>
      <div className="shadow-sm">
        <div className="bg-white p-2 shadow-lg">
          <div style={theme.tooltip.basic}>
            {enableChip ? <Chip color={color} style={theme.tooltip.chip} /> : null}
            <span className={cn("text-xs font-bold", enableChip ? "ml-[2px]" : "")}>
              {text.replace(/_/g, " ")}
              {isPercent && "%"}
            </span>
          </div>
        </div>
      </div>
    </TooltipWrapper>
  );
};
