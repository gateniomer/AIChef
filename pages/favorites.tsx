import { Recipe } from '../utils/types';
import { useEffect, useState } from 'react';
import { getRecipesFromLocalStorage } from '../utils/localstorage';
import { RecipeThumbnail } from '../components/Recipe';

export default function Favorites(){
  const [recipes,setRecipes] = useState<Recipe[]>([]);
  
  useEffect(()=>{
    const recipes = getRecipesFromLocalStorage();
    const filtered = recipes.filter(recipe=>recipe.favorite===true);
    filtered && setRecipes(filtered);
  },[])

  return (<div className='page-container'>
    <h2>Favorite</h2>
    <div className='recipe-container'>
      {recipes.map(recipe=><RecipeThumbnail key={recipe.id} recipe={recipe}/>)}
    </div>
  </div>)
}