import React, { useState } from "react";

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
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import "../../../assets/css/style.css";
import { cilPeople } from "@coreui/icons";

import avatar1 from "../../../assets/images/avatars/1.jpg";
import avatar2 from "../../../assets/images/avatars/2.jpg";
import avatar3 from "../../../assets/images/avatars/3.jpg";
import avatar4 from "../../../assets/images/avatars/4.jpg";
import avatar5 from "../../../assets/images/avatars/5.jpg";
import avatar6 from "../../../assets/images/avatars/6.jpg";

import { BsTrash, BsPlusLg } from "react-icons/bs";
import { TiEdit } from "react-icons/ti";
import { FaEye } from "react-icons/fa";
import { Button } from "react-bootstrap";
import CustomHeader from "../../../components/customComponents/CustomHeader";
import EditModal from "../../../components/customComponents/EditModal";
import ViewModal from "../../../components/customComponents/ViewModal";
import SweetAlert from "react-bootstrap-sweetalert";
import ManageProductArray from "./Molecules/ManageProductArray";
import CustomSearchFilter from "../../../components/customComponents/CustomSearchFilter";
import CustomTableHeader from "../../../components/customComponents/CustomTableHeader";

function ManageProducts() {
  // Sample how to write Icons in Array
  // payment: { name: "Mastercard", Icon:<BsTrash color="red"/> },
  // activity: {Icon: <TiEdit />},

  // console.log("Table ID", tableid)

  const tableExample = [
    {
      id: 1,
      avatar: { src: avatar1, status: "success" },
      user: {
        name: "Yiorgos Avraamu",
        stock: 5,
        purchasePrice: 100,
        salePrice: 200,
        status: "Active",
        new: true,
        registered: "Jan 1, 2021",
      },
      // stock: { name: "USA" },

      payment: { name: "Mastercard", Icon: <BsTrash color="red" /> },
      activity: { Icon: <TiEdit /> },
    },
    {
      id: 2,
      avatar: { src: avatar2, status: "danger" },
      user: {
        name: "Avram Tarasios Avram Tarasios",
        stock: 5,
        purchasePrice: 100,
        salePrice: 200,
        status: "Active",
        new: false,
        registered: "Jan 1, 2021",
      },
      // stock: { name: "Brazil", flag: cifBr },

      payment: { name: "Visa", Icon: <BsTrash color="red" /> },
      activity: "5 minutes ago",
    },
    {
      id: 3,
      avatar: { src: avatar3, status: "warning" },
      user: {
        name: "Quintin Ed",
        stock: 5,
        purchasePrice: 100,
        salePrice: 200,
        status: "InActive",
        new: true,
        registered: "Jan 1, 2021",
      },
      // stock: { name: "India", flag: cifIn },

      payment: { name: "Stripe", Icon: <BsTrash color="red" /> },
      activity: "1 hour ago",
    },
    {
      id: 4,
      avatar: { src: avatar4, status: "secondary" },
      user: {
        name: "Enéas Kwadwo",
        stock: 5,
        purchasePrice: 100,
        salePrice: 200,
        status: "Active",
        new: true,
        registered: "Jan 1, 2021",
      },
      // stock: { name: "France", flag: cifFr },

      payment: { name: "PayPal", Icon: <BsTrash color="red" /> },
      activity: "Last month",
    },
    {
      id: 5,
      avatar: { src: avatar5, status: "success" },
      user: {
        name: "Agapetus Tadeáš",
        stock: 5,
        purchasePrice: 100,
        salePrice: 200,
        status: "InActive",
        new: true,
        registered: "Jan 1, 2021",
      },
      // stock: { name: "Spain", flag: cifEs },

      payment: { name: "Google Wallet", Icon: <BsTrash color="red" /> },
      activity: "Last week",
    },
    {
      id: 6,
      avatar: { src: avatar6, status: "danger" },
      user: {
        name: "Friderik Dávid",
        stock: 5,
        purchasePrice: 100,
        salePrice: 200,
        status: "Active",
        new: true,
        registered: "Jan 1, 2021",
      },
      // email: { name: "Poland", flag: cifPl },

      payment: { name: "Amex", Icon: <BsTrash color="red" /> },
      activity: "Last week",
    },
  ];

  // const [search, setSearch] = useState("");
  // const [filterList, setFilterList] = useState(tableExample);

  const [filteredList, setFilteredList] = new useState(tableExample);

  const filterBySearch = (event) => {
    const query = event.target.value;
    var updatedList = [...tableExample];
    updatedList = updatedList.filter((item) => {
      return item.user.name.toLowerCase().indexOf(query.toLowerCase()) !== -1;
    });
    setFilteredList(updatedList);
  };

  return (
    <>
      <CustomHeader
        data-coreui-toggle="modal"
        data-coreui-target="#exampleModal"
        title={"Product List"}
        buttonName={"Add Product"}
      />

      {/* <SweetAlert
        // visible={eyeVisible}
        // onClose={() => setWarnAlert(false)}
        visible={warnAlert}
        warning
        showCancel
        confirmBtnText="Yes, delete it!"
        confirmBtnBsStyle="danger"
        title="Are you sure?"
        onConfirm={console.log("Deleted")}
        onClose={() => setWarnAlert(false)}
        focusCancelBtn
      >
        You will not be able to recover this imaginary file!
      </SweetAlert> */}

      <CRow className="">
        <CCol xs>
          <CCard className="mb-4 shadow"  >
            <CCardHeader>
              <CustomSearchFilter
                placeholder={"Search Products"}
                onChange={filterBySearch}
              />
            </CCardHeader>
            {/* <CCardBody> */}
            <CCard >
              <CTable align="middle" className="mb-0 border"  hover responsive >
                <CustomTableHeader
                  id={"#"}
                  image={"Image"}
                  name={"Name"}
                  stock={"stock"}
                  salePrice={"Sale Price"}
                  purchasePrice={"Purchase Price"}
                  status={"Status"}
                  delete={"Delete"}
                  edit={"Edit"}
                  view="View"
                />
                <CTableBody>
                  {filteredList.map((item, index) => (
                    <ManageProductArray key={index} item={item} />
                  ))}
                </CTableBody>
              </CTable>
              </CCard>
            {/* </CCardBody> */}
          </CCard>
        </CCol>
      </CRow>
    </>
  );
}

export default ManageProducts;
