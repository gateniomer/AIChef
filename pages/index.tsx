import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useState,useEffect } from 'react'
import html2canvas from 'html2canvas';
import IngredientsPicker from '../components/IngredientsPicker';
import RecipeBlock from '../components/Recipe';
import { Recipe } from '../utils/types';
import { addRecipeToLocalStorage, getRecipesFromLocalStorage } from '../utils/localstorage';
import { v4 as uuidv4 } from 'uuid';
import { useRouter } from 'next/router';

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
  const router = useRouter();

  useEffect(()=>{
    if(!data) return;
    data.id = uuidv4();
    data.favorite = false;
    addRecipeToLocalStorage(data);
    router.push('/recipe/'+data.id);
  },[data]);

  const fetchData = async (recipe:string,ingredients:string[]) =>{
    setError('');
    setPending(true);
    const response = await fetch('api/recipe',{
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
    <div className={styles.container + ' page-container'}>
        {error && <span className='alert'>{error}</span>}
        <IngredientsPicker callback={fetchData} pending={pending}/>
        
        
    </div>
  )
}
