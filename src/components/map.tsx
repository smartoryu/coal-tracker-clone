"use client";

import { RefObject, useCallback, useState } from "react";
import MapPrimitive, {
  CircleLayer,
  Layer,
  MapRef,
  Popup,
  Source,
} from "react-map-gl";

import "mapbox-gl/dist/mapbox-gl.css";
import { cn, font } from "@/lib/utils";

const FILTERED_COUNTRIES = ["US", "CO", "BR", "CL", "IT", "ID"];

const circleLayerProps: CircleLayer = {
  id: "data-driven-points",
  type: "circle",
  paint: {
    "circle-radius": 6,
    "circle-color": "#FFFFFF",
  },
};

type PopupInfo = {
  coordinates: number[];
  properties: { title: string; slug: string };
} | null;

const getPointFeatures = (cb: (feature: mapboxgl.MapboxGeoJSONFeature) => void) => {
  return (event: mapboxgl.MapLayerMouseEvent) => {
    const feature = event.features && event.features[0];
    if (feature) {
      cb(feature);
    }
  };
};

type MapProps = {
  setOpen: (open: boolean) => void;
  mapRef: RefObject<MapRef>;
};

function Map({ setOpen, mapRef }: MapProps) {
  const [cursor, setCursor] = useState<string>("auto");
  const [popupInfo, setPopupInfo] = useState<PopupInfo>(null);

  const onClick = getPointFeatures((feature) => {
    if (feature && feature.properties) {
      setOpen(true);
      mapRef.current?.flyTo({
        center: [106.816666, -6.2],
        animate: true,
        zoom: 8,
      });
    }
  });

  const onMouseEnter = getPointFeatures((feature) => {
    setCursor("pointer");
    if (feature.geometry.type === "Point" && feature.properties) {
      setPopupInfo({
        coordinates: feature.geometry.coordinates,
        //@ts-expect-error properties are fine
        properties: feature.properties,
      });
    }
  });

  const onMouseLeave = useCallback(() => {
    setCursor("auto");
    setPopupInfo(null);
  }, []);

  const setCursorAuto = useCallback(() => setCursor("auto"), []);
  const setCursorGrabbing = useCallback(() => setCursor("grabbing"), []);

  return (
    <MapPrimitive
      ref={mapRef}
      mapboxAccessToken="pk.eyJ1IjoiYnVrYW5hdmF0YXIiLCJhIjoiY2pwY2RnZzBtMGthMzNwcDhkYTluOTJkeCJ9.NEHAspoFr-xidb-xlTj7aQ"
      initialViewState={{
        longitude: 118.2140225,
        latitude: -3.4033767,
        zoom: 4,
      }}
      mapStyle="mapbox://styles/bukanavatar/clc8ujctk003q14p9kxqh4nyp"
      attributionControl={true}
      interactiveLayerIds={["data-driven-points"]}
      cursor={cursor}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onDragStart={setCursorGrabbing}
      onDragEnd={setCursorAuto}
      logoPosition="top-right"
    >
      <Source type="vector" url="mapbox://mapbox.country-boundaries-v1">
        <Layer
          id="country-boundaries"
          type="fill"
          source-layer="country_boundaries"
          paint={{
            "fill-color": "#6791E1",
          }}
          filter={["in", "iso_3166_1", ...FILTERED_COUNTRIES]}
        />
      </Source>
      <Source
        type="geojson"
        data={{
          type: "Feature",
          geometry: { type: "Point", coordinates: [106.816666, -6.2] },
          properties: { title: "Jakarta", slug: "jakarta" },
        }}
      >
        <Layer {...circleLayerProps} />
      </Source>
      {popupInfo ? (
        <Popup
          anchor="top"
          longitude={popupInfo.coordinates[0]}
          latitude={popupInfo.coordinates[1]}
          onClose={() => setPopupInfo(null)}
          className={cn(font.className, "w-32 dark:text-black")}
          offset={20}
          closeButton={false}
        >
          <div className="border-none px-4 py-3 text-center text-lg font-semibold">
            {popupInfo.properties.title}
          </div>
        </Popup>
      ) : null}
    </MapPrimitive>
  );
}

export { Map };
