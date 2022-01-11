import React, { useRef, useState, useEffect } from "react"
import MapContext from "contexts/map";
import * as olSource from "ol/source";

import * as ol from "ol";
import { Coordinate } from "ol/coordinate";

import "./map.css";
import TileLayer from "./TileLayer";

export type MapProps = {
    zoom?: number;
    center?: Coordinate;
};

const Map: React.FC<MapProps> = ({ children, zoom = 10, center }) => {
    const mapRef = useRef<HTMLDivElement>(null);
    const [map, setMap] = useState<ol.Map>();
    // on component mount
    useEffect(() => {
        const options = {
            view: new ol.View({ zoom, center }),
            layers: [],
            controls: [],
            overlays: []
        };

        const mapObject = new ol.Map(options);
        mapObject.setTarget(mapRef.current!);
        setMap(mapObject);

        return () => mapObject.setTarget(undefined);
    }, []);

    // zoom change handler
    useEffect(() => {
        if (!map) return;
        map.getView().setZoom(zoom);
    }, [zoom]);

    // center change handler
    useEffect(() => {
        if (!map || !center) return;
        map.getView().setCenter(center)
    }, [center]);

    return (
        <MapContext.Provider value={{ map }}>
            <div ref={mapRef} className="ol-map">
            <TileLayer
                source={new olSource.OSM()}
                zIndex={0}
                />
                {children}
            </div>
        </MapContext.Provider>
    )
}
export default Map;
