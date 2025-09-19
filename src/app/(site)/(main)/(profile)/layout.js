import React from "react";
import AccountSidebar from "./profile/_components/AccountSideBar";
import PageBreadCrumb from "./profile/_components/PageBreadCrumb";

const userLayout = ({ children }) => {
  return (
    <>
      <div className="container">
        <div className="grid grid-cols-12">
          <div className="col-span-3">
            <AccountSidebar />
          </div>
          <div className="col-span-9 mt-4">
            <PageBreadCrumb />
            <div className="mt-3 p-3 bg-[#fff] shadow-2xl rounded-b-md">
              {children}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default userLayout;
