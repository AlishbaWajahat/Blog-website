"use client"

import { Commentlist } from "@/Types/types";
import { Pacifico, Exo } from "next/font/google";
import { useState } from "react";
import { BsFillPencilFill } from "react-icons/bs";
import { AiFillDelete } from "react-icons/ai";
import { BiSolidEditAlt } from "react-icons/bi";
import { DiVim } from "react-icons/di";
import Addcomment from "./Addcomment";
const pacifico = Pacifico({
    subsets: ["latin"],
    weight: "400",
    display: "swap",
    variable: "--exo"
})
export default function Comment() {
    const [commentList, setCommentList] = useState<Commentlist[]>([])
    const [selectedcomment,setselectedcomment]=useState<Commentlist>({id:'',name:'',comment:''})
    function addingCommentintolist(newarray:Commentlist){
        const newArray=[...commentList,newarray]
        setCommentList(newArray)
    }
    function onDelete(comment:Commentlist){
    setCommentList(commentList.filter((e)=>
        e.id !== comment.id
    ))

    }
    function onedit(comment:Commentlist){
        setselectedcomment(comment)
    }
    function updation(comment:Commentlist){
        setCommentList(commentList.map((e)=>
            e.id===comment.id?comment:e

        ))
        setselectedcomment({
            id:'',
            name:'',
            comment:''
        })

    }
    return (
        <>
        <div className="flex gap-6  flex-wrap-reverse justify-center mt-8">
        <div className="sm:w-[500px] w-[300px] h-auto bg-[#F5D7FF] p-8 pb-16 flex flex-col gap-8">
                <div className="flex gap-4">
                    <h1 className={`${pacifico.className} text-3xl text-center`}>Comments Diary</h1>
                    <BsFillPencilFill className="text-4xl " />
                </div>

                <div className="border-gray-500 border-2"></div>


                {commentList.length > 0 && commentList.map((comment,index) => {
                    return (
                        <div className="border-b-2 border-b-gray-400 pb-4"key={index}>
                        <div className="flex justify-between">
                        <h1 className="sm:text-2xl text-xl font-medium">{comment.name}</h1>
                        <div className="flex gap-2">
                        <AiFillDelete className="sm:text-2xl text-xl cursor-pointer" onClick={()=>onDelete(comment)}/>
                        <BiSolidEditAlt className="sm:text-2xl text-xl" onClick={()=>{onedit(comment)}} />
                        </div>
                        </div>
                        <div className="sm:text-lg text-md">{comment.comment}</div>
    
                    </div>
 
                    )
                })}



            </div>
            <Addcomment func={addingCommentintolist} Comment={selectedcomment}func2={updation} />
        </div>

        </>

    )
}
