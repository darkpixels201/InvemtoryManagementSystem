import React from "react";
import CustomText from "../../../../components/customComponents/CustomText";
import "../../../../assets/css/removeArrow.css";
import { BsTrash } from "react-icons/bs";
import { colors } from "../../../../utils/Colors";

function BillTableBottom() {
  const orderArray = [
    {
      id: 1,
      prodcutImage: "123",
      name: "Helllo",
      qty: "",
      price: "20",
      action: <BsTrash color="red" /> ,
    },
    {
      id: 2,
      prodcutImage: "123",
      name: "Product2",
      qty: "",
      price: "20",
      action: <BsTrash color="red" /> ,
    },
    {
      id: 3,
      prodcutImage: "123",
      name: "Product3",
      qty: "",
      price: "20",
      action: <BsTrash color="red" /> ,
    },
  ];


  return (
    <div>
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "row",
          backgroundColor: "green",
          padding: 10,
        }}
      >
        <div  >
          <CustomText fontSize={15} title={"Name"} />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            flex: 4,
          }}
        >
          <CustomText fontSize={15} title={"Qty"} />
          <CustomText fontSize={15} title={"Price"} />
          <CustomText fontSize={15} title={"Action"} />
        </div>

        {/* <CustomText backgroundColor={"blue"} fontSize={15} title={"Qty"} />
        <CustomText backgroundColor={"red"} fontSize={15} title={"Price"} /> */}
        {/* <CustomText fontSize={15} title={"Action"} /> */}
      </div>

      <div>
        {orderArray.map((order, index) => (
          <div
            key={index}
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "row",
              // backgroundColor: "green",
              padding: 10,
            }}
          >
            <div>{order.name}</div>
            <div>{order.qty}</div>
            <div>
            <input
              type={"number"}
              style={{
                width: 40,
                height:30,
                borderRadius: 10,
                border: "none",
                borderColor: colors.lightWhite1,
                borderWidth: 1,
                borderStyle: "solid",
                // minLength:1,
                textAlign:"center"
              }}
            />
            </div>
            <div>{order.price}</div>
            <div>{order.action}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BillTableBottom;
