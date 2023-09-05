import { cn, numberWithCommas } from "@/lib/utils";
import { TiArrowSortedDown, TiArrowSortedUp, TiMinus } from "react-icons/ti";

enum ValueEnum {
  isPositive,
  isNegative,
  isNetral,
}

interface NetChangeInAYearProps {
  title: string;
  oldVal: number;
  newVal: number;
}
export function NetChangeInAYear({ title, oldVal, newVal }: NetChangeInAYearProps) {
  const netChange = ((newVal - oldVal) / oldVal) * 100;

  const statusValue =
    netChange < 0
      ? ValueEnum.isNegative
      : netChange > 0
      ? ValueEnum.isPositive
      : ValueEnum.isNetral;

  function getArrow() {
    switch (statusValue) {
      case ValueEnum.isPositive:
        return <TiArrowSortedUp />;
      case ValueEnum.isNegative:
        return <TiArrowSortedDown />;
      default:
        return null;
    }
  }

  function getColor() {
    switch (statusValue) {
      case ValueEnum.isPositive:
        return "text-[red]";
      case ValueEnum.isNegative:
        return "text-[#61D91C]";
      default:
        return "text-[#B4B7B7]";
    }
  }

  function getValuePercentage() {
    let str = "";
    if (statusValue == ValueEnum.isPositive) str += "+";
    str += numberWithCommas(netChange.toFixed(2));
    str += "%";
    return str;
  }

  return (
    <div className="">
      <h2 className="text-[42px] font-bold text-center">
        {numberWithCommas(newVal)}
      </h2>
      <p className="text-xs font-bold">{title}</p>
      <div className="flex items-center justify-evenly">
        <div className={cn("flex items-center mr-5", getColor())}>
          <div>{getArrow()}</div>
          <p>{getValuePercentage()}</p>
        </div>

        <p className="text-xs text-gray-800/50">Net Change in 1 Year</p>
      </div>
    </div>
  );
}
