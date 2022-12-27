import { useState } from "react";
import styles from '../styles/IngredientsPicker.module.css';

type Props = {
  callback: (recipe:string,ingredients:string[])=>Promise<any>,
  className?:string
}
export const IngredientsPicker = ({
  callback,
  className}:Props) => {
  const [input1,setInput1] = useState('');
  const [input2,setInput2] = useState('');
  const [ingredients,setIngredients] = useState<string[]>([]);
  const [recipe,setRecipe] = useState<string>('');

  const addRecipe = () => {
    setRecipe(input1);
    setInput1('');
  }

  const addIngredient = () => {
    setIngredients(prev=>[...prev,input2]);
    setInput2('');
  }
  return (<div className={styles.container + ' ' + className}>
    <p>I wish for{recipe && <span onClick={()=>setRecipe('')}>{recipe}</span>}
    {!recipe && 
    <input 
    placeholder="random"
    value={input1} 
    onChange={(e)=>setInput1(e.target.value)} 
    onKeyDown={(e)=>e.key==='Enter'&& addRecipe()}/>} 

    recipe, made from:
    
    {ingredients.map(ingredient=>
    <span key={ingredient} onClick={(e:any)=>{
      setIngredients(prev=>prev.filter(ingredient=>ingredient!==e.target.innerText))
    }}>{ingredient}</span>)}
    <input 
    value={input2} 
    placeholder={ingredients.length?'add more':'any ingredients'}
    onChange={(e)=>setInput2(e.target.value)} 
    onKeyDown={(e)=>e.key==='Enter'&& addIngredient()}/>
    </p>
    
    <button onClick={()=>callback(recipe,ingredients)}>Generate Recipe</button>
  </div>)
}

export default IngredientsPicker;