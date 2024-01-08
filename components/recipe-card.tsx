import { Recipe } from "@/app/fetch"
import { Salsa } from "next/font/google"
import { Genos } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const salsa = Salsa({weight:['400'], subsets :['latin']});
const genos = Genos({weight:['800', '700'], subsets:['cherokee']})

export default function RecipeDisplay({term}:{term:Recipe}){
    return (
       <>
       <div  className="flex flex-col gap-12 m-10">
        <Image src={term.strMealThumb} alt={`image of ${term.strMeal}`} width={900} height={600} />
        <h1 className={`text-3xl ${genos.className}`}>{term.strMeal}</h1>
          <div className="ing flex flex-col gap-5" >
            <ul>
                <li className={` text-xl ${salsa.className}`}>Ingredients</li>
               <li> {term.strMeasure1 + term.strIngredient1} </li>
               <li> {term.strMeasure2 + term.strIngredient2} </li>
               <li> {term.strMeasure3 + term.strIngredient3} </li>
               <li> {term.strMeasure4 + term.strIngredient4} </li>
               <li> {term.strMeasure5 + term.strIngredient5} </li>
               <li> {term.strMeasure6 + term.strIngredient6} </li>
               <li> {term.strMeasure7 + term.strIngredient7} </li>
               <li> {term.strMeasure8 + term.strIngredient8} </li>
               <li> {term.strMeasure9 + term.strIngredient9} </li>
               <li> {term.strMeasure10 ?? '' + term.strIngredient10 ?? ''} </li>
               <li> {term.strMeasure11 ?? '' + term.strIngredient11 ?? '' } </li>
               <li> {term.strMeasure12 ?? '' + term.strIngredient12 ?? ''} </li>
               <li> {term.strMeasure13 ?? '' + term.strIngredient13 ?? ''} </li>
               <li> {term.strMeasure14 ?? '' + term.strIngredient14 ?? ''} </li>
               <li> {term.strMeasure15 ?? '' + term.strIngredient15 ?? ''} </li>
               <li> {term.strMeasure16 ?? '' + term.strIngredient16 ?? ''} </li>
               <li> {term.strMeasure17 ?? '' + term.strIngredient17 ?? ''} </li>
               <li> {term.strMeasure18 ?? '' + term.strIngredient18 ?? ''} </li>
               <li> {term.strMeasure19 ?? '' + term.strIngredient19 ?? ''} </li>
               <li> {term.strMeasure20 ?? '' + term.strIngredient20 ?? ''} </li>
                {/* {instructionList()} */}
            </ul>
          </div>
          <div className="text-xl">
            <p>{term.strInstructions}</p>
          </div>
          <div>
            <Link href={term.strYoutube} target="_blank">Watch a full youtube tutorial</Link>
          </div>
       </div>
       </>
    )
}