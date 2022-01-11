import { useContext, useEffect } from "react";
import MapContext from "contexts/map";
import OLTileLayer from "ol/layer/Tile";

export type TileLayerProps = {
    source: any;
    zIndex: number;
}

const TileLayer: React.FC<TileLayerProps> = ({ source, zIndex = 0 }) => {
  const { map } = useContext(MapContext); 
  useEffect(() => {
    if (!map) return;
    
    let tileLayer = new OLTileLayer({
      source,
      zIndex,
    });
    map.addLayer(tileLayer);
    tileLayer.setZIndex(zIndex);
    return () => {
      if (map) {
        map.removeLayer(tileLayer);
      }
    };
  }, [map]);
  return null;
};
export default TileLayer;