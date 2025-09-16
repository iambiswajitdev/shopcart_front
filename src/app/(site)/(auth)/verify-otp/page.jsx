"use client";

import { OtpInputForm } from "@/src/components/form/OtpInputForm";

import React from "react";

const VerifyOtp = () => {
  return (
    <>
      <div className="grid min-h-svh lg:grid-cols-2">
        <div className="bg-muted relative hidden lg:block">
          <img
            src="/images/login.png"
            alt="Image"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
        <div className="flex flex-col gap-4 p-6 md:p-10">
          <div className="flex flex-1 items-center justify-center">
            <div className="w-full max-w-[400px]">
              <OtpInputForm />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VerifyOtp;
