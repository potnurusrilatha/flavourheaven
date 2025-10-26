'use client'

import { getAllCategory } from "@/utils/function"
import { CategoryType, UserContextType } from "@/utils/types"
import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { useUserContext } from "@/utils/contexts"

const CategoryPage = () => {
  const [allCategory, setAllCategory] = useState<CategoryType[] | null>(null)
  const { user, setFavouriteCategory } = useUserContext() as UserContextType

  useEffect(() => {
    const fetchCategory = async () => {
      const data = await getAllCategory()
      setAllCategory(data || [])
    }
    fetchCategory()
  }, [])

  return (
    <div className="p-6 bg-blue-50 min-h-screen">
      <h1 className="text-4xl font-bold text-center text-blue-900 mb-8">Menu</h1>
      {allCategory && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {allCategory.map((item, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col hover:scale-105 transition-transform">
              <Link href={`/category/${item.strCategory.toLowerCase()}`}>
                <div className="relative h-60 w-full">
                  <Image src={item.strCategoryThumb} alt={item.strCategory} fill className="object-cover" />
                </div>
                <h2 className="text-2xl font-bold italic text-blue-900 p-4">{item.strCategory}</h2>
              </Link>
              <p className="p-4 text-blue-800">{item.strCategoryDescription}</p>
              {user && (
                <div className="flex justify-end p-4">
                  <Image
                    src={user.favouriteCategory?.toLowerCase() === item.strCategory.toLowerCase()
                      ? "/favourite_icon.png"
                      : "/unfavourite_icon.png"
                    }
                    alt="fav"
                    width={40}
                    height={40}
                    className="cursor-pointer"
                    onClick={() => setFavouriteCategory(item.strCategory)}
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default CategoryPage
