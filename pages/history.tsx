import { Recipe } from '../utils/types';
import { useEffect, useState } from 'react';
import { getRecipesFromLocalStorage } from '../utils/localstorage';
import { RecipeThumbnail } from '../components/Recipe';

export default function History(){
  const [recipes,setRecipes] = useState<Recipe[]>([]);

  useEffect(()=>{
    const recipes = getRecipesFromLocalStorage();
    recipes && setRecipes(recipes);
  },[])
  
  return (<div className='page-container'>
    <h2>History</h2>
    <div className='recipe-container'>
      {recipes.map(recipe=><RecipeThumbnail recipe={recipe}/>)}
    </div>
  </div>)
}