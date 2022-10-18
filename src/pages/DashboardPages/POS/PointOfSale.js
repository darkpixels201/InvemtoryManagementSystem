import React from 'react'
import BillTable from './Molecules/BillTable'
import ProductTable from './Molecules/ProductTable'

function PointOfSale() {
  return (
    <div style={{}}>
      <div style={{display:"flex", justifyContent:"space-between", flexWrap:"wrap"}}>
      <ProductTable />
      <BillTable />
      </div>
    </div>
  )
}

export default PointOfSale