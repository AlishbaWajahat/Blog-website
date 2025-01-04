import Button from "@/components/Button";
import Header from "@/components/Header";
import Topheader from "@/components/Topheader";
import data from '../data/data.json';
import Image from "next/image";
import {Exo,Comfortaa} from "next/font/google";
import ProductCard from "@/components/ProductCard";
import Link from "next/link";
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

export default function Home() {
  return (
    <>
      <main className={exo.className}>
      <div className="max-w-[3000px] sm:h-[700px] h-[400px] flex items-center justify-center relative"><Image src={"/Hero.png"} alt="hero" fill/>
      <div className="lg:w-[30%] md:w-[50%] w-[70%] sm:h-[270px] h-[200px] z-10 bg-white/70 font-exo flex flex-col gap-4 items-center justify-center">
        <p className="font-light text-sm">COSMETICS</p>
        <p className="font-medium text-3xl text-center">BEST MAKE-UP PRODUCTS 2023</p>
        <Button/>
      </div>
      </div>
      </main>
     {/* popular products */}
      <div className="flex flex-col p-16 gap-16 items-center">
        <main className={comfortaa.className}>
        <h1 className="font-extrabold text-3xl text-center">POPULAR  POSTS</h1>
        </main>
        <div className="flex gap-16 flex-wrap justify-center mx-4">
          {data.slice(0, 3).map((product)=>{
            return(
              <ProductCard key={product.id} imageUrl={product.imageUrl} heading={product.heading} id={product.id}/>
            )
          })}
        </div>
        <div><Link href={"/blogs"}><button className={`text-lg border-2 border-[#D9D9D9] px-6 py-2 ${comfortaa.className}`}>VIEW ALL</button></Link></div>

      </div>

    </>

  );
}
