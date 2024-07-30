"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";


const Register = () => {
  const [error, setError] = useState("");
  const [submittedMessage, setSubmittedMessage] = useState("");
  const router = useRouter();
  

  
  
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const name = e.target[0].value;
    const contact = e.target[1].value;
    const email = e.target[2].value;
    const title = e.target[3].value;
    const description = e.target[4].value;

    try {
      const res = await fetch("/api/improvise", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          contact,
          email,
          title,
          description,
        }),
      });
      
      if (res.status === 200) {
        setError("");
        setSubmittedMessage("Form Submitted"); // Set submission confirmation message
        setTimeout(() => {
          setSubmittedMessage(""); // Clear the message after 3 seconds
          router.push("/user_dashboard"); // Redirect to the dashboard
        }, 3000); // Delay in milliseconds
      }
    } catch (error) {
      setError("Error, try again");
      console.log(error);
    }
  };
  return (
    
      <div className="flex min-h-screen flex-col items-center justify-between p-24  bg-[#1c1c62] text-white">
        <div className="bg-white p-8 rounded shadow-md w-97">
        {submittedMessage && <p className="text-green-500 font-semibold text-center text-4xl mb-4">{submittedMessage}</p>}
          
          <h2 className="text text-center mb-8 text-black">Mention the product/service name in title, and write about the improvisation in the description.</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              className="w-full border border-gray-300 text-black rounded px-3 py-2 mb-4 focus:outline-none focus:border-blue-400 focus:text-black"
              placeholder="Name"
              required
            />
            <input
              type="text"
              className="w-full border border-gray-300 text-black rounded px-3 py-2 mb-4 focus:outline-none focus:border-blue-400 focus:text-black"
              placeholder="Contact"
              required
            />
            <input
              type="text"
              className="w-full border border-gray-300 text-black rounded px-3 py-2 mb-4 focus:outline-none focus:border-blue-400 focus:text-black"
              placeholder="Email"
              required
            />
            <input
              type="text"
              className="w-full border border-gray-300 text-black rounded px-3 py-2 mb-4 focus:outline-none focus:border-blue-400 focus:text-black"
              placeholder="Title"
              required
            />
            <textarea
              className="w-full border border-gray-300 text-black rounded px-3 py-3 mb-4 focus:outline-none focus:border-blue-400 focus:text-black"
              placeholder="Description"
              required
              rows={4}
             ></textarea>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
            >
              {" "}
              Submit
            </button>
            <p className="text-red-600 text-[16px] mb-4">{error && error}</p>
          </form>
      
          
        </div>
      </div>
    
  );
};

export default Register;