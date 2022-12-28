import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useState,useEffect } from 'react'
import html2canvas from 'html2canvas';
import IngredientsPicker from '../components/IngredientsPicker';
import Loading from '../components/Loading';
import RecipeBlock from '../components/Recipe';
import { Recipe } from '../utils/types';
import { addRecipeToLocalStorage, getRecipesFromLocalStorage } from '../utils/localstorage';

type Ingredient = {
  id:number,
  name:string,
  image:string,
  results:[]
}
export default function Home() {
  const [data,setData] = useState<Recipe|null>(null);
  const [pending,setPending] = useState(false);
  const [error,setError] = useState('');

  useEffect(()=>{
    if(!data) return;
    const recipes = getRecipesFromLocalStorage();
    data.id = recipes.length;
    data.favorite = false;
    addRecipeToLocalStorage(data);
  },[data]);

  const fetchData = async (recipe:string,ingredients:string[]) =>{
    setError('');
    setPending(true);
    const response = await fetch('api/hello',{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body: JSON.stringify({recipe,ingredients})
    });
    const data = await response.json();
    setPending(false);
    if(data.error) return setError(data.error);
    setData(data);
    return data;
  }
  // const saveImage = async () =>{
  //   const div:HTMLElement|null = document.querySelector("#recipe");
  //   const image = div && await html2canvas(div);
  //   image && navigator.share(image);
  //   image && document.querySelector("#test")?.appendChild(image);
  //   console.log(image);
  // }


  return (
    <div className={styles.container} id='test'>
        {error && <span>{error}</span>}
        <IngredientsPicker callback={fetchData} className={pending?'shrink':''}/>
        {pending && <Loading/>}

        {data && !pending &&  <RecipeBlock recipe={data}/>}
        
        
    </div>
  )
}
