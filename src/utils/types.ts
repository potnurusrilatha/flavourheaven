export interface MealType {
  idMeal: string,
  strMeal: string,
  strMealThumb : string
  strCategory?:string
}


export interface FavouriteRecipeType extends MealType {
  category: string;   
}

export interface UserType {
  name: string;
  favouriteCategory: string | null;
  favouriteRecipes: FavouriteRecipeType[];
}

export interface UserContextType {
  user : UserType | null,
  setUser : (user:UserType|null) => void
  setFavouriteCategory: (category: string) => void;
  addFavouriteRecipe: (recipe: FavouriteRecipeType) => void;
  removeFavouriteRecipe: (id: string) => void;
}

export interface NavItemsType {
  name:string,
  link:string
}

export interface CategoryType {
  idCategory: string
  strCategory: string
  strCategoryThumb: string
  strCategoryDescription: string
}

export interface RecipeType {
  id: string,
  name: string,
  category: string,
  area: string,
  instructions: string,
  image:string,
  video : string,
  requiredIngredients:string[]
}


export interface FeatureType {
  title: string
  desc: string
  icon: string
}

export interface ChefType {
  name: string
  role: string
  img: string
}

export interface TestimonialType {
  quote: string
  name: string
  img: string
}
export interface JoinCommunityType {
  heading: string
  description: string
  buttonText: string
  buttonLink: string
}

export type Dish = {
  img: string;
  title?: string; 
  desc?: string; 
};

export type DishesType = Dish[];


