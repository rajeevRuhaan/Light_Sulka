import React from "react";
import "./Prices.css";
import TableDesctop from "../components/TableDesctop";

import TableMobile from "../components/TableMobile";

const Prices = () => {
  return (
    <div className="example">
      <div className="mobile_only">
        <TableMobile />
      </div>
      <div className="desktop_only">
        <TableDesctop />
      </div>
    </div>
  );
};

export default Prices;
