"use client"

import { Addcommentprop } from "@/Types/types";
import { useState } from "react"


export default function Addcomment({func,Comment,func2}:Addcommentprop) {

    const [name,Setname]=useState<string>('');
    const [comment,setcomment]=useState<string>('');
    function onSubmit(){
        const comm={
            id:`${Date.now()}`,
            name,
            comment
        }
        func(comm)
        Setname("")
        setcomment("")
    }
    function onUpdatecomment(){
        const update={
            id:Comment.id,
            name:name||Comment.name,
            comment:comment||Comment.comment

        }
        func2(update)
        Setname("")
        setcomment("")


    }
    return (
        <>
            <div className="flex flex-col items-center">
                <button className="sm:text-3xl text-2xl bg-[#953553] text-white px-8 py-4 rounded-2xl">Add Comment </button>

                <div className="sm:w-[500px] w-[300px] py-16 px-6 border-2 border-[#953553] rounded-lg flex flex-col gap-8 text-xl mt-4">
                    {/* Name Input */}
                    <div className="mb-4 flex flex-col gap-4">
                        <label
                            htmlFor="name"
                            className="block text-gray-700 font-medium mb-1"
                        >
                            Name
                        </label>
                        <input
                            onChange={(e)=>Setname(e.target.value)}
                            value={name ||Comment.name}
                            type="text"
                            id="name"
                            placeholder="Enter your name"
                            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>
                    {/* Comment Input */}
                    <div className="mb-4 flex flex-col gap-4">
                        <label
                            htmlFor="comment"
                            className="block text-gray-700 font-medium mb-1"
                        >
                            Comment
                        </label>
                        <textarea
                            onChange={(e)=>setcomment(e.target.value)}
                            value={comment||Comment.comment}
                            id="comment"
                            placeholder="Write your comment here..."
                            className="w-full border border-gray-300 rounded-md p-2 h-24 resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
                        ></textarea>
                    </div>
                    {/* Submit Button */}
                    {Comment.id===''?                    <button
                        onClick={onSubmit}
                        type="submit"
                        className="w-1/2 bg-[#953553] text-white py-2 rounded-md transition"
                    >
                        Submit
                    </button>:                    <button
                        onClick={onUpdatecomment}
                        type="submit"
                        className="w-1/2 bg-[#953553] text-white py-2 rounded-md transition text-sm sm:text-md"
                    >
                        Update comment
                    </button>}


                </div>




            </div>

        </>
    )
}
