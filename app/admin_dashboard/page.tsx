"use client";
import React from "react";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const router = useRouter();

const handleClick = () => {
  router.push("/admin_user_page");
}

const handleSecondClick = () => {
  router.push("/admin_submission_view");
}

  return (
    <main className="flex min-h-screen flex-col items-center p-24 bg-[#1c1c62] text-white">
      <div className="relative">
        <h1 className="text-5xl mb-8 font-serif tracking-tight">Admin</h1>
      </div>
      <div className="flex space-x-10 mt-14">
  <button onClick={handleClick} className="px-8 py-4 text-2xl rounded-full bg-[#3c3ccb] text-white hover:bg-blue-500 mt-5 transform transition-transform duration-200 hover:scale-110">Update user pages</button>
  <button onClick={handleSecondClick} className="px-8 py-4 text-2xl rounded-full bg-[#3c3ccb] text-white hover:bg-blue-500 mt-5 transform transition-transform duration-200 hover:scale-110">User submissions</button>
     </div>
      
    </main>
  );
}