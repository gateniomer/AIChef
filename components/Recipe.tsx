import { faHeart, faShare, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from '../styles/Recipe.module.css';
import { Recipe } from '../utils/types';
import { faHeart as faEmptyHeart } from '@fortawesome/free-regular-svg-icons';
import { deleteRecipeFromLocalStorage, setFavoriteRecipeInLocalStorage } from '../utils/localstorage';
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

type Props = {
  recipe:Recipe
}

export const RecipeBlock = ({recipe}:Props) => {

  return (<div className={styles.recipeContainer} id="recipe">
    <RecipeBar recipe={recipe}/>
    <h2>{recipe.name}</h2>
  <p>
    {recipe.description}
  </p>
  <h3>Ingredients</h3>
  <div className={styles.ingredientsContainer}>
    {recipe.ingredients.map((ingredient:any)=><span>{ingredient} </span>)}
  </div>
  <h3>Instructions</h3>
  <div className={styles.instructionsContainer}>
    {recipe.instructions.map((instruction:any,index:number)=><div><span>Step {index+1}</span><p>{instruction}</p></div>)}
  </div>
</div>)
}

export const RecipeThumbnail = ({recipe}:{recipe:Recipe}) => {
  return (
    <div className={styles.recipeThumbnail}>
      <RecipeBar recipe={recipe}/>
      <Link href={'/recipe/'+recipe.id} key={recipe.id}>
      <h3>{recipe.name}</h3>
      <p>{recipe.description}</p>
      </Link>
    </div>
  )
}

export const RecipeBar = ({recipe}:{recipe:Recipe}) => {
  const [favorite,setFavorite] = useState(recipe.favorite);
  const router = useRouter();
  return (
    <div style={{
      display:'flex',
      gap:'20px',
      justifyContent:'flex-end',
      fontSize:'1.6rem'
    }}>
      {favorite ? 
      <FontAwesomeIcon icon={faHeart}
      onClick={()=>{
        const favorite = setFavoriteRecipeInLocalStorage(recipe.id);
        setFavorite(favorite);
      }}/> : 
      <FontAwesomeIcon icon={faEmptyHeart}
      onClick={()=>{
        const favorite = setFavoriteRecipeInLocalStorage(recipe.id);
        setFavorite(favorite);
      }}/>}
      <FontAwesomeIcon icon={faShare}/>
      <FontAwesomeIcon icon={faTrash} onClick={()=>{
        deleteRecipeFromLocalStorage(recipe.id);
        router.reload();
      }}/>
    </div>)
}

export default RecipeBlock;