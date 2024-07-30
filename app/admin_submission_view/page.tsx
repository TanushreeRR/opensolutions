"use client";
import React from "react";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { useRouter } from "next/navigation";
import { signOut, useSession } from "next-auth/react";

export default function Dashboard() {
  const router = useRouter();

  const handleProposeIdeas = () => {
    router.push("/admin_submission_view/ideas");
  };

  const handleProvideSolution = () => {
    router.push("/admin_submission_view/solutions");
  };

  const handleImproviseServices = () => {
    router.push("/admin_submission_view/improvisations");
  };

  const handleResolveIssues = () => {
    router.push("/admin_submission_view/resolve");
  };
  return (
    
    <main className="flex min-h-screen flex-col items-center p-24 bg-[#1c1c62] text-white">
      <div className="relative">
        <h1 className="text-2xl mb-8 font-serif tracking-tight">Click to view user submissions on:</h1>
      </div>
      <div className="mt-5 flex flex-col space-y-6 w-full max-w-md">
        <button  onClick={handleProposeIdeas}
        className="bg-[#262686] hover:bg-blue-700 text-white py-5 px-12 text-lg rounded-full w-full border-2 border-white transform transition-transform duration-200 hover:scale-110">
          Ideas for New Services
        </button>
        <button onClick={handleProvideSolution}
        className="bg-[#262686] hover:bg-blue-700 text-white py-5 px-12 text-lg rounded-full w-full border-2 border-white transform transition-transform duration-200 hover:scale-110">
          Solution for ideas 
        </button>
        <button onClick={handleImproviseServices} 
        className="bg-[#262686] hover:bg-blue-700 text-white py-5 px-12 text-lg rounded-full w-full border-2 border-white transform transition-transform duration-200 hover:scale-110">
          Improvisations on products
        </button>
        <button onClick={handleResolveIssues}
        className="bg-[#262686] hover:bg-blue-700 text-white py-5 px-12 text-lg rounded-full w-full border-2 border-white transform transition-transform duration-200 hover:scale-110">
          Resolution for issues
        </button>
      </div>
    </main>
  );
}
