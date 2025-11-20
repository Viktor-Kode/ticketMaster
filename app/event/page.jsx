"use client";

import { useEffect, useState } from "react";
import { db } from "../firebase/config";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { useRouter } from "next/navigation";
import { Heart, Calendar, Tag, User, Search, Tickets } from "lucide-react";
import Link from "next/link";

export default function Event() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const q = query(collection(db, "events"), orderBy("createdAt", "desc"));
        const snapshot = await getDocs(q);
        const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setEvents(data);
      } catch (err) {
        console.error("Error fetching events:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  return (
    <>
      {/* Header */}
      <div className="flex justify-between items-center font-semibold text-xl text-white h-20 bg-gray-800 px-4">
        <h1>My Events</h1>
        <Link href={"/help"}>Help</Link>
      </div>

      {/* Upcoming / Past */}
      <div className="flex justify-around bg-gray-100 py-4 mb-4">
        <h1>UPCOMING ({events.length})</h1>
        <h1>PAST (0)</h1>
      </div>

      {/* Events Grid */}
      {loading ? (
        <div className="text-center mt-10 text-gray-500">Loading events...</div>
      ) : (
        <div className="p-4 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-20">
          {events.map((event) => (
            <div
              key={event.id}
              onClick={() => router.push(`/event/${event.id}`)}
              className="relative h-64 rounded-lg shadow-lg cursor-pointer overflow-hidden group"
            >
              {/* Background image from Cloudinary */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
                style={{ backgroundImage: `url(${event.image})` }}
              />

              {/* Overlay text */}
              <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-end p-4 text-white">
                <h2 className="text-lg font-bold">{event.artistName}</h2>
                <h3 className="text-md font-semibold">{event.eventName}</h3>
                <p className="text-sm">{event.location}</p>
                <p className="text-sm">
                  {new Date(event.date).toLocaleDateString()} | Tickets: {event.ticketCount}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Bottom Navbar */}
      <nav className="fixed bottom-0 left-0 w-full bg-white text-gray-600 border-t border-gray-700 flex justify-around items-center py-3 z-50">
        <Link href={"/"}>
          <div className="flex flex-col items-center text-xs">
            <Search size={22} />
            <span>Discover</span>
          </div>
        </Link>
        <Link href={"/favorite"}>
          <div className="flex flex-col items-center text-xs">
            <Heart size={22} />
            <span>Favorite</span>
          </div>
        </Link>
        <Link href={"/event"}>
          <div className="flex flex-col items-center text-xs">
            <Tickets size={22} color="blue" />
            <span className="text-blue-600">My Event</span>
          </div>
        </Link>
        <Link href={"/sell"}>
          <div className="flex flex-col items-center text-xs">
            <Tag size={22} />
            <span>Sell</span>
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
