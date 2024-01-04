import { IngProp } from "./fetch";

export default function IngList({term}:{term:IngProp}){
    return (
        <div>
            <h1 className="text-3xl text-slate-700">{term.strIngredient}</h1>
            <p className="text-xl text-gray-700">{term.strDescription ? term.strDescription : `No description provided for the ingredient ${term.strIngredient}`}</p>
            <p className="text-xl" ><span className="text-gray-900">Type: </span> {term.strType ? term.strType : `No type provided`} </p>
        </div>
    )
}