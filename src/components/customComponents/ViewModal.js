import { CButton, CModalBody, CModalFooter } from '@coreui/react'
import React from 'react'

function ViewModal({setEyeVisible}) {
  return (
    <div>
    <CModalBody>View View Content</CModalBody>
 <CModalFooter>
   <CButton color="secondary" onClick={() => setEyeVisible(false)}>
     Close
   </CButton>
   <CButton color="primary">Save changes</CButton>
 </CModalFooter>
</div>
  )
}

export default ViewModal