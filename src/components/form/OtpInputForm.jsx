"use client";

import { cn } from "@/lib/utils";
import Buttons from "../ui/button/Buttons";
import Link from "next/link";
import { signUp } from "@/src/services/Auth/authServise";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { validationSignUp } from "@/utilit/fromValidation";
import toast from "react-hot-toast";
import { useState } from "react";
import OTPInput from "react-otp-input";

export function OtpInputForm({ className, ...props }) {
  const [otp, setOtp] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(validationSignUp),
  });

  const onSubmit = async (data) => {
    try {
      const response = await signUp(data);
      console.log("response=>>", response);

      if (response?.success) {
        toast.success(response.data.message ?? "Sign up successful");
      } else {
        toast.error(response.message ?? "Sign up failed");
      }
    } catch (error) {
      const errorMessage =
        error?.response?.data?.message ??
        error?.message ??
        "Something went wrong. Please try again.";
      toast.error(errorMessage);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={cn("flex flex-col gap-6", className)}
      {...props}
    >
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-bold">OTP Verification</h1>
        <p className="text-muted-foreground text-sm text-balance">
          One Time Password (OTP) has been sent via Email to{" "}
          <span className="text-primary">subhadeeptest001@yopmail.com</span>{" "}
          Enter the OTP below to verify it.
        </p>
      </div>

      <div className="grid gap-6">
        <OTPInput
          value={otp}
          onChange={setOtp}
          numInputs={6}
          renderSeparator={<span className="text-primary">-</span>}
          inputType="tel"
          containerStyle="flex w-full justify-center"
          renderInput={(props) => (
            <input
              {...props}
              placeholder="0"
              className="!w-[50px] !h-[50px] border border-gray-300 rounded-md text-center focus:outline-none focus:ring-2 focus:ring-primary"
            />
          )}
        />

        {/* Submit Button */}
        <Buttons
          className="bg-[#DB4444] text-[#fff] cursor-pointer disabled:opacity-60"
          type="submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting..." : "Submit"}
        </Buttons>
      </div>

      <div className="text-center text-sm">
        Didn’t get the code?{" "}
        <Buttons className="cursor-pointer text-primary">Resend OTP</Buttons>
      </div>
    </form>
  );
}
