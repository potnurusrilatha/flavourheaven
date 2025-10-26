'use client'
import DisplayRecipe from "@/components/DisplayRecipe";
import { useUserContext } from "@/utils/contexts";
import { UserContextType } from "@/utils/types";

const ProfilePage = () => {
  const { user } = useUserContext() as UserContextType;

  if (!user) {
    return (
      <p className="text-center mt-20 text-blue-800">
        Please log in to view your profile.
      </p>
    );
  }

  return (
    <div className="grow p-6 bg-blue-50 min-h-screen">
      
      {/* Favourite Category */}
      <div className="mt-4">
        <p className="font-bold text-center text-xl text-blue-900">
          {user.name ? `${user.name}'s Favourite Category:` : "Favourite Category:"}
        </p>
        <p className="text-center italic font-bold text-2xl m-4 text-blue-800">
          {user.favouriteCategory || "None"}
        </p>
      </div>

      {/* Favourite Recipes */}
      <div className="mt-6">
        <p className="font-bold text-center text-xl text-blue-900">
          {user.name ? `${user.name}'s Favourite Recipes:` : "Favourite Recipes:"}
        </p>

        {user.favouriteRecipes.length === 0 ? (
          <p className="text-center italic font-bold text-2xl m-4 text-blue-800">
            Add favourites that satisfy your cravings
          </p>
        ) : (
          <div>
            <p className="text-center italic font-bold text-2xl m-8 text-blue-800">
              Here are the favourite recipes of {user.name}:
            </p>

            {/* Grid layout for recipes */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {user.favouriteRecipes.map((recipe, index) => (
                <div key={index} className="rounded-xl p-4 hover:scale-105">
                  <DisplayRecipe meals={[recipe]} category={recipe.category} />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfilePage;
