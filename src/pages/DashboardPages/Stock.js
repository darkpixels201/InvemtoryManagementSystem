import React, { useState } from 'react'
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
import '../../assets/css/style.css'

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

function Stock() {
  const tableExample = [
    {
      avatar: { src: avatar1, status: "success" },
      user: {
        name: "Yiorgos Avraamu",
        stock: 5,
        status: "Active",
        new: true,
        registered: "Jan 1, 2021",
      },
      
      payment: { name: "Mastercard", Icon:<BsTrash color="red"/> },
      activity: {Icon: <TiEdit />},
    },
    {
      avatar: { src: avatar2, status: "danger" },
      user: {
        name: "Avram Tarasios Avram Tarasios",
        stock: 5,
        status: "Active",
        new: false,
        registered: "Jan 1, 2021",
      },
      
      payment: { name: "Visa", Icon:<BsTrash color="red"/> },
      activity: "5 minutes ago",
    },
    {
      avatar: { src: avatar3, status: "warning" },
      user: { name: "Quintin Ed", stock: 5,  status: "InActive", new: true, registered: "Jan 1, 2021" },
      // email: { name: "India", flag: cifIn },
      
      payment: { name: "Stripe", Icon:<BsTrash color="red"/> },
      activity: "1 hour ago",
    },
    {
      avatar: { src: avatar4, status: "secondary" },
      user: { name: "Enéas Kwadwo", stock: 5,  status: "Active", new: true, registered: "Jan 1, 2021" },
      // email: { name: "France", flag: cifFr },
      
      payment: { name: "PayPal", Icon:<BsTrash color="red"/> },
      activity: "Last month",
    },
    {
      avatar: { src: avatar5, status: "success" },
      user: {
        name: "Agapetus Tadeáš",    
        stock: 5,    
        status: "InActive",
        new: true,
        registered: "Jan 1, 2021",
      },      
      payment: { name: "Google Wallet", Icon:<BsTrash color="red"/>},
      activity: "Last week",
    },
    {
      avatar: { src: avatar6, status: "danger" },
      user: {
        name: "Friderik Dávid", 
        stock: 5,      
         status: "Active",
        new: true,
        registered: "Jan 1, 2021",
      },      
      payment: { name: "Amex", Icon:<BsTrash color="red" /> },
      activity: "Last week",
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
      <CustomHeader title={"Stock"} />
      <CRow>
        <CCol xs>
          <CCard className="mb-4">
            <CCardHeader>
              <CustomSearchFilter
                placeholder={"Search Stock"}
                onChange={filterBySearch}
              />
            </CCardHeader>

            <CCardBody>
              <CTable align="middle" className="mb-0 border" hover responsive>
                 <CustomTableHeader
                  image={"#"}
                  userName={"Name"}
                  status={"Status"}
                  stock={"Stock"}
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
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
          <div>{item.user.stock}</div>
        </CTableDataCell>
                      
                      <CTableDataCell className="text-center">
                       
                        <div style={{color:item.user.status === "InActive" ? 'red': 'green'}}>{item.user.status}</div>
                        
                      </CTableDataCell>

                    </CTableRow>
                  ))}
                </CTableBody>
              </CTable>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default Stock