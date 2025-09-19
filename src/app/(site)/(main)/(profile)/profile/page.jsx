import Buttons from "@/src/components/ui/button/Buttons";
import { Input } from "@/src/components/ui/input";
import { Label } from "@/src/components/ui/label";
import React from "react";

const MyAccount = () => {
  return (
    <>
      <h1 className="text-primary font-[20px] font-medium">Edit Profile</h1>
      <div className="grid grid-cols-12 mt-3 gap-7">
        <div className="col-span-6">
          <Label>Name</Label>
          <Input
            placeholder="Name"
            className="border-b-1 border-t-0 border-r-0 border-l-0 border-[#ccc] 
              focus:border-b-[#ccc] focus:ring-0 focus:ring-transparent
              rounded-none px-3 py-2"
          />
        </div>
        <div className="col-span-6">
          <Label>Email</Label>
          <Input
            placeholder="Email"
            className="border-b-1 border-t-0 border-r-0 border-l-0 border-[#ccc] 
              focus:border-b-[#ccc] focus:ring-0 focus:ring-transparent
              rounded-none px-3 py-2"
          />
        </div>
        <div className="col-span-6">
          <Label>Address</Label>
          <Input
            placeholder="Address"
            className="border-b-1 border-t-0 border-r-0 border-l-0 border-[#ccc] 
              focus:border-b-[#ccc] focus:ring-0 focus:ring-transparent
              rounded-none px-3 py-2"
          />
        </div>
      </div>
      <div className="grid grid-cols-12 mt-3 gap-7">
        <div className="col-span-3">
          <Buttons className="bg-primary cursor-pointer text-[#fff]">
            SUBMIT
          </Buttons>
        </div>
      </div>
    </>
  );
};

export default MyAccount;
