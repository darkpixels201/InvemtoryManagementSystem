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
import ToogleSwitch from "../../components/customComponents/ToogleSwitch";

function DiscountList() {
  const tableExample = [
    {
      id: 1,
      disount: "12%",
    },
    {
      id: 2,
      disount: "12%",
    },
    {
      id: 3,
      disount: "12%",
    },
    {
      id: 3,
      disount: "12%",
    },
    {
      id: 4,
      disount: "12%",
    },
  ];

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
      <CRow>
        <CCol style={{ display: "flex", justifyContent: "center" }} xs>
          <CCard className="mb-4 shadow" style={{ borderRadius: 20 }}>
            <div
              style={{
                display: "flex",
                // // width: "100%",
                flexWrap:"wrap",
                // flexDirection: "row",
                // justifyContent: "space-between",
                alignItems: "center",
                alignSelf: "center",
                alignContent:"center",
                justifyContent:"center"
              }}
            >
              <CustomHeader
                // justifyContent={"space-between"}
                title={"Discounts"}
              />

              <CustomSearchFilter
              style={{
                marginBottom: window.innerWidth <= 775 ? 20 : "",
              }}
                placeholder={"Search Discounts"}
                filterBySearch={filterBySearch}
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
                  id={"#"}
                  status={"status"}
                  discount={"Discount"}
                  // status={"Status"}
                  // stock={"Stock"}
                />
                <CTableBody>
                  {filteredList.map((item, index) => (
                    <CTableRow v-for="item in tableItems" key={index}>
                      <CTableDataCell className="text-center">
                        <div>{item.id}</div>
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                        <div>{item.disount}</div>
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                        <ToogleSwitch />
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

export default DiscountList;
