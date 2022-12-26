import Image from "next/image";
import styles from '../styles/IngredientCard.module.css';
type Props = {
  ingredient:{
    id:number,
    name:string,
    image:string
  },
  onClick?:()=>void,
  className?:string
}

export const IngredientCard = ({ingredient:{id,name,image},onClick,className}:Props) => {
  return (<div className={`${styles.container} ${className}`} onClick={onClick}>
    <div className={styles.imageContainer}>
      <Image src={'https://spoonacular.com/cdn/ingredients_100x100/'+image} alt='' fill={true} style={{objectFit:'cover'}}/>
    </div>
    <span>{name}</span>
  </div>)
}

export default IngredientCard;