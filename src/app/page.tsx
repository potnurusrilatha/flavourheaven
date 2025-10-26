'use client'

import DisplayRecipe from "@/components/DisplayRecipe";
import DisplayCategory from "@/components/DisplayRecipe";
import { useUserContext } from "@/utils/contexts";
import { getCategoryRecipes, getRandomRecipe } from "@/utils/function";
import { MealType, UserContextType } from "@/utils/types";
import { useEffect, useState } from "react";

export default function Home() {
  const { user } = useUserContext() as UserContextType;
  const [recipe, setRecipe] = useState<MealType[] | null>(null);

  useEffect(() => {
    const fetchCategory = async () => {
      if (user?.favouriteCategory) {
        const data = await getCategoryRecipes(user.favouriteCategory);
        setRecipe(data);
      } else {
        const data = await getRandomRecipe();
        setRecipe(data);
      }
    };
    fetchCategory();
  }, [user]);

  if (!user) return null; 

  return (
    <main className="bg-blue-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col gap-12">

        {/* Welcome Card */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 text-center border border-blue-200">
          <h1 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-4">
            Welcome, {user.name}!
          </h1>
          <p className="text-blue-800 text-lg md:text-xl">
            {user.favouriteCategory
              ? `Here are some ${user.favouriteCategory} recipes you might enjoy!`
              : "Here's a random meal recommendation for you."}
          </p>
        </div>

        {/* Favorite Category Recipes */}
        {user.favouriteCategory && recipe && (
          <section>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6 text-center">
              {user.favouriteCategory} Recipes
            </h2>
            <DisplayCategory meals={recipe} category={user.favouriteCategory} />
          </section>
        )}

        {/* Random Meal */}
        {!user.favouriteCategory && recipe && (
          <section>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6 text-center">
              Random Meal Recommendation
            </h2>
            <DisplayRecipe meals={recipe} category={recipe[0].strCategory} />
          </section>
        )}
      </div>
    </main>
  );
}
