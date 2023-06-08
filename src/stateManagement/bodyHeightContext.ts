import React from "react";

interface BodyHeight {
    bodyHeight:number;
}

const BodyHeightContext = React.createContext<BodyHeight>({} as BodyHeight);

export default BodyHeightContext