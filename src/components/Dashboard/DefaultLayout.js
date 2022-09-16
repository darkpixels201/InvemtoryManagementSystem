import React, { useState } from 'react'
import { Navigate } from 'react-router-dom'
import AppContent from './AppContent'
import AppFooter from './AppFooter'
import AppHeader from './AppHeader'
import AppSidebar from './AppSidebar'

const DefaultLayout = () => {
  const [userInfo, setUserInfo] = useState('null');
  return (
    <div>
    {userInfo ? (
      <div>
        <AppSidebar />
        <div className="wrapper d-flex flex-column min-vh-100 bg-light">
          <AppHeader />
          <div className="body flex-grow-1 px-3">
            {/* <h1>hello</h1> */}
            <AppContent />
          </div>
          <AppFooter />
        </div>
      </div>
    ) : (
      <Navigate to="/" />        
    )}
  </div>
  )
}

export default DefaultLayout
