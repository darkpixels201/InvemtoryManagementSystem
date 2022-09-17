import { CCardTitle } from "@coreui/react";
import React from "react";
import { BsPlusLg } from "react-icons/bs";
import { Link } from "react-router-dom";

function CustomHeader({ title, buttonName, linkTo }) {
  return (
    <div>
        <div className="d-flex flex-row justify-content-between">
      <div>
        <CCardTitle className="fs-2 mt-2 mb-0 fw-light">{title}</CCardTitle>
      </div>
      {buttonName ? (
        <div className="">
            <Link to={linkTo}>
        <button type="button" className="text-light bg-secondary rounded" style={{width: 200, height: 50 }}>
          {" "}
          <BsPlusLg style={{ marginRight: 15 }} />
          {buttonName}
        </button>
        </Link>
      </div>
      ) : ("")}
      </div>
      
      <hr
        style={{
          background: "grey",
          color: "grey",
          borderColor: "grey",
          height: "3px",
        }}
      />
    </div>
  );
}

export default CustomHeader;
