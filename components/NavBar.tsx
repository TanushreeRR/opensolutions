"use client";
import React from "react";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";

const Navbar = () => {
  const { data: session }: any = useSession();
  return (
    <div>
      <ul className="flex justify-between px-4 py-2 m-0 item-center bg-[#262686]">
        <div>
          <Link href="/">
            <li className="font-bold text-lg">Home</li>
          </Link>
        </div>
        <div className="flex gap-5">
          {!session ? (
            <>
              <Link href="/login">
                <li className="font-bold text-lg">Login</li>
              </Link>
              <Link href="/register">
                <li className="font-bold text-lg">Register</li>
              </Link>
            </>
          ) : (
            <>
              {session.user?.email}
              <li>
                <button
                  onClick={() => {
                    signOut({ callbackUrl: 'http://localhost:3000' })
                  }}
                  className="p-2 px-5 -mt-1 bg-blue-800 rounded-full"
                >
                  Logout
                </button>
              </li>
            </>
          )}
        </div>
      </ul>
    </div>
  );
};

export default Navbar;