import { Salsa } from "next/font/google"

const salsa = Salsa({weight:['400'], subsets:['latin'], style:['normal']})
export default function Footer(){
   return (
    <div className="bg-gray-300 bg-gradient-to-b  flex-col flex justify-center justify-items-center gap-5  items-center">
        <p className={`${salsa.className} mt-2 `}>Made with ❤ in Lagos By <span className=" text-yellow-600">C.H.O(Ayomide)</span></p>
        <i className="text-sm mb-2">&copy; 2024 C.H.O</i>
    </div>
   )
}