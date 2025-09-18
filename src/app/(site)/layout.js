"use client";
import Footer from "@/src/components/common/Footer";
import Header from "@/src/components/common/Header";
import { setUser } from "@/src/features/auth/authSlice";
import { fetchUserDetailsApi } from "@/src/services/user/userServise";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const MainLayout = ({ children }) => {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.auth.userId);
  console.log("userData", userData);

  useEffect(() => {
    const getUser = async () => {
      if (!userData) return;
      try {
        console.log("helllooooo");

        // dispatch(setLoading(true));
        const user = await fetchUserDetailsApi(userData);
        console.log("usersss", user);

        dispatch(setUser(user));
      } catch (err) {
        console.error("Fetch user failed:", err);
        // dispatch(logout());
      } finally {
        // dispatch(setLoading(false));
      }
    };
    getUser();
  }, [userData, dispatch]);
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default MainLayout;
