import { Mapbox, Tabs, TabsContent, TabsList, TabsTrigger } from "@/components";

export function MapPanel() {
  const tab = [
    { value: "1", label: "COAL PLANT STATUS" },
    { value: "2", label: "PHASE-OUT STATUS" },
    { value: "3", label: "NO NEW COAL STATUS" },
  ];

  return (
    <div className="px-8">
      <Tabs defaultValue="1" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          {tab.map((e) => (
            <TabsTrigger key={e.value} value={e.value}>
              {e.label}
            </TabsTrigger>
          ))}
        </TabsList>

        {tab.map((e) => (
          <TabsContent key={e.value} value={e.value}>
            <Mapbox>
              <span>{e.label}</span>
            </Mapbox>
          </TabsContent>
        ))}
      </Tabs>

      <p className="pt-6 text-xs leading-[18px]">
        The Bloomberg Global Coal Countdown provides data on coal capacity and
        phase-out journey around the world. The <b>Coal Plant Status</b> map shows
        all existing coal plants of 30 MW or larger, as well as every plant proposed,
        by their operational status since January 1, 2010. The&nbsp;
        <b>Phase-Out Status</b> map shows the phase-out commitments of individual
        countries as of January 2023. The <b>No New Coal Status</b> map shows the no
        new coal commitments of individual countries as of January 2023.
      </p>

      <p className="pt-5 text-xs leading-[18px] text-gray-400/50">
        Data is provided by Global Energy Monitor, University of Maryland Center for
        Global Sustainability, and Powering Past Coal Alliance.
      </p>
    </div>
  );
}
