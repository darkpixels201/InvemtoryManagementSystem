import React, { useState } from "react";

import {
  CAvatar,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from "@coreui/react";
import "../../assets/css/style.css";

import avatar1 from "../../assets/images/avatars/1.jpg";
import avatar2 from "../../assets/images/avatars/2.jpg";
import avatar3 from "../../assets/images/avatars/3.jpg";
import avatar4 from "../../assets/images/avatars/4.jpg";
import avatar5 from "../../assets/images/avatars/5.jpg";
import avatar6 from "../../assets/images/avatars/6.jpg";

import { BsTrash } from "react-icons/bs";
import { TiEdit } from "react-icons/ti";
import CustomSearchFilter from "../../components/customComponents/CustomSearchFilter";
import CustomHeader from "../../components/customComponents/CustomHeader";
import CustomTableHeader from "../../components/customComponents/CustomTableHeader";
import { TableExample } from "../../assets/ProductArray/TableExample";

function CategoriesList() {
  // Sample how to write Icons in Array
  // payment: { name: "Mastercard", Icon:<BsTrash color="red"/> },
  // activity: {Icon: <TiEdit />},




  const filterBySearch = (event) => {
    const query = event.target.value;
    var updatedList = [...TableExample];
    updatedList = updatedList.filter((item) => {
      return item.user.name.toLowerCase().indexOf(query.toLowerCase()) !== -1;
    });
    setFilteredList(updatedList);
  };
  
  const [filteredList, setFilteredList] = new useState(TableExample);

  return (
    <>
      <CRow>
        <CCol xs style={{ paddingBottom:50}}>
          <CCard className="mb-4 shadow" style={{ borderRadius: 20 }}>
            <div
              style={{
                display: "flex",
                width: "100%",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                alignSelf: "center",
              }}
            >
              <CustomHeader
                justifyContent={"space-between"}
                title={"Category"}
              />

              <CustomSearchFilter
              style={{
                marginBottom: window.innerWidth <= 775 ? 20 : "",
              }}
                placeholder={"Search Category"}
                onChange={filterBySearch}
              />
            </div>

            <CCard className="border border-0 " style={{ borderRadius: 20 }}>
              <CTable
                align="middle"
                className="mb-0"
                borderless
                hover
                responsive
              >
                <CustomTableHeader
                  image={"#"}
                  userName={"Category"}
                  status={"Status"}
                  delete={"Delete"}
                  edit={"Edit"}
                />
                <CTableBody>
                  {filteredList.map((item, index) => (
                    <CTableRow v-for="item in tableItems" key={index}>
                      <CTableDataCell className="text-center">
                        <CAvatar
                          size="md"
                          src={item.avatar.src}
                          status={item.avatar.status}
                        />
                      </CTableDataCell>
                      <CTableDataCell>
                        <div>{item.user.name}</div>
                        <div className="small text-medium-emphasis">
                          <span>{item.user.new ? "New" : "Recurring"}</span> |
                          Registered: {item.user.registered}
                        </div>
                      </CTableDataCell>

                      <CTableDataCell className="text-center">
                        <div
                          style={{
                            color:
                              item.user.status === "InActive" ? "red" : "green",
                          }}
                        >
                          {item.user.status}
                        </div>
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                        <BsTrash className="cursor-pointer" color="red" />
                      </CTableDataCell>
                      <CTableDataCell>
                        <TiEdit className="cursor-pointer" size={"20"} />
                      </CTableDataCell>
                    </CTableRow>
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

export default CategoriesList;
