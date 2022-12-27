import { Recipe } from "./types";

export const getRecipesFromLocalStorage = ():Recipe[] =>{
  const data = localStorage.getItem('history');
  return data ? JSON.parse(data) : [];
}

export const addRecipeToLocalStorage = (recipe:Recipe):Recipe[] =>{
  const recipes = getRecipesFromLocalStorage();
  const updatedRecipes = [recipe,...recipes];
  localStorage.setItem('history',JSON.stringify(updatedRecipes));
  return updatedRecipes;
}

export const findRecipeInLocalStorage = (id:number):Recipe|undefined =>{
  const recipes = getRecipesFromLocalStorage();
  return recipes.find(recipe=>recipe.id===id);
}