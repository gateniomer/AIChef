import { Recipe } from "./types";

export const getRecipesFromLocalStorage = ():Recipe[] =>{
  const data = localStorage.getItem('history');
  return data ? JSON.parse(data) : [];
}

export const addRecipeToLocalStorage = (recipe:Recipe):Recipe[] =>{
  const recipes = getRecipesFromLocalStorage();

  //update if exist
  const index = recipes.findIndex(oldRecipe=>oldRecipe.id===recipe.id);
  if(index != -1){
    recipes.splice(index,1,recipe);
    localStorage.setItem('history',JSON.stringify(recipes));
    return recipes;
  }

  const updatedRecipes = [recipe,...recipes];
  localStorage.setItem('history',JSON.stringify(updatedRecipes));
  return updatedRecipes;
}

export const getRecipeFromLocalStorage = (id:string):Recipe|undefined =>{
  const recipes = getRecipesFromLocalStorage();
  return recipes.find(recipe=>recipe.id===id);
}

export const setFavoriteRecipeInLocalStorage = (id:number):boolean=>{
  const recipe = getRecipeFromLocalStorage(id);
  if(!recipe) return false;
  recipe.favorite = !recipe.favorite;
  addRecipeToLocalStorage(recipe);
  return recipe.favorite;
}