import { cn } from "@/lib/utils";
import { Input } from "@/src/components/ui/input";
import { Label } from "@/src/components/ui/label";
import Buttons from "../../components/ui/button/Buttons";
import Link from "next/link";
export function SignUpForm({ className, ...props }) {
  return (
    <form className={cn("flex flex-col gap-6", className)} {...props}>
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-bold">Create an account</h1>
        <p className="text-muted-foreground text-sm text-balance">
          Enter your details below
        </p>
      </div>
      <div className="grid gap-6">
        <div className="grid gap-3">
          <Label htmlFor="email">Name</Label>
          <Input
            id="name"
            type="name"
            className="border-b-1 border-t-0 border-r-0 border-l-0 border-[#ccc] 
    focus:border-b-[#ccc] 
    focus:ring-0 focus:ring-transparent
    rounded-none px-3 py-2"
            placeholder="Enter your name here"
            required
          />
        </div>
        <div className="grid gap-3">
          <Label htmlFor="email">Email</Label>
          <Input
            id="name"
            type="email"
            autoComplete="off"
            className="border-b-1 border-t-0 border-r-0 border-l-0 border-[#ccc] 
    focus:border-b-[#ccc] 
    focus:ring-0 focus:ring-transparent
    rounded-none px-3 py-2"
            placeholder="Enter your name here"
            required
          />
        </div>
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
            autoComplete="off"
            type="password"
            placeholder="Enter your password"
            required
            className="border-b-1 border-t-0 border-r-0 border-l-0 border-[#ccc] 
    focus:border-b-[#ccc] 
    focus:ring-0 focus:ring-transparent
    rounded-none px-3 py-2"
          />
        </div>
        <Buttons
          className="bg-[#DB4444] text-[#fff] cursor-pointer"
          type="submit"
        >
          Login
        </Buttons>
        <div className="after:border-border relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t">
          <span className="bg-background bg-[#ffff] text-muted-foreground relative z-10 px-2">
            Or continue with
          </span>
        </div>
      </div>
      <div className="text-center text-sm">
        Already have account ?{" "}
        <Link href="/login" className="underline underline-offset-4">
          Login
        </Link>
      </div>
    </form>
  );
}
