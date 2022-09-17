import React from 'react'
import SweetAlert from 'react-bootstrap-sweetalert'

function WarningAlert() {
  return (
    <div> 
    <SweetAlert
    warning
    showCancel
    confirmBtnText="Yes, delete it!"
    confirmBtnBsStyle="danger"
    title="Are you sure?"
    onConfirm={""}
    onCancel={""}
    focusCancelBtn
  >
    You will not be able to recover this imaginary file!
  </SweetAlert></div>
  )
}

export default WarningAlert