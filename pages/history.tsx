import styles from '../styles/HistoryPage.module.css';
import { Recipe } from '../utils/types';
import { useEffect, useState } from 'react';
import Link from 'next/link';
export default function History(){
  const [recipes,setRecipes] = useState<Recipe[]>([]);
  useEffect(()=>{
    const data = localStorage.getItem('history');
    data && setRecipes(JSON.parse(data));
  },[])
  return (<div>
    <h2>History</h2>
    <div className={styles.recipeContainer}>
      {recipes.map(recipe=>
      <Link href={'/recipe/'+recipe.id} key={recipe.id}>
        <div className={styles.recipeThumbnail}>
          <h3>{recipe.name}</h3>
          <p>{recipe.description}</p>
        </div>
      </Link>)}
    </div>
  </div>)
}