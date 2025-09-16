"use client";

import { cn } from "@/lib/utils";
import { Input } from "@/src/components/ui/input";
import { Label } from "@/src/components/ui/label";
import Buttons from "../../components/ui/button/Buttons";
import Link from "next/link";
import { signUp } from "@/src/services/Auth/authServise";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { validationSignUp } from "@/utilit/fromValidation";
import toast from "react-hot-toast";

export function SignUpForm({ className, ...props }) {
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
        <h1 className="text-2xl font-bold">Create an account</h1>
        <p className="text-muted-foreground text-sm text-balance">
          Enter your details below
        </p>
      </div>

      <div className="grid gap-6">
        {/* Name */}
        <div className="grid gap-3">
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            type="text"
            placeholder="Enter your name here"
            className="border-b-1 border-t-0 border-r-0 border-l-0 border-[#ccc] 
              focus:border-b-[#ccc] focus:ring-0 focus:ring-transparent
              rounded-none px-3 py-2"
            {...register("name")}
          />
          {errors.name && (
            <p className="text-red-500 text-sm">{errors.name.message}</p>
          )}
        </div>

        {/* Email */}
        <div className="grid gap-3">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            autoComplete="off"
            placeholder="Enter your email here"
            className="border-b-1 border-t-0 border-r-0 border-l-0 border-[#ccc] 
              focus:border-b-[#ccc] focus:ring-0 focus:ring-transparent
              rounded-none px-3 py-2"
            {...register("email")}
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
        </div>

        {/* Password */}
        <div className="grid gap-3">
          <div className="flex items-center">
            <Label htmlFor="password">Password</Label>
            <a
              href="#"
              className="ml-auto text-sm underline-offset-4 hover:underline"
            >
              Forgot your password?
            </a>
          </div>
          <Input
            id="password"
            type="password"
            autoComplete="off"
            placeholder="Enter your password"
            className="border-b-1 border-t-0 border-r-0 border-l-0 border-[#ccc] 
              focus:border-b-[#ccc] focus:ring-0 focus:ring-transparent
              rounded-none px-3 py-2"
            {...register("password")}
          />
          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <Buttons
          className="bg-[#DB4444] text-[#fff] cursor-pointer disabled:opacity-60"
          type="submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting..." : "Submit"}
        </Buttons>

        {/* Divider */}
        <div className="after:border-border relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t">
          <span className="bg-background bg-[#ffff] text-muted-foreground relative z-10 px-2">
            Or continue with
          </span>
        </div>
      </div>

      <div className="text-center text-sm">
        Already have account?{" "}
        <Link href="/login" className="underline underline-offset-4">
          Login
        </Link>
      </div>
    </form>
  );
}
