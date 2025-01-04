import Link from "next/link";
import { Exo, Comfortaa } from "next/font/google";
import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet"
import { GiHamburgerMenu } from "react-icons/gi";
import Button from "./Button";
const exo = Exo({
    subsets: ["latin"],
    weight: "400",
    display: "swap",
    variable: "--exo"
})
const comfortaa = Comfortaa({
    subsets: ["latin"],
    weight: "400",
    display: "swap",
})

export default function Header() {
    return (
        <>
            <div className="max-w-[3000px] h-[100px] flex justify-center items-center">
                <div className="w-[90%] bg-white h-[34px] flex items-center justify-between">
                    <div className={`font-extrabold md:text-5xl text-4xl ${comfortaa.className}`}>Logo</div>
                    <main className={exo.className}>
                        <div className="font-exo text-xl gap-12 font-light md:flex hidden">
                            <Link href={'/'}>HOME</Link>
                            <Link href={'/blogs'}>BLOGS</Link>
                            <Link href={'/'}>PRODUCTS</Link>
                        </div>
                        <div className='md:hidden'><Sheet>
                            <SheetTrigger><GiHamburgerMenu className='text-2xl' /></SheetTrigger>
                            <SheetContent className='h-[30%] bg-[#F5D7FF] text-black p-12 w-64'>
                                <ul>
                                    <li className='mt-4'><a href="/">Home</a></li>
                                    <li className='mt-4'><a href="/blogs">Blogs</a></li>
                                    <li className='mt-4'><a href="/">Products</a></li>
                                </ul>


                            </SheetContent>



                        </Sheet></div>
                    </main>

                    <div className="md:block hidden">
                        <Button />
                    </div>

                </div>
            </div>
        </>

    )
}
