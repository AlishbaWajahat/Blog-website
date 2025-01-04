
import {Exo,Comfortaa} from "next/font/google";
import data from '@/data/data.json';

import ProductCard from "@/components/ProductCard";
import Comment from "@/components/Comment";
const exo=Exo({
    subsets:["latin"],
    weight:"400",
    display:"swap",
    variable:"--exo"
  })
  const comfortaa=Comfortaa({
      subsets:["latin"],
      weight:"400",
      display:"swap",
      variable:"--comfortaa"
    })
export default function page() {
  return (
    <>
    <div className="bg-[#FFF5EE] flex flex-col items-center gap-16 p-16 pt-32">
        <main className={comfortaa.className}> <h1 className="font-extrabold text-5xl text-center">OUR BLOGS</h1></main>
        <div className="flex gap-16 flex-wrap justify-center">
            {data.map((product)=>{
                return(
                    <ProductCard key={product.id} imageUrl={product.imageUrl} heading={product.heading} id={product.id}/>
                )
            })}

        </div>
       
    </div>
   
    </>

  )
}
