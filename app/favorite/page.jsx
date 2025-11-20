import {  Heart, Calendar, Tag, User, Search } from "lucide-react";
import Link from "next/link";

export default function Favorite(){
    return(
        <>

         <nav className="fixed bottom-0 left-0 w-full bg-white text-gray-600 border-t border-gray-700 flex justify-around items-center py-3 z-50">
        <Link href={'/'}>
        <div className="flex flex-col items-center text-xs">
          <Search size={22}  />
          <span>Discover</span>
        </div>
        </Link>
        <Link href={'/favorite'}>
         <div className="flex flex-col items-center text-xs">
          <Heart size={22} color="blue" />
          <span className="text-blue-600">Favorite</span>
        </div>
        </Link>
       
        <div className="flex flex-col items-center text-xs">
          <Calendar size={22} />
          <span>My Event</span>
        </div>
        <div className="flex flex-col items-center text-xs">
          <Tag size={22} />
          <span>Sell</span>
        </div>
        <div className="flex flex-col items-center text-xs">
          <User size={22} />
          <span>My Account</span>
        </div>
      </nav>
        </>
    )
}