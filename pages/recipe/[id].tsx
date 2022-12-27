import { useRouter } from "next/router"
import { useState,useEffect } from "react";
import RecipeBlock from "../../components/RecipeBlock";
import { findRecipeInLocalStorage } from "../../utils/localstorage";
import { Recipe } from "../../utils/types";

export default function RecipePage(){
  const router = useRouter();
  const {id} = router.query;
  const [recipe,setRecipe] = useState<Recipe>();

  useEffect(()=>{
    if(typeof id != 'string') return;
    const recipe = findRecipeInLocalStorage(parseInt(id));
    setRecipe(recipe);
  },[id])

  return (<div>
    {recipe && <RecipeBlock recipe={recipe}/>}
  </div>)
}