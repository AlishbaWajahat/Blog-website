import { Cardtype } from "@/Types/types";
import Image from "next/image";
import Button from "./Button";
import {Comfortaa,Exo,Merriweather} from "next/font/google";
import Link from "next/link";
const comfortaa=Comfortaa({
    subsets:["latin"],
    weight:"400",
    display:"swap",
    variable:"--comfortaa"
  })
  const exo=Exo({
    subsets:["latin"],
    weight:"400",
    display:"swap",
    variable:"--exo"
  })
  const merriweather=Merriweather({
    subsets:["latin"],
    weight:"400",
    display:"swap",
    variable:"--merriweather"
  })
export default function ProductCard(props:Cardtype) {
  return (
    <>
    <Link href={`/blogging/${props.id}`}>
    <div className="w-[340px] h-[600px] border-2 border-dashed border-[#E7A4FF] rounded-lg flex  justify-center py-6 bg-white">
        <div className="w-[300px] flex flex-col gap-4">
            <Image src={props.imageUrl} alt="image" width={300} height={280}/>
            <h1 className={`text-2xl ${merriweather.className} text-center`}>{props.heading}</h1>
            <p className={`text-lg ${comfortaa.className}`}>Experience the ultimate in skincare with our {props.heading}, designed to nourish and hydrate your skin.
            </p>
            <Link href={`/blogging/${props.id}`}></Link><Button/>
        </div>
    </div></Link>

    </>

  )
}
