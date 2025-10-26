'use client'
import { createContext, useContext, useState, useEffect } from "react";
import { UserType, UserContextType, FavouriteRecipeType } from "./types";

const UserContext = createContext<UserContextType | null>(null);

export const UserContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<UserType | null>(null);
  const [loading, setLoading] = useState(true);

  // Load user from localStorage when app starts
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  // Save user to localStorage whenever it changes
  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      localStorage.removeItem("user");
    }
  }, [user]);

  const setFavouriteCategory = (category: string) => {
    if (!user) return;
    const updatedUser = { ...user, favouriteCategory: category };
    setUser(updatedUser);
    localStorage.setItem("user", JSON.stringify(updatedUser));
  };

  const addFavouriteRecipe = (recipe: FavouriteRecipeType) => {
    if (!user) return;
    if (user.favouriteRecipes.some(r => r.idMeal === recipe.idMeal)) return;
    const updatedUser = { ...user, favouriteRecipes: [...user.favouriteRecipes, recipe] };
    setUser(updatedUser);
    localStorage.setItem("user", JSON.stringify(updatedUser));
  };

  const removeFavouriteRecipe = (id: string) => {
    if (!user) return;
    const updatedUser = {
      ...user,
      favouriteRecipes: user.favouriteRecipes.filter(r => r.idMeal !== id),
    };
    setUser(updatedUser);
    localStorage.setItem("user", JSON.stringify(updatedUser));
  };

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        setFavouriteCategory,
        addFavouriteRecipe,
        removeFavouriteRecipe,
        loading,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);
