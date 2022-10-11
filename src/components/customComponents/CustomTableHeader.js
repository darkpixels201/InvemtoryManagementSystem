import CIcon from "@coreui/icons-react";
import { CTableHead, CTableHeaderCell, CTableRow } from "@coreui/react";
import React from "react";

// {props.id ? () : (null)}

const CustomTableHeader = (props) => {
  return (
    <CTableHead style={{height: 50, backgroundColor:"#effbfd", boxShadow: "0.5px 0.5px 15px #48cae4",}} color="">
      <CTableRow align="middle" className="stick-top">
        {props.id ? <CTableHeaderCell>{props.id}</CTableHeaderCell> : null}

        {props.icon ? (
          <CTableHeaderCell className="text-center">
            {props.icon}
          </CTableHeaderCell>
        ) : null}

        {props.image ? (
          <CTableHeaderCell className="text-center">
            {props.image}
          </CTableHeaderCell>
        ) : null}

        {props.userName ? (
          <CTableHeaderCell>{props.userName}</CTableHeaderCell>
        ) : null}

        {props.name ? <CTableHeaderCell>{props.name}</CTableHeaderCell> : null}

        {props.discount ? <CTableHeaderCell className="text-center">{props.discount}</CTableHeaderCell> : null}

        {props.email ? (
          <CTableHeaderCell className="text-center">
            {props.email}
          </CTableHeaderCell>
        ) : null}

        {props.stock ? (
          <CTableHeaderCell className="text-center">
            {props.stock}
          </CTableHeaderCell>
        ) : null}

        {props.salePrice ? (
          <CTableHeaderCell className="text-center">
            {props.salePrice}
          </CTableHeaderCell>
        ) : null}

        {props.purchasePrice ? (
          <CTableHeaderCell className="text-center">
            {props.purchasePrice}
          </CTableHeaderCell>
        ) : null}

        {props.status ? (
          <CTableHeaderCell className="text-center">
            {props.status}
          </CTableHeaderCell>
        ) : null}

        {props.delete ? (
          <CTableHeaderCell className="text-center">
            {props.delete}
          </CTableHeaderCell>
        ) : null}

        {props.edit ? <CTableHeaderCell>{props.edit}</CTableHeaderCell> : null}

        {props.view ? <CTableHeaderCell>{props.view}</CTableHeaderCell> : null}
      </CTableRow>
    </CTableHead>
  );
};

export default CustomTableHeader;
