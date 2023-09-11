"use client";

import { MouseEventHandler, RefObject, useCallback, useRef } from "react";
import { MapRef } from "react-map-gl";
import { ChevronLeft, ChevronUp } from "lucide-react";

import {
  Sheet as SheetRoot,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import { cn } from "@/lib/utils";

type SheetProps = {
  open: boolean;
  setOpen: (isOpen: boolean) => void;
  mapRef: RefObject<MapRef>;
};

export function Sheet({ open, setOpen, mapRef }: SheetProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const onDismiss = useCallback(() => {
    setOpen(false);
    mapRef.current?.flyTo({
      animate: true,
      center: [118.2140225, -3.4033767],
      zoom: 4,
    });
  }, [mapRef, setOpen]);

  return (
    <SheetRoot open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild></SheetTrigger>
      <SheetContent
        ref={scrollRef}
        className="w-[50%] overflow-y-auto scroll-smooth bg-white px-[60px] py-[45px]"
        side="left"
        onCloseAutoFocus={onDismiss}
      >
        <BackButton className="mb-4" onClick={() => setOpen(false)} />

        <section className="grid gap-4">
          <h1 className="mb-6 pl-[60px] text-7xl font-bold dark:text-black">
            Jakarta
          </h1>

          <div className="grid grid-cols-2 gap-4">
            <h4 className="mb-6 pl-[60px] text-lg font-bold dark:text-black">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis harum
              repellat incidunt aut sit eaque temporibus, hic aperiam nisi laboriosam
              mollitia facere explicabo? Pariatur, temporibus.
            </h4>
            <h4 className="mb-6 pl-[30px] text-lg font-bold dark:text-black">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat
              architecto, temporibus cupiditate cum iusto deleniti illo rem quisquam
              dolorum enim ducimus? Nesciunt, ipsum!
            </h4>
          </div>

          <div className="mb-6 grid grid-cols-2 gap-4 pl-[60px]">
            {[
              { title: "942 €mln", subtitle: "Ordinary EBITDA" },
              { title: "2,49 €mln", subtitle: "CAPEX" },
              { title: "2,100", subtitle: "Employees" },
              {
                title: "23.39 TWh",
                subtitle: "Net renewable electricity generation",
              },
              {
                title: "9,532 MW",
                subtitle: "Net efficient installed renewable capacity",
              },
            ].map((item, i) => (
              <SectionItem key={i} {...item} />
            ))}
          </div>

          <div className="grid grid-cols-2 gap-4">
            <h4 className="mb-6 pl-[60px] text-lg font-bold dark:text-black">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis harum
              repellat incidunt aut sit eaque temporibus, hic aperiam nisi laboriosam
              mollitia facere explicabo? Pariatur, temporibus.
            </h4>
            <h4 className="mb-6 pl-[30px] text-lg font-bold dark:text-black">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat
              architecto, temporibus cupiditate cum iusto deleniti illo rem quisquam
              dolorum enim ducimus? Nesciunt, ipsum!
            </h4>
          </div>

          <div className="mb-6 grid grid-cols-2 gap-4 pl-[60px]">
            {[
              { title: "942 €mln", subtitle: "Ordinary EBITDA" },
              { title: "2,49 €mln", subtitle: "CAPEX" },
              { title: "2,100", subtitle: "Employees" },
              {
                title: "23.39 TWh",
                subtitle: "Net renewable electricity generation",
              },
              {
                title: "9,532 MW",
                subtitle: "Net efficient installed renewable capacity",
              },
            ].map((item, i) => (
              <SectionItem key={i} {...item} />
            ))}
          </div>

          <div className="grid grid-cols-2 gap-4">
            <h4 className="mb-6 pl-[60px] text-lg font-bold dark:text-black">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis harum
              repellat incidunt aut sit eaque temporibus, hic aperiam nisi laboriosam
              mollitia facere explicabo? Pariatur, temporibus.
            </h4>
            <h4 className="mb-6 pl-[30px] text-lg font-bold dark:text-black">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat
              architecto, temporibus cupiditate cum iusto deleniti illo rem quisquam
              dolorum enim ducimus? Nesciunt, ipsum!
            </h4>
          </div>

          <div
            className="relative ml-auto flex cursor-pointer flex-col items-center gap-2"
            onClick={() => scrollRef.current?.scrollTo(0, 0)}
          >
            <div className="flex h-11 w-11 items-center justify-center gap-3 rounded-[44px] bg-[#EFF2F6]">
              <ChevronUp color="black" />
            </div>
            <span className="text-xs uppercase dark:text-black">back to top</span>
          </div>
        </section>
        <SheetFooter>
          <SheetClose asChild>Close</SheetClose>
        </SheetFooter>
      </SheetContent>
    </SheetRoot>
  );
}

type ISectionItem = { title: string; subtitle: string };
function SectionItem({ title, subtitle }: ISectionItem) {
  return (
    <div className="flex items-start gap-3">
      <Image
        src="https://beyondreporting.enel.com/content/dam/enel-beyondreporting/homepage/ita/map/Cursore.svg"
        alt=""
      />
      <div className="text-blue-700">
        <span className="text-[26px] font-bold leading-[30px]">{title}</span>
        <p className="text-xs font-bold">{subtitle}</p>
      </div>
    </div>
  );
}

type IBackButton = {
  className?: string;
  id?: string;
  onClick?: MouseEventHandler<HTMLDivElement>;
};
function BackButton({ className, id, onClick }: IBackButton) {
  return (
    <div
      id={id}
      className={cn("flex w-full cursor-pointer items-center", className)}
      onClick={onClick}
    >
      <div className="flex h-11 w-11 items-center justify-center rounded-[44px] bg-[#EFF2F6]">
        <ChevronLeft color="black" />
      </div>
      <span className="ml-4 text-xs uppercase dark:text-black">
        back to global view
      </span>
    </div>
  );
}
