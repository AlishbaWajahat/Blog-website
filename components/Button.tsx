import {Exo} from "next/font/google";
const exo=Exo({
    subsets:["latin"],
    weight:"400",
    display:"swap",
    variable:"--exo"
  })
export default function Button() {
    return (
        <>
        <main className={exo.className}>
        <button className="bg-black text-white text-xs font-exo px-6 py-2 flex items-center justify-center ">READ MORE</button>
        </main>
           
        </>
    )
}
