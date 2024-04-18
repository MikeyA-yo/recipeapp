import { Recipe } from "@/app/fetch"
import { ArrowLeftCircleIcon } from "@heroicons/react/24/outline";
import { Salsa } from "next/font/google"
import { Genos } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const salsa = Salsa({weight:['400'], subsets :['latin']});
const genos = Genos({weight:['800', '700'], subsets:['cherokee']})

export default function RecipeDisplay({term}:{term:Recipe }){
  let ing:string[]= [];
  let smth = `strMeasure`;
  let smthElse:string[] = [];
  let smthElse2:string[] = [];
  for (let key in term) {
        if(key.startsWith(smth)|| key.startsWith('strIngredient')){
          if(term[key].length > 2){
            if(key.startsWith(smth)) smthElse.push(term[key]);
            if(key.startsWith('strIngredient')) smthElse2.push(term[key])
          }
        }
  }
  for(let i = 0; i < smthElse2.length; i++){
    let ac = smthElse[i] ?? ''
    let value = ac + ' ' + smthElse2[i]
    ing.push(value)
  }


    return (
       <>
       <div  className="flex flex-col justify-items-center p-13 items-center gap-12 m-10">
        <div className="flex gap-2 hover:bg-slate-200 w-40">
        <Link href={`/`} className="flex gap-2"><ArrowLeftCircleIcon className="h-6 w-6" aria-label="go back icon"/> Go back </Link>
        </div>
        <Image unoptimized src={term.strMealThumb} alt={`image of ${term.strMeal}`} width={700} height={200} />
        <h1 className={`text-3xl ${genos.className}`}>{term.strMeal}</h1>
          <div className="ing flex flex-col gap-5" >
            <ul>
                <li className={` text-xl ${salsa.className}`}>Ingredients</li>
                {ing.map((val,index)=>{
                  return <li key = {index}>{val}</li>
                })}
                {/* {instructionList()} */}
            </ul>
          </div>
          <div className="text-xl">
            <p>{term.strInstructions}</p>
          </div>
          <div className="lg:border lg:border-slate-400 hover:border-none w-54">
            <Link href={term.strYoutube} className="text-gray-600 hover:text-gray-400" target="_blank">Watch a full youtube tutorial</Link>
          </div>
       </div>
       </>
    )
}