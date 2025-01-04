
import {Comfortaa} from "next/font/google";
const comfortaa=Comfortaa({
    subsets:["latin"],
    weight:"400",
    display:"swap",
  })
export default function Topheader() {
  return (
    <>
    <main className={comfortaa.className}>
    <div className="max-w-[3000px] h-[40px] bg-[#F5D7FF] font-light md:text-[15px] text-[10px] flex justify-center items-center">Whooo! dreams come true!!</div>
    </main>

    </>
 
  )
}
