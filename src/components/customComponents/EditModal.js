import { CButton, CModalBody, CModalFooter } from '@coreui/react'
import React from 'react'

function EditModal({setEyeVisible}) {
  return (
    <div>
         <CModalBody>Edit Edit Content</CModalBody>
      <CModalFooter>
        <CButton color="secondary" onClick={() => setEyeVisible(false)}>
          Close
        </CButton>
        <CButton color="primary">Save changes</CButton>
      </CModalFooter>
    </div>
  )
}

export default EditModal