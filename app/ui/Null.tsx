import { NoSymbolIcon } from "@heroicons/react/24/outline"
import XMarkIcon from "@heroicons/react/24/outline"

export default function NoMeal({term}:{term:string}){
    return (
        <div className="flex gap-5 justify-center">
            <NoSymbolIcon className="h-14 w-14 text-gray-500" />
            <h1 className="text-3xl" >
                {`The Search term ${term} could not be found`}
            </h1>
        </div>
    )
}