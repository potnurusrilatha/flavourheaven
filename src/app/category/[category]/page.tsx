import DisplayRecipe from "@/components/DisplayRecipe"
import { getCategoryRecipes } from "@/utils/function"
import { MealType } from "@/utils/types"

interface Props {
  params: { category: string }
}

const SelectedCategory = async ({ params }: Props) => {
  const { category } = params
  const meals: MealType[] = await getCategoryRecipes(category)

  return (
    <div className="p-6 bg-blue-50 min-h-screen">
      <h1 className="text-3xl font-bold text-blue-900 mb-6 text-center">{category} Recipes</h1>
      {meals.length > 0 ? (
        <DisplayRecipe meals={meals} category={category} />
      ) : (
        <p className="text-center text-blue-800 text-xl">No recipes found for {category}</p>
      )}
    </div>
  )
}

export default SelectedCategory
