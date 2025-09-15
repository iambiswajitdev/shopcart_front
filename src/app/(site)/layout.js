import Footer from "@/src/components/common/Footer";
import Header from "@/src/components/common/Header";
import React from "react";

const MainLayout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default MainLayout;
