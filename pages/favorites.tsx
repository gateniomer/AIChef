import styles from '../styles/HistoryPage.module.css';
import { Recipe } from '../utils/types';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { getRecipesFromLocalStorage } from '../utils/localstorage';
import { RecipeThumbnail } from '../components/Recipe';

export default function Favorites(){
  const [recipes,setRecipes] = useState<Recipe[]>([]);
  
  useEffect(()=>{
    const recipes = getRecipesFromLocalStorage();
    const filtered = recipes.filter(recipe=>recipe.favorite===true);
    filtered && setRecipes(filtered);
  },[])

  return (<div>
    <h2>Favorite</h2>
    <div className={styles.recipeContainer}>
      {recipes.map(recipe=><RecipeThumbnail recipe={recipe}/>)}
    </div>
  </div>)
}