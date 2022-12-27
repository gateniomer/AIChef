import styles from '../styles/RecipeBlock.module.css';
import { Recipe } from '../utils/types';

type Props = {
  recipe:Recipe
}

export const RecipeBlock = ({recipe}:Props) => {
  return (<div className={styles.recipeContainer} id="recipe">
  <div style={{
    display:'flex',
    justifyContent:'space-between',
    alignItems:'center'}}>
    <h2>{recipe.name}</h2>
    <div style={{
      display:'flex',
      gap:'10px',
      fontSize:'1.5rem'
    }}>
      <span>⭐</span>
      <span>♻️</span>
      <span>🔎</span>
    </div>
  </div>
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

export default RecipeBlock;