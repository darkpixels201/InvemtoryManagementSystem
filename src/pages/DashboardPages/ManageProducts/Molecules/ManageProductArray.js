import React, { useState } from "react";
// import ManageProducts from "../ManageProducts";

import {
  CAvatar,
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CCardImage,
} from "@coreui/react";
import { Image } from "react-bootstrap";
import CIcon from "@coreui/icons-react";
import "../../../../assets/css/style.css";
import { cilPeople } from "@coreui/icons";

import avatar1 from "../../../../assets/images/avatars/1.jpg";
import avatar2 from "../../../../assets/images/avatars/2.jpg";
import avatar3 from "../../../../assets/images/avatars/3.jpg";
import avatar4 from "../../../../assets/images/avatars/4.jpg";
import avatar5 from "../../../../assets/images/avatars/5.jpg";
import avatar6 from "../../../../assets/images/avatars/6.jpg";

import EditModal from "../../../../components/customComponents/EditModal";
import ViewModal from "../../../../components/customComponents/ViewModal";

import { BsTrash, BsPlusLg } from "react-icons/bs";

import { TiEdit } from "react-icons/ti";
import { FaEye } from "react-icons/fa";
import CustomText from "../../../../components/customComponents/CustomText";

function ManageProductArray({ item }) {
  const [eyeVisible, setEyeVisible] = useState(false);
  const [warnAlert, setWarnAlert] = useState(false);
  const [editVisible, setEditVisible] = useState(false);
  const [content, setContent] = useState("edit");
  const [deleteItem, setDeleteItem] = useState(item);

  // console.log("Item Product", item.id);

  function deleteHandler(id) {
    console.log("first", id);
    const newList = deleteItem.filter((items) => items.id !== id);
    setDeleteItem(newList);
  }

  return (
    // <div>
    <>
      <CTableRow v-for="item in tableItems">
        <CTableDataCell>
          <div>{item.id}</div>
        </CTableDataCell>
        <CTableDataCell className="text-center">
          <img
            className="rounded"
            style={{ height: 80, width: 80 }}
            size="xl"
            src={item.avatar.src}
          />
        </CTableDataCell>
        <CTableDataCell>
          <div>{item.user.name}</div>
        </CTableDataCell>
        <CTableDataCell className="text-center">
          <div>{item.user.stock}</div>
        </CTableDataCell>

        <CTableDataCell className="text-center">
          <div>{item.user.purchasePrice}</div>
        </CTableDataCell>

        <CTableDataCell className="text-center">
          <div>{item.user.salePrice}</div>
        </CTableDataCell>
        <CTableDataCell className="text-center">
          <div
            style={{
              color: item.user.status == "InActive" ? "red" : "green",
            }}
          >
            {item.user.status}
          </div>
        </CTableDataCell>
        <CTableDataCell className="text-center">
          <BsTrash
            className="cursor-pointer"
            color="red"
            onClick={() => {
              setWarnAlert(!warnAlert);
              deleteHandler(item.id);
            }}
          />
        </CTableDataCell>

        <CTableDataCell>
          <TiEdit
            className="cursor-pointer"
            size={"20"}
            style={{ marginLeft: 7 }}
            onClick={() => {
              setContent("edit");
              setEyeVisible(!eyeVisible);
            }}
          />
        </CTableDataCell>

        <CTableDataCell>
          <FaEye
            className="cursor-pointer"
            size={"20"}
            style={{ marginLeft: 10 }}
            onClick={() => {
              setContent("View");
              setEyeVisible(!eyeVisible);
            }}
          />
        </CTableDataCell>
      </CTableRow>

      {/* <CModal
        size="lg"
        visible={eyeVisible}
        onClose={() => setEyeVisible(false)}
      >
        <CModalHeader></CModalHeader>
        <CModalBody className="d-flex flex-wrap">
          <div className=" img-fluid  col-sm-6  align-self-center  ">
            <Image
              className="img-fluid mx-auto d-block "
              src={avatar6}
              rounded
            />
          </div>

          <div className="d-flex flex-wrap col-sm-6 align-items-left flex-column ">
            <CustomText
              marginBottom={15}
              fontWeight={"500"}
              fontSize={24}
              title={item.user.name}
            />

            <div className="d-flex flex-row  ">
              <CustomText title={"Sale Price:"} fontWeight={"600"} />
              <CustomText marginLeft={20} title={item.user.salePrice} />
            </div>

            <div className="d-flex flex-row ">
              <CustomText title={"Purchase:"} fontWeight={"600"} />
              <CustomText marginLeft={20} title={item.user.purchasePrice} />
            </div>

            <div className="d-flex flex-row ">
              <CustomText title={"Stock:"} fontWeight={"600"} />
              <CustomText marginLeft={20} title={item.user.stock} />
            </div>
          </div>
        </CModalBody>
        <CModalFooter>
          <CButton color="secondary" onClick={() => setEyeVisible(false)}>
            Close
          </CButton>
          <CButton color="primary">Save changes</CButton>
        </CModalFooter>
      </CModal> */}

      <CModal size={content == "edit" ? ("lg") : ("md")} visible={eyeVisible} onClose={() => setEyeVisible(false)}>
        {content == "edit" ? (
          <EditModal setEyeVisible={setEyeVisible} item={item} />
        ) : (
          <ViewModal setEyeVisible={setEyeVisible} />
        )}
      </CModal>
    </>
    // </div>
  );
}

export default ManageProductArray;
