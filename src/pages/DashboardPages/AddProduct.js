import React from "react";
import CustomHeader from "../../components/customComponents/CustomHeader";

function AddProduct() {
  return (
    <div>
      <CustomHeader title={"Add products"} />

      <div
        className="d-flex flex-wrap justify-content-evenly shadow  bg-body rounded "
        style={{ width: "100%", padding: 10 }}
      >
        <div className="form-floating mt-4 align-self-center" style={{ width: 550 }}>
          <input
            type="text"
            className="form-control-plaintext rounded"
            id="floatingInput"
            placeholder="name@example.com"
          />
          <label for="floatingInput">Product Name</label>
        </div>

        <div className="form-floating mt-4 " style={{ width: 550 }}>
          <input
            type="text"
            className="form-control-plaintext rounded"
            id="floatingPassword"
            placeholder="Password"
          />
          <label for="floatingPassword">Product Code</label>
        </div>

        <div className="form-floating mt-4 " style={{ width: 550 }}>
          <input
            type="text"
            className="form-control-plaintext rounded"
            id="floatingInput"
            placeholder="name@example.com"
          />
          <label for="floatingInput">Product Cost</label>
        </div>

        <div className="form-floating mt-4 " style={{ width: 550 }}>
          <input
            type="text"
            className="form-control-plaintext rounded"
            id="floatingPassword"
            placeholder="Password"
          />
          <label for="floatingPassword">Product Price</label>
        </div>


        <div className="form-floating mt-4 " style={{ width: 550, marginBottom: 20 }}>
          <input
            type="number"
            className="form-control-plaintext rounded"
            id="floatingPassword"
            placeholder="Password"
          />
          <label for="floatingPassword">Stock in KG</label>
        </div>
      </div>
    </div>
  );
}

export default AddProduct;
