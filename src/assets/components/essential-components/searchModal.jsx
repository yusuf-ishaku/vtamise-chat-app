import { useState, useEffect } from "react";
export const SearchModal = (props) =>{
  useEffect(()=>{
    console.log('red')
  }, [])
    return(
        <section className="w-[100vw] flex justify-center top-0 bottom-0 left-0 right-0  bg-gray-600 opacity-80 absolute h-[100vh]">
          <div className="rounded-md mx-8 drop-shadow-xl p-3 flex items-center bg-blend-overlay mym opacity-[1.3]  w-[60rem] h-[4rem] mt-10">
            <input className="w-full outline-none  border-[1px] border-gray-600 p-2 rounded-md"></input>
          </div>
        </section>
    )
}