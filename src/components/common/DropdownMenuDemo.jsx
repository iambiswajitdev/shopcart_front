"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/src/components/common/dropdown-menu";
import Buttons from "../ui/button/Buttons";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "@/src/features/auth/authSlice";
import { useRouter } from "next/navigation";
import { PROFILE_MENU } from "@/utilit/constant";
import Link from "next/link";
import { LogOut } from "lucide-react";
export function DropdownMenuDemo() {
  const user = useSelector((state) => state.auth.user);

  const route = useRouter();
  const dispatch = useDispatch();

  const handleLogout = async () => {
    await fetch("/api/logout");
    dispatch(logout());
    route.push("/login");
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Image
          src="/images/avter.jpg"
          className="cursor-pointer rounded-[50px]"
          width={40}
          height={40}
          alt=""
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className={cn(
          "w-56 rounded-md border bg-popover p-1 shadow-md text-popover-foreground bg-[#fff] border-[#ccc]",
          "data-[state=open]:animate-[fadeInScale_150ms_ease-out]",
          "data-[state=closed]:animate-[fadeOutScale_100ms_ease-in]"
        )}
        align="end"
      >
        <DropdownMenuLabel className="capitalize">
          {user?.name}
        </DropdownMenuLabel>
        <DropdownMenuGroup>
          {PROFILE_MENU.map((item, index) => (
            <DropdownMenuItem
              key={index}
              className="cursor-pointer hover:text-[#fff]"
            >
              <Link href={item.path}>{item.name}</Link>

              <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
        <DropdownMenuSeparator className="border-[#ccc] border-b-1" />
        <DropdownMenuItem
          onClick={handleLogout}
          className="cursor-pointer hover:text-[#fff]"
        >
          <LogOut />
          Log out
          <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
