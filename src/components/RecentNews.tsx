import { INews } from "@/interfaces";
import { News } from "./News";

interface RecentNewsProps {
  data: INews[];
}
export function RecentNews({ data }: RecentNewsProps) {
  return (
    <div className="sticky top-10 pl-5">
      <p className="text-brand tracking-[.25em] text-sm pb-5">RECENT NEWS</p>
      <div>
        {data.map((e, i) => (
          <News key={i} {...e} />
        ))}
      </div>
    </div>
  );
}
