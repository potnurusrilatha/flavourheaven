'use client';
import { useUserContext } from "@/utils/contexts";
import { MealType, FavouriteRecipeType, UserContextType } from "@/utils/types";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

type RecipeProp = {
  meals: (MealType | FavouriteRecipeType)[];
  category?: string;
};

const DisplayRecipe = ({ meals, category }: RecipeProp) => {
  const location = usePathname();
  const isHome = ["/", "/profile"].includes(location);

  const { user, addFavouriteRecipe, removeFavouriteRecipe } =
    useUserContext() as UserContextType;

  const getCategory = (item: MealType | FavouriteRecipeType) => {
    return "category" in item ? item.category : category || "";
  };

  return (
    <div className="max-w-7xl mx-auto my-8 px-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {meals.map((item, index) => (
          <div
            key={index}
            className="bg-gradient-to-r from-blue-50 via-white to-blue-500 
                       text-blue-900 rounded-3xl shadow-2xl border border-blue-600
                       flex flex-col items-center overflow-hidden transition-transform duration-300
                       hover:scale-105 hover:shadow-lg"
          >
          
            <Link
              href={
                isHome
                  ? `category/${getCategory(item)}/${item.idMeal}`
                  : `${getCategory(item)}/${item.idMeal}`
              }
              className="uppercase italic font-bold m-4 text-blue-900 hover:text-blue-700 transition"
            >
              {item.strMeal}
            </Link>

           
            <Image
              className="h-56 w-full object-cover rounded-t-3xl"
              src={item.strMealThumb}
              alt={item.strMeal}
              width={300}
              height={300}
            />

      
            <Image
              src={
                user?.favouriteRecipes.some((r) => r.idMeal === item.idMeal)
                  ? "/favourite_icon.png"
                  : "/unfavourite_icon.png"
              }
              alt="fav"
              className="m-4 w-10 h-10 cursor-pointer"
              onClick={() =>
                user?.favouriteRecipes.some((r) => r.idMeal === item.idMeal)
                  ? removeFavouriteRecipe(item.idMeal)
                  : addFavouriteRecipe({
                      ...item,
                      category: getCategory(item),
                    })
              }
              width={40}
              height={40}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default DisplayRecipe;
