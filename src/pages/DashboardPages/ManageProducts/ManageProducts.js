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
import "../../../assets/css/background.css";
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
import CustomButtonHeader from "../../../components/customComponents/CustomButtonHeader";
import {TableExample} from "../../../assets/ProductArray/TableExample";


function ManageProducts() {
  // Sample how to write Icons in Array
  // payment: { name: "Mastercard", Icon:<BsTrash color="red"/> },
  // activity: {Icon: <TiEdit />},

  // console.log("Table ID", tableid)



  // const [search, setSearch] = useState("");
  // const [filterList, setFilterList] = useState(tableExample);


  const [filteredList, setFilteredList] = new useState(TableExample);

  const filterBySearch = (event) => {
    const query = event.target.value;
    var updatedList = [...TableExample];
    updatedList = updatedList.filter((item) => {
      return item.user.name.toLowerCase().indexOf(query.toLowerCase()) !== -1;
    });
    setFilteredList(updatedList);
  };

  return (
    <>
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

      <CRow className=""  >
        <CCol xs style={{ paddingBottom:50}}>
          <CCard className="mb-4 shadow " style={{ borderRadius: 20 }}>
            <CustomButtonHeader filterBySearch={filterBySearch} />

            <CCard className="border border-0 " style={{ borderRadius: 20 }}>
              <CTable
                align="middle"
                className="mb-0"
                borderless
                hover
                responsive
              >
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
          </CCard>
        </CCol>
      </CRow>
    </>
  );
}

export default ManageProducts;
