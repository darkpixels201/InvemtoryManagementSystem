import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import AppContent from "./AppContent";
import AppFooter from "./AppFooter";
import AppHeader from "./AppHeader";
import AppSidebar from "./AppSidebar";
import "../../assets/css/background.css";

const DefaultLayout = () => {
  const [userInfo, setUserInfo] = useState("null");
  return (
    <div>
      {userInfo ? (
        <div>
          <AppSidebar />
          <div className="wrapper d-flex flex-column min-vh-100 bg-light">
            <AppHeader />
            <div className="background-design">
              <div className="body flex-grow-1 px-3 mt-4 mb-4">
                {/* <h1>hello</h1> */}
                <AppContent />
              </div>


            </div>
            <AppFooter />

          </div>
        </div>
      ) : (
        <Navigate to="/" />
      )}
    </div>
  );
};

export default DefaultLayout;
