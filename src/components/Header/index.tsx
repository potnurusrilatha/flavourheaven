'use client'

import { UserCircleIcon } from "@heroicons/react/24/outline"
import { useUserContext } from "@/utils/contexts"
import { UserContextType } from "@/utils/types"
import Navigation from "../Navigation"
import Logout from "../Logout"


const Header = () => {
  const { user, setUser } = useUserContext() as UserContextType

  const handleLogout = () => {
    setUser(null)
    alert("Thank you for visiting!")
  }

  return (
    <header className="relative bg-gradient-to-r from-blue-50 via-white to-blue-100 shadow-md">
    
      <div className="max-w-7xl mx-auto px-6 py-6 flex justify-center">
        <h1 className="text-3xl md:text-4xl font-bold text-blue-900 flex items-center space-x-2">
          <span className="text-yellow-500 text-xl md:text-2xl">🍴</span>
          <span>FeastHub</span>
          <span className="text-yellow-500 text-xl md:text-2xl">🍴</span>
        </h1>
      </div>

      {user && (
        <div className="max-w-7xl mx-auto px-6 py-3 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0">
          <div className="flex-1">
            <Navigation />
          </div>

          <div className="flex items-center space-x-3">
            <UserCircleIcon className="h-6 w-6 text-blue-900" />
            <span className="font-medium text-blue-900">{user.name}</span>
            <Logout click={handleLogout} />
          </div>
        </div>
      )}
 
    </header>
  )
}

export default Header
