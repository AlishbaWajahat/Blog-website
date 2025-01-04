
import Addcomment from '@/components/Addcomment';
import Comment from '@/components/Comment';
import data from '@/data/data.json';
import { Pacifico,Exo } from "next/font/google";
const pacifico = Pacifico({
    subsets: ["latin"],
    weight: "400",
    display: "swap",
    variable: "--exo"
})
const exo=Exo({
    subsets:["latin"],
    weight:"400",
    display:"swap",
    variable:"--exo"
  })
import Image from "next/image";
export default function page({ params }: { params: { id: string } }) {
    const selectedProduct = data.find(
        (product) => product.id === Number(params.id)
    );

    if (!selectedProduct) {
        return <div>Product not found</div>; // Handle the case when no product is found
    }
    return (
        <>
            <div className=' flex flex-col px-4 sm:px-0 items-center py-8 pb-24 '>
                <div className='relative sm:p-16 p-4 justify-center flex items-center gap-8 flex-wrap'>
                    <div className='sm:p-16 p-6 bg-[#FFF5EE] sm:w-[700px] w-auto rounded-xl'><h1 className={`${pacifico.className} sm:text-6xl text-3xl`}>{selectedProduct.heading}</h1></div>
                    <Image src={selectedProduct.imageUrl} alt='image' width={700} height={400} />
                </div>
                <div className={`${exo.className} sm:text-3xl text-lg xl:mx-80 lg:mx-32 sm:mx-16 py-8`}>{selectedProduct.blog}</div>

                <Comment/>

            </div>


        </>

    )
}
