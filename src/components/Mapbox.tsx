export function Mapbox({ children }: { children?: React.ReactNode }) {
  return (
    <div className="w-full h-full">
      <div className="bg-blue-300/75 h-[430px] flex items-center justify-center">
        {children ? children : <span>MAPBOX</span>}
      </div>
    </div>
  );
}
