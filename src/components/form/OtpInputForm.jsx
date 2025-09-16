"use client";

import { cn } from "@/lib/utils";
import Buttons from "../ui/button/Buttons";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { validationOtp } from "@/utilit/fromValidation";
import toast from "react-hot-toast";
import { useState } from "react";
import OTPInput from "react-otp-input";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { clearEmail } from "@/src/features/auth/authSlice";
import { verifyEmail, verifySendEmail } from "@/src/services/Auth/authServise";

export function OtpInputForm({ className, ...props }) {
  const emailId = useSelector((state) => state.auth.email);
  console.log("emailId", emailId);
  const router = useRouter();
  const [otp, setOtp] = useState("");
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(validationOtp),
    defaultValues: { email: emailId },
  });
  register("email");
  const onSubmit = async (data) => {
    try {
      console.log("data", data);
      const response = await verifyEmail(data);
      console.log("response", response);
      if (response.success) {
        toast.success(response.message);
        dispatch(clearEmail());
        router.push("/");
      } else {
        toast.error(response.message);
      }
    } catch (error) {
      const errorMessage =
        error?.response?.data?.message ??
        error?.message ??
        "Something went wrong. Please try again.";
      toast.error(errorMessage);
    }
  };

  const reSendOtp = async () => {
    try {
      console.log("resebnt");

      const response = await verifySendEmail({ email: emailId });
      if (response.success) {
        toast.success(response.message);
      } else {
        toast.error(response.message);
      }
      console.log("response", response);
    } catch (error) {}
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={cn("flex flex-col gap-6", className)}
        {...props}
      >
        <div className="flex flex-col items-center gap-2 text-center">
          <h1 className="text-2xl font-bold">OTP Verification</h1>
          <p className="text-muted-foreground text-sm text-balance">
            One Time Password (OTP) has been sent via Email to{" "}
            <span className="text-primary">{emailId}</span> Enter the OTP below
            to verify it.
          </p>
        </div>

        <div className="grid gap-6">
          <OTPInput
            value={otp}
            onChange={(value) => {
              setOtp(value);
              setValue("otp", value, { shouldValidate: true });
            }}
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
          {errors.otp && (
            <p className="text-red-500 text-sm text-center mt-2">
              {errors.otp.message}
            </p>
          )}

          {/* Submit Button */}
          <Buttons
            className="bg-[#DB4444] text-[#fff] cursor-pointer disabled:opacity-60"
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </Buttons>
        </div>
      </form>
      <div className="text-center text-sm">
        Didn’t get the code?{" "}
        <Buttons className="cursor-pointer text-primary" onClick={reSendOtp}>
          Resend OTP
        </Buttons>
      </div>
    </>
  );
}
