import React, { useState } from "react";
import CustomHeader from "../../../../components/customComponents/CustomHeader";
import CustomSearchFilter from "../../../../components/customComponents/CustomSearchFilter";
import { TableExample } from "../../../../assets/ProductArray/TableExample";
// import CustomLine from "../../../../components/customComponents/CustomLine";
import { CAvatar } from "@coreui/react";

const ProductTable = () => {

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
    <div
      style={{
        width: 650,
        height: "80vh",
        backgroundColor: "#f3f3f3",
        paddingBottom: 20,
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        <CustomHeader title={"Product Section"} />
        <CustomSearchFilter
          placeholder={"Search Products"}
          onChange={filterBySearch}
        />
      </div>
      {/* <CustomLine /> */}

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          flexWrap: "wrap",
          // margin: "4px 4px",
          // padding: 4,
          // backgroundColor: "green",
          width: "100%",
          height: 571,
          overflowX: "hidden",
          overflowY: "auto",
          textAlign: "justify",
        }}
      >
        {filteredList.map((item, index) => (
          <div key={index}
            style={{
              width: 140,
              height: 200,
              backgroundColor: "white",
              alignItems: "center",
              display: "flex",
              // justifyContent:"space-evenly",
              flexDirection: "column",
              marginTop: 10,
              borderRadius: 10,
              boxShadow: "1px 1px 5px grey",
            }}
          >
            <div
              style={{
                width: "100%",
                height: 160,
                display: "flex",
                justifyContent: "center",
              }}
            >
              <CAvatar size="lg" src={item.avatar.src} />
            </div>
            <div>{item.user.name}</div>
            <div>${item.user.salePrice}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductTable;
