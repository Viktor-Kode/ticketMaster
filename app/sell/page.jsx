"use client";
import {  Heart, Tag, User, Search, Tickets } from "lucide-react";
import Link from "next/link";
export default function Sell() {
  return (
    <>
    <div className="min-h-screen flex flex-col items-center pt-10 bg-gray-100 px-4">
      <h1 className="text-2xl font-semibold mb-6">Set Countdown Timer</h1>

      <form className="flex flex-col items-center gap-6">
        {/* Inputs in one line */}
        <div className="flex gap-3">
          <input
            type="number"
            placeholder="Days"
            className="w-16 h-12 text-center border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="number"
            placeholder="Hours"
            className="w-16 h-12 text-center border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="number"
            placeholder="Minutes"
            className="w-16 h-12 text-center border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="number"
            placeholder="Seconds"
            className="w-16 h-12 text-center border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Start button */}
        <button
          type="button"
          className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-md transition"
        >
          Start Countdown
        </button>
      </form>
    </div>
     {/* Fixed Bottom Navbar */}
      <nav className="fixed bottom-0 left-0 w-full bg-white text-gray-600 border-t border-gray-700 flex justify-around items-center py-3 z-50">
        <Link href={'/'}>
        <div className="flex flex-col items-center text-xs">
          <Search size={22}  />
          <span >Discover</span>
        </div>
        </Link>
        <Link href={'/favorite'}>
         <div className="flex flex-col items-center text-xs">
          <Heart size={22}  />
          <span>Favorite</span>
        </div>
        </Link>
       
        <Link href={'/event'}>
         <div className="flex flex-col items-center text-xs">
          <Tickets size={22}  />
          <span>My Event</span>
        </div>
        </Link>
        <Link href={'/sell'}>
        <div className="flex flex-col items-center text-xs">
          <Tag size={22} color="blue" />
          <span className="text-blue-600">Sell</span>
        </div>
        </Link>
        <div className="flex flex-col items-center text-xs">
          <User size={22} />
          <span>My Account</span>
        </div>
      </nav>
      </>
  );
}
