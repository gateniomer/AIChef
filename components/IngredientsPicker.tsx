import { useState } from "react";
type Props = {
  callback: (ingredients:string[])=>Promise<any>
}
export const IngredientsPicker = ({callback}:Props) => {
  const [input,setInput] = useState('');
  const [ingredients,setIngredients] = useState<string[]>([]);

  const addIngredient = () => {
    setIngredients(prev=>[...prev,input]);
    setInput('');
  }
  return (<div>
    <input 
    value={input} 
    onChange={(e)=>setInput(e.target.value)} 
    onKeyDown={(e)=>e.key==='Enter'&& addIngredient()}/>
    {ingredients.map(ingredient=><span>{ingredient}</span>)}
    <button onClick={()=>callback(ingredients)}>Send</button>
  </div>)
}

export default IngredientsPicker;