"use client";
import HamburgMenu from "@/components/Dashboard/HamburgMenu";
import Menu from "@/components/Dashboard/Menu";
import SubjectsList from "@/components/Dashboard/SubjectsList";
import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";

function page() {
  return (
    <div className="flex">
      <div className="hidden sm:block">
        <Menu />
      </div>
      <div className="flex w-full flex-col text-center p-6 bg-gray-50 h-screen ">
        <HamburgMenu/>
        <SubjectsList />
      </div>
    </div>
  );
}

export default page;
