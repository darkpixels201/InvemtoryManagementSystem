import React from "react";
import BillTable from "./Molecules/BillTable";
import ProductTable from "./Molecules/ProductTable";

function PointOfSale() {
  return (
    <div style={{}}>
      <div
        style={{
          display: "flex",
          justifyContent:
            window.innerWidth <= 1500 ? "center" : "space-between",
          flexWrap: "wrap",
          
        }}
      >
        <ProductTable  />
        <BillTable style={{}} />
      </div>
    </div>
  );
}

export default PointOfSale;
