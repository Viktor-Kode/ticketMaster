"use client";

import { ChevronRight, Heart, Calendar, Tag, User, Search, Tickets } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <header className="bg-black text-white py-4 px-4 md:px-8">
        {/* Location + Date */}
        <div className="flex justify-between items-center font-semibold mb-3 border-b border-gray-600 pb-2">
          <div className="flex items-center gap-1">
            <h1>Atlanta, GA</h1>
            <ChevronRight size={18} />
          </div>
          <h1>All Dates</h1>
        </div>

        {/* Search Input */}
        <div className="flex justify-center w-full mt-2">
          <input
            type="text"
            className="w-full max-w-lg text-gray-700 placeholder-gray-400 px-3 h-11 rounded-md bg-white focus:outline-none"
            placeholder="Search by Artist, Event or Venue"
          />
        </div>

        {/* Category Buttons */}
        <div className="flex flex-wrap gap-2 mt-3">
          <button className="hbtn bg-white text-black px-4 py-2 rounded-md font-semibold hover:bg-gray-200">
            Concerts
          </button>
          <button className="hbtn bg-white text-black px-4 py-2 rounded-md font-semibold hover:bg-gray-200">
            Sports
          </button>
          <button className="hbtn bg-white text-black px-4 py-2 rounded-md font-semibold hover:bg-gray-200">
            Arts, Theater & Comedy
          </button>
        </div>

        {/* Hero */}
        <div className="mt-45">
          <h1 className="font-semibold text-2xl ml-1 md:ml-6">
            Eagles Live at Sphere
          </h1>
          <button className="rounded-md font-semibold ml-1 md:ml-6 mt-2 px-4 py-2 bg-blue-700 text-white hover:bg-blue-800 transition">
            Find Tickets
          </button>
        </div>
      </header>

      <article className="pb-20">
        {/* Error */}
        <div className="text-center mt-5 text-gray-600 border-b p-6">
          <h1>Something went wrong</h1>
        </div>

        {/* Popular Near You */}
        <div className="px-4 md:px-8 mt-6 space-y-8">
          <h1 className="text-center font-semibold text-xl mb-4">
            POPULAR NEAR YOU
          </h1>

          {/* Concerts */}
          <section>
            <div className="flex justify-between">
              <h1 className="text-lg font-semibold mb-2">Concerts</h1>
              <h1 className="text-lg font-semibold mb-2 text-blue-700">see all</h1>
            </div>
            <div className="rounded-lg overflow-hidden shadow-md">
              <Image
                src="/concert.jpg"
                alt="Concert"
                height={400}
                width={800}
                className="w-full object-cover"
              />
            </div>
            <div className="mt-3">
              <h1 className="text-gray-500 text-xs">R&B ONLY LIVE- Chicago, IL</h1>
              <h1 className="font-semibold text-xl">House of Blues Chicago</h1>
            </div>
          </section>

          {/* Sports */}
          <section>
            <div className="flex justify-between">
              <h1 className="text-lg font-semibold mb-2">Sports</h1>
              <h1 className="text-lg font-semibold mb-2 text-blue-700">see all</h1>
            </div>
            <div className="rounded-lg overflow-hidden shadow-md">
              <Image
                src="/sport.jpg"
                alt="Sports"
                height={400}
                width={800}
                className="w-full object-cover"
              />
            </div>
            <div className="mt-3">
              <h1 className="text-gray-500 text-xs">NBA</h1>
              <h1 className="font-semibold text-xl">Phoenix Suns</h1>
            </div>
          </section>

          {/* Arts, Theater & Comedy */}
          <section>
            <div className="flex justify-between">
              <h1 className="text-lg font-semibold mb-2">
                Arts, Theater & Comedy
              </h1>
              <h1 className="text-lg font-semibold mb-2 text-blue-700">see all</h1>
            </div>
            <div className="rounded-lg overflow-hidden shadow-md">
              <Image
                src="/art.jpg"
                alt="Arts, Theater & Comedy"
                height={400}
                width={800}
                className="w-full object-cover"
              />
            </div>
            <div className="mt-3">
              <h1 className="text-gray-500 text-xs">Musical</h1>
              <h1 className="font-semibold text-xl">Hamlilton (Touring)</h1>
            </div>
          </section>
        </div>
      </article>

      {/* Fixed Bottom Navbar */}
      <nav className="fixed bottom-0 left-0 w-full bg-white text-gray-600 border-t border-gray-700 flex justify-around items-center py-3 z-50">
        <Link href={'/'}>
        <div className="flex flex-col items-center text-xs">
          <Search size={22} color="blue" />
          <span className="text-blue-600">Discover</span>
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
          <Tag size={22} />
          <span>Sell</span>
        </div></Link>
        <div className="flex flex-col items-center text-xs">
          <User size={22} />
          <span>My Account</span>
        </div>
      </nav>
    </>
  );
}
