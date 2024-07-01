"use client";
import React from "react";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { useRouter } from "next/navigation";
import { signOut, useSession } from "next-auth/react";

export default function Dashboard() {
  const router = useRouter();

  const handleProposeIdeas = () => {
    router.push("/user_ideas");
  };

  const handleProvideSolution = () => {
    router.push("/user_solution");
  };

  const handleImproviseServices = () => {
    router.push("/user_improvise");
  };

  const handleResolveIssues = () => {
    router.push("/user_resolve");
  };
  return (
    
    <main className="flex min-h-screen flex-col items-center p-24 bg-[#1c1c62] text-white">
      <div className="relative">
        <h1 className="text-5xl mb-8 font-serif tracking-tight">Choose your way of innovation!</h1>
      </div>
      <div className="mt-5 flex flex-col space-y-6 w-full max-w-md">
        <button  onClick={handleProposeIdeas}
        className="bg-[#262686] hover:bg-blue-700 text-white py-5 px-12 text-lg rounded-full w-full border-2 border-white transform transition-transform duration-200 hover:scale-110">
          Propose Ideas for New Services
        </button>
        <button onClick={handleProvideSolution}
        className="bg-[#262686] hover:bg-blue-700 text-white py-5 px-12 text-lg rounded-full w-full border-2 border-white transform transition-transform duration-200 hover:scale-110">
          Provide the Implementation/Solution 
        </button>
        <button onClick={handleImproviseServices} 
        className="bg-[#262686] hover:bg-blue-700 text-white py-5 px-12 text-lg rounded-full w-full border-2 border-white transform transition-transform duration-200 hover:scale-110">
          Improvise Existing Services
        </button>
        <button onClick={handleResolveIssues}
        className="bg-[#262686] hover:bg-blue-700 text-white py-5 px-12 text-lg rounded-full w-full border-2 border-white transform transition-transform duration-200 hover:scale-110">
          Resolve the Issues
        </button>
      </div>
    </main>
  );
}
