import { NavItems } from "@/data/navitems"
import Link from "next/link"

const Navigation = () => {
  return (
    <nav className="flex justify-center md:justify-around gap-6 p-4 bg-white shadow-md rounded-xl mx-4 my-2 md:my-8">
      {NavItems.map((item, index) => (
        <Link
          key={index}
          href={item.link}
          className="relative text-xl md:text-2xl font-bold uppercase text-amber-800 px-2 py-1 transition-all duration-300 hover:text-blue-900 hover:scale-105 hover:underline"
        >
          {item.name}
         
          <span className="absolute left-0 -bottom-1 w-0 h-1 bg-blue-900 transition-all duration-300 group-hover:w-full"></span>
        </Link>
      ))}
     
    </nav>
  )
}

export default Navigation
