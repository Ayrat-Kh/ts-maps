import React, { OlHTMLAttributes } from "react";
import * as ol from 'ol';

const MapContext = React.createContext<{ map?: ol.Map }>({ map: undefined });

export default MapContext;