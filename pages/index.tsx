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
    try{
      const response = await fetch('api/recipe',{
        method:'POST',
        headers:{
          'Content-Type':'application/json'
        },
        body: JSON.stringify({recipe,ingredients})
      });
      const data = await response.json();
      setPending(false);
      setData(data);
      return data;
    }catch(error){
      setPending(false);
      setError('Something went wrong.. Please try again.');
      console.log(error);
    }
    
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

        <div className='more-details-container'>
        <p>This mini project was developed by Omer Gatenio as part of a journey to become a full-stack developer.</p>
        <p>I'm looking for a Frontend/Fullstack position, <a href="https://www.linkedin.com/posts/omer-gatenio_acraclacsacgabracsacpacpadd-frontend-fullstack-activity-7011254902555348993-Vjsq?utm_source=share&utm_medium=member_desktop">click here</a> for more details.</p>
    </div>
        
    </div>
  )
}
