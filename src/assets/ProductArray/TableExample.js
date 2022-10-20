import React from 'react'
import avatar1 from "../../assets/images/avatars/1.jpg";
import avatar2 from "../../assets/images/avatars/2.jpg";
import avatar3 from "../../assets/images/avatars/3.jpg";
import avatar4 from "../../assets/images/avatars/4.jpg";
import avatar5 from "../../assets/images/avatars/5.jpg";
import avatar6 from "../../assets/images/avatars/6.jpg";

import { BsTrash, BsPlusLg } from "react-icons/bs";
import { TiEdit } from "react-icons/ti";
import { FaEye } from "react-icons/fa";

export const TableExample = [
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

// export default TableExample