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
import CIcon from "@coreui/icons-react";
import "../../assets/css/style.css";
import { cilPeople } from "@coreui/icons";

import avatar1 from "../../assets/images/avatars/1.jpg";
import avatar2 from "../../assets/images/avatars/2.jpg";
import avatar3 from "../../assets/images/avatars/3.jpg";
import avatar4 from "../../assets/images/avatars/4.jpg";
import avatar5 from "../../assets/images/avatars/5.jpg";
import avatar6 from "../../assets/images/avatars/6.jpg";

import { BsTrash } from "react-icons/bs";
import { TiEdit } from "react-icons/ti";
import CustomHeader from "../../components/customComponents/CustomHeader";
import CustomSearchFilter from "../../components/customComponents/CustomSearchFilter";
import CustomTableHeader from "../../components/customComponents/CustomTableHeader";

function CustomerUser() {
  // Sample how to write Icons in Array
  // payment: { name: "Mastercard", Icon:<BsTrash color="red"/> },
  // activity: {Icon: <TiEdit />},

  const tableExample = [
    {
      avatar: { src: avatar1, status: "success" },
      user: {
        name: "Yiorgos Avraamu",
        email: "Yiorgos Avraamu@gmail.com",
        status: "Active",
        new: true,
        registered: "Jan 1, 2021",
      },
      // email: { name: "USA" },

      payment: { name: "Mastercard", Icon: <BsTrash color="red" /> },
      activity: { Icon: <TiEdit /> },
    },
    {
      avatar: { src: avatar2, status: "danger" },
      user: {
        name: "Avram Tarasios Avram Tarasios",
        email: "Yiorgos Avraamu@gmail.com",
        status: "Active",
        new: false,
        registered: "Jan 1, 2021",
      },
      // email: { name: "Brazil", flag: cifBr },

      payment: { name: "Visa", Icon: <BsTrash color="red" /> },
      activity: "5 minutes ago",
    },
    {
      avatar: { src: avatar3, status: "warning" },
      user: {
        name: "Quintin Ed",
        email: "Yiorgos Avraamu@gmail.com",
        status: "InActive",
        new: true,
        registered: "Jan 1, 2021",
      },
      // email: { name: "India", flag: cifIn },

      payment: { name: "Stripe", Icon: <BsTrash color="red" /> },
      activity: "1 hour ago",
    },
    {
      avatar: { src: avatar4, status: "secondary" },
      user: {
        name: "Enéas Kwadwo",
        email: "Yiorgos Avraamu@gmail.com",
        status: "Active",
        new: true,
        registered: "Jan 1, 2021",
      },
      // email: { name: "France", flag: cifFr },

      payment: { name: "PayPal", Icon: <BsTrash color="red" /> },
      activity: "Last month",
    },
    {
      avatar: { src: avatar5, status: "success" },
      user: {
        name: "Agapetus Tadeáš",
        email: "Yiorgos Avraamu@gmail.com",
        status: "InActive",
        new: true,
        registered: "Jan 1, 2021",
      },
      // email: { name: "Spain", flag: cifEs },

      payment: { name: "Google Wallet", Icon: <BsTrash color="red" /> },
      activity: "Last week",
    },
    {
      avatar: { src: avatar6, status: "danger" },
      user: {
        name: "Friderik Dávid",
        email: "Yiorgos Avraamu@gmail.com",
        status: "Active",
        new: true,
        registered: "Jan 1, 2021",
      },
      // email: { name: "Poland", flag: cifPl },

      payment: { name: "Amex", Icon: <BsTrash color="red" /> },
      activity: "Last week",
    },
    {
      avatar: { src: avatar2, status: "danger" },
      user: {
        name: "Avram Tarasios Avram Tarasios",
        email: "Yiorgos Avraamu@gmail.com",
        status: "Active",
        new: false,
        registered: "Jan 1, 2021",
      },
      // email: { name: "Brazil", flag: cifBr },

      payment: { name: "Visa", Icon: <BsTrash color="red" /> },
      activity: "5 minutes ago",
    },
    {
      avatar: { src: avatar3, status: "warning" },
      user: {
        name: "Quintin Ed",
        email: "Yiorgos Avraamu@gmail.com",
        status: "InActive",
        new: true,
        registered: "Jan 1, 2021",
      },
      // email: { name: "India", flag: cifIn },

      payment: { name: "Stripe", Icon: <BsTrash color="red" /> },
      activity: "1 hour ago",
    },
    {
      avatar: { src: avatar4, status: "secondary" },
      user: {
        name: "Enéas Kwadwo",
        email: "Yiorgos Avraamu@gmail.com",
        status: "Active",
        new: true,
        registered: "Jan 1, 2021",
      },
      // email: { name: "France", flag: cifFr },

      payment: { name: "PayPal", Icon: <BsTrash color="red" /> },
      activity: "Last month",
    },
    {
      avatar: { src: avatar5, status: "success" },
      user: {
        name: "Agapetus Tadeáš",
        email: "Yiorgos Avraamu@gmail.com",
        status: "InActive",
        new: true,
        registered: "Jan 1, 2021",
      },
      // email: { name: "Spain", flag: cifEs },

      payment: { name: "Google Wallet", Icon: <BsTrash color="red" /> },
      activity: "Last week",
    },
    {
      avatar: { src: avatar6, status: "danger" },
      user: {
        name: "Friderik Dávid",
        email: "Yiorgos Avraamu@gmail.com",
        status: "Active",
        new: true,
        registered: "Jan 1, 2021",
      },
      // email: { name: "Poland", flag: cifPl },

      payment: { name: "Amex", Icon: <BsTrash color="red" /> },
      activity: "Last week",
    },
    {
      avatar: { src: avatar2, status: "danger" },
      user: {
        name: "Avram Tarasios Avram Tarasios",
        email: "Yiorgos Avraamu@gmail.com",
        status: "Active",
        new: false,
        registered: "Jan 1, 2021",
      },
      // email: { name: "Brazil", flag: cifBr },

      payment: { name: "Visa", Icon: <BsTrash color="red" /> },
      activity: "5 minutes ago",
    },
    {
      avatar: { src: avatar3, status: "warning" },
      user: {
        name: "Quintin Ed",
        email: "Yiorgos Avraamu@gmail.com",
        status: "InActive",
        new: true,
        registered: "Jan 1, 2021",
      },
      // email: { name: "India", flag: cifIn },

      payment: { name: "Stripe", Icon: <BsTrash color="red" /> },
      activity: "1 hour ago",
    },
    {
      avatar: { src: avatar4, status: "secondary" },
      user: {
        name: "Enéas Kwadwo",
        email: "Yiorgos Avraamu@gmail.com",
        status: "Active",
        new: true,
        registered: "Jan 1, 2021",
      },
      // email: { name: "France", flag: cifFr },

      payment: { name: "PayPal", Icon: <BsTrash color="red" /> },
      activity: "Last month",
    },
    {
      avatar: { src: avatar5, status: "success" },
      user: {
        name: "Agapetus Tadeáš",
        email: "Yiorgos Avraamu@gmail.com",
        status: "InActive",
        new: true,
        registered: "Jan 1, 2021",
      },
      // email: { name: "Spain", flag: cifEs },

      payment: { name: "Google Wallet", Icon: <BsTrash color="red" /> },
      activity: "Last week",
    },
    {
      avatar: { src: avatar6, status: "danger" },
      user: {
        name: "Friderik Dávid",
        email: "Yiorgos Avraamu@gmail.com",
        status: "Active",
        new: true,
        registered: "Jan 1, 2021",
      },
      // email: { name: "Poland", flag: cifPl },

      payment: { name: "Amex", Icon: <BsTrash color="red" /> },
      activity: "Last week",
    },
    {
      avatar: { src: avatar2, status: "danger" },
      user: {
        name: "Avram Tarasios Avram Tarasios",
        email: "Yiorgos Avraamu@gmail.com",
        status: "Active",
        new: false,
        registered: "Jan 1, 2021",
      },
      // email: { name: "Brazil", flag: cifBr },

      payment: { name: "Visa", Icon: <BsTrash color="red" /> },
      activity: "5 minutes ago",
    },
    {
      avatar: { src: avatar3, status: "warning" },
      user: {
        name: "Quintin Ed",
        email: "Yiorgos Avraamu@gmail.com",
        status: "InActive",
        new: true,
        registered: "Jan 1, 2021",
      },
      // email: { name: "India", flag: cifIn },

      payment: { name: "Stripe", Icon: <BsTrash color="red" /> },
      activity: "1 hour ago",
    },
    {
      avatar: { src: avatar4, status: "secondary" },
      user: {
        name: "Enéas Kwadwo",
        email: "Yiorgos Avraamu@gmail.com",
        status: "Active",
        new: true,
        registered: "Jan 1, 2021",
      },
      // email: { name: "France", flag: cifFr },

      payment: { name: "PayPal", Icon: <BsTrash color="red" /> },
      activity: "Last month",
    },
    {
      avatar: { src: avatar5, status: "success" },
      user: {
        name: "Agapetus Tadeáš",
        email: "Yiorgos Avraamu@gmail.com",
        status: "InActive",
        new: true,
        registered: "Jan 1, 2021",
      },
      // email: { name: "Spain", flag: cifEs },

      payment: { name: "Google Wallet", Icon: <BsTrash color="red" /> },
      activity: "Last week",
    },
    {
      avatar: { src: avatar6, status: "danger" },
      user: {
        name: "Friderik Dávid",
        email: "Yiorgos Avraamu@gmail.com",
        status: "Active",
        new: true,
        registered: "Jan 1, 2021",
      },
      // email: { name: "Poland", flag: cifPl },

      payment: { name: "Amex", Icon: <BsTrash color="red" /> },
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
      <CRow>
        <CCol xs style={{ paddingBottom:50}}>
          <CCard className="mb-4 shadow" style={{ borderRadius: 20 }}>


            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent:
                  window.innerWidth <= 775 ? "center" : "space-between",
                alignItems: "center",
                alignContent: "center",
              }}
            >
            <CustomHeader
                justifyContent={"space-between"}
                title={"Customers"}
              />
              <div
                style={{
                  marginBottom: window.innerWidth <= 775 ? 20 : "",
                }}
              >
              <CustomSearchFilter
              style={{
                marginBottom: window.innerWidth <= 775 ? 20 : "",
              }}
                placeholder={"Search Customers"}
                onChange={filterBySearch}
              />
              </div>
              </div>

            <CCard className="border border-0 " style={{ borderRadius: 20 }}>
              <CTable align="middle" className="mb-0" borderless hover responsive>
              <CustomTableHeader
                  icon={<CIcon icon={cilPeople} />}
                  userName={"User Name"}
                  email={"Email"}
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
                        {/* <CIcon
                          size="xl"
                          // icon={item.email.flag}
                          title={item.email.name}
                        /> */}
                        <div>{item.user.email}</div>
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                        <div
                          style={{
                            color:
                              item.user.status == "InActive" ? "red" : "green",
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

export default CustomerUser;
