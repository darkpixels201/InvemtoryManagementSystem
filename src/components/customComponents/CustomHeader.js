import { CCardTitle } from "@coreui/react";
import React from "react";
import { Col } from "react-bootstrap";
import { BsPlusLg } from "react-icons/bs";
import { Link } from "react-router-dom";
import CustomSearchFilter from "./CustomSearchFilter";

function CustomHeader(props) {
  return (
    <div style={{ padding: 15, }}>
      <div className="d-flex flex-row flex-wrap" style={{display:"flex", flexDirection:"row", flexWrap:"wrap"}}>
        <Col xs={3}>
          <CCardTitle className="fs-2 mt-2 mb-0 fw-light">
            {props.title}
          </CCardTitle>
        </Col>
        {props.buttonName ? (
          <Col xs={5}>
            <Link to={props.linkTo}>
              <button
                type="button"
                className="text-light br-50"
                style={{
                  width: 200,
                  height: 50,
                  borderRadius: 50,
                  background: "linear-gradient(#0077b6 ,#0096c7, #48cae4)",
                  boxShadow: "2px 2px 10px #0096c7",
                }}
              >
                {" "}
                <BsPlusLg style={{ marginRight: 15 }} />
                {props.buttonName}
              </button>
            </Link>
          </Col>
        ) : (
          ""
        )}

        <Col>
          {props.search ? (
            <CustomSearchFilter
              placeholder={"Search Product"}
              onChange={props.filterBySearch}
            />
          ) : null}
        </Col>
      </div>

      {props.line ? (
        <hr
          style={{
            background: "grey",
            color: "grey",
            borderColor: "grey",
            height: "3px",
          }}
        />
      ) : null}
    </div>
  );
}

export default CustomHeader;
