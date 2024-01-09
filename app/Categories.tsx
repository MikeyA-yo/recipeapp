import Image from "next/image";
import { Lusitana } from "next/font/google";
import { CateProp } from "./fetch";

const lusi = Lusitana({weight:["400", "700"], subsets:["latin"]})
export default function Category({category}:{category: CateProp}){
return (
    <>
    <div className="flex flex-col ">
     <div>
       <Image unoptimized src={category.strCategoryThumb} alt={`Picture of ${category.strCategory}`} width={100} height={100} />
    </div>
      <div>
        <h1 className={`${lusi.className} text-3xl`}>{category.strCategory}</h1>
        <p className={`${lusi.className} text-xl`}>{category.strCategoryDescription}</p>
      </div>
    </div>
    </>
)
}