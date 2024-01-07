import { Recipe } from "@/app/fetch"

export default function RecipeDisplay({term}:{term:Recipe}){
    // function instructionList(){
    //     let componenent;
    //     for (let i =0; i < 20; i++){
    //         componenent = term.strIngredient(i +1) + term.strMeasure(i +1)
    //     }
    //     return componenent;
    // }
    return (
       <>
       <div  className="flex flex-col gap-12">
          <div className="ing flex flex-col gap-5" >
            <ul>
               <li> {term.strMeasure1 + term.strIngredient1} </li>
                {/* {instructionList()} */}
            </ul>
          </div>
       </div>
       </>
    )
}