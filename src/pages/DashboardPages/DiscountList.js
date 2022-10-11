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

function DiscountList() {
  const tableExample = [
    { 
      id: 1,
      disount: "12%"
    },
    { 
      id: 2,
      disount: "12%"
    },
    { 
      id: 3,
      disount: "12%"
    },
    { 
      id: 3,
      disount: "12%"
    },
    { 
      id: 4,
      disount: "12%"
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
      <CustomHeader title={"Disounts"} />
      <CRow >
        <CCol style={{display:"flex", justifyContent:"center"}} xs>
          <CCard className="mb-4 "  style={{width:"50%", }}>
            <CCardHeader>
              <CustomSearchFilter
                placeholder={"Search Discounts"}
                onChange={filterBySearch}
              />
            </CCardHeader>

            {/* <CCardBody> */}
              <CTable  align="middle" className="mb-0 border" hover responsive rounded >
                <CustomTableHeader
                  id={"#"}
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
                    </CTableRow>
                  ))}
                </CTableBody>
              </CTable>
            {/* </CCardBody> */}
          </CCard>
        </CCol>
      </CRow>
    </>
  );
}

export default DiscountList;
