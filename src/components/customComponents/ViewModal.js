import {
  CButton,
  CCardImage,
  CModalBody,
  CModalFooter,
  CModalTitle,
} from "@coreui/react";
import React from "react";
import { Image } from "react-bootstrap";
// import pratice from "../../assets/images/pratice";
import avatar6 from "../../assets/images/avatars/6.jpg";
// import avatar6 from "../../assets/images/avatars/6.jpg";

function ViewModal({ setEyeVisible, item }) {
  return (
    <div>
      <CModalBody className="d-flex flex-wrap">
        <div className=" img-fluid col-sm-6 align-self-center mx-auto d-block  ">
        <Image className="img-fluid" src={avatar6} rounded />
        </div>

        <div className="d-flex flex-wrap col-sm-6 align-items-left flex-column ">
          {/* <CModalTitle>item</CModalTitle> */}
          <CModalBody>nfjdlvafdnv djkfnkjdsbkjdbskb kdsbfbdsjkkdv bfkhbasdbfck asbkfasbkb  mavsfjhbsk,dskhj</CModalBody>
          <CModalTitle>{item.user.name}</CModalTitle>
          <CModalTitle>Purchase Price</CModalTitle>
          <CModalTitle>Stock</CModalTitle>
          <CModalTitle>Status</CModalTitle>
        </div>
      </CModalBody>
      <CModalFooter>
        <CButton color="secondary" onClick={() => setEyeVisible(false)}>
          Close
        </CButton>
        <CButton color="primary">Save changes</CButton>
      </CModalFooter>
    </div>
  );
}

export default ViewModal;

