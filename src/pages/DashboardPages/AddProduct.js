import React from "react";
import {
  CButton,
  CCol,
  CForm,
  CFormCheck,
  CFormInput,
  CFormSelect,
} from "@coreui/react";
import CustomHeader from "../../components/customComponents/CustomHeader";

function AddProduct() {
  return (
    <div>
      <CustomHeader title={"Add products"} />

      <div
        className="d-flex flex-wrap justify-content-evenly shadow  bg-body rounded "
        style={{ width: "100%", padding: 10 }}
      >
        <CForm className="row g-3" style={{ width: "100%", padding: 10 }}>
          <CCol md={6}>
            <CFormInput type="text" id="productName" label="Name" />
          </CCol>
          <CCol md={6}>
            <CFormInput type="text" id="PurchasePrice" label="Purchase Price" />
          </CCol>
          <CCol md={6}>
            <CFormInput type="text" id="SalePrice" label="Sale Price" />
          </CCol>
          <CCol md={6}>
            <CFormInput type="number" id="Stock" label="Stock" />
          </CCol>
          <CCol xs={12}>
            <CFormInput
              id="Description"
              label="Description"
              placeholder="Product Description"
            />
          </CCol>
          <CCol xs={12}>
            <CFormInput
              id="ChooseImage"
              label="Choose Image"
              type="file"
              placeholder="Apartment, studio, or floor"
            />
          </CCol>
          <CCol md={4}>
            <CFormInput
              id="ChooseColor"
              label="Color"
              placeholder="Enter Product Color"
            />
          </CCol>
          <CCol md={8}>
            <CFormSelect id="inputState" label="Status">
              <option>Active</option>
              <option>InActive</option>
            </CFormSelect>
          </CCol>
          {/* <CCol md={2}>
            <CFormInput id="inputZip" label="Zip" />
          </CCol> */}
          {/* <CCol xs={12}>
            <CFormCheck type="checkbox" id="gridCheck" label="Check me out" />
          </CCol> */}
          <CCol md={4} style={{width:200}}>
            <button
              className="theme-btn-one btn-black-overlay btn_sm rounded"
              type="submit"
            >
              Add Product
            </button>
          </CCol>
        </CForm>
      </div>
    </div>
  );
}

export default AddProduct;
