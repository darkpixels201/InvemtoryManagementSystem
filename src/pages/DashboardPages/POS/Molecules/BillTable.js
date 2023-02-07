import React, { useState } from "react";
import CustomSearchFilter from "../../../../components/customComponents/CustomSearchFilter";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import CustomHeader from "../../../../components/customComponents/CustomHeader";
import CustomButton from "../../../../components/customComponents/CustomButton";
import { AiOutlinePlus } from "react-icons/ai";
import CustomText from "../../../../components/customComponents/CustomText";
import Spacer from "../../../../components/customComponents/Spacer";
import { colors } from "../../../../utils/Colors";
import BillTableBottom from "./BillTableBottom";

const BillTable = () => {
  const customer = [
    "Ali",
    "Zaid",
    "Ismail",
    "Fahad",
    "Talha",
    "Umair",
    "Babar",
  ];

  const [currentcustomer, setCurrentCustomer] = useState(null);
  console.log("Current Customer", currentcustomer);
  return (
    <div
      style={{
        width: 500,
        height: "80vh",
        backgroundColor: "#f3f3f3",
        marginTop: window.innerWidth <= 1500 ? 50 : null,
      }}
    >
      <CustomHeader
        size={10}
        justifyContent={"start"}
        title={"Product Section"}
      />

      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <Autocomplete
          options={customer}
          sx={{ width: 300 }}
          renderInput={(params) => (
            <TextField {...params} label="Customer" variant="standard" />
          )}
          currentcustomer={currentcustomer}
          onChange={(event, newValue) => setCurrentCustomer(newValue)}
        />

        <CustomButton
          title={"Customer"}
          alignItems={"center"}
          alignSelf={"center"}
          height={45}
          width={100}
          backgroundColor={"#00c9a7"}
          icon={<AiOutlinePlus className="cursor-pointer" color="white" />}
        />
      </div>

      <Spacer height={5} />

      <div style={{ width: "100%", padding: 20 }}>
        <CustomText
          color={colors.lightgray}
          title={"Current Customer: "}
          fontSize={15}
          value={currentcustomer}
        />

        <BillTableBottom />
      </div>
    </div>
  );
};

export default BillTable;
