"use client";

import { cn } from "@/lib/utils";
import { Input } from "@/src/components/ui/input";
import { Label } from "@/src/components/ui/label";
import Buttons from "../../components/ui/button/Buttons";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup"; // <- create this file
import { loginSchema } from "@/utilit/fromValidation";
import { userLogin } from "@/src/services/Auth/authServise";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { setToken, setUser, setUserId } from "@/src/features/auth/authSlice";
import { useDispatch } from "react-redux";

export function LoginForm({ className, ...props }) {
  const dispatch = useDispatch();
  const route = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = async (data) => {
    console.log("Form Data:", data);
    try {
      const response = await userLogin(data);
      console.log("response", response);
      if (response.success) {
        dispatch(setUser(response.data));
        dispatch(setToken(response.token));
        dispatch(setUserId(response.data._id));
        toast.success(response.message);
        route.push("/profile");
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

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={cn("flex flex-col gap-6", className)}
      {...props}
    >
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-bold">Login to your account</h1>
        <p className="text-muted-foreground text-sm text-balance">
          Enter your email below to login to your account
        </p>
      </div>

      <div className="grid gap-6">
        {/* Email */}
        <div className="grid gap-3">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="m@example.com"
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
            placeholder="Enter password here"
            className="border-b-1 border-t-0 border-r-0 border-l-0 border-[#ccc] 
              focus:border-b-[#ccc] focus:ring-0 focus:ring-transparent
              rounded-none px-3 py-2"
            {...register("password")}
          />
          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password.message}</p>
          )}
        </div>

        {/* Submit */}
        <Buttons
          className="bg-[#DB4444] text-white cursor-pointer"
          type="submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Logging in..." : "Login"}
        </Buttons>

        {/* Divider */}
        <div className="after:border-border relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t">
          <span className="bg-background bg-white text-muted-foreground relative z-10 px-2">
            Or continue with
          </span>
        </div>
      </div>

      <div className="text-center text-sm">
        Don&apos;t have an account?{" "}
        <a href="#" className="underline underline-offset-4">
          Sign up
        </a>
      </div>
    </form>
  );
}
