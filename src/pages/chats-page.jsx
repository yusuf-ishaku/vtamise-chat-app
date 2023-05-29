import { AiOutlineInbox } from 'react-icons/ai'
import { BsStar,BsTrash3, BsThreeDots, BsThreeDotsVertical } from 'react-icons/bs';
import { TbMessageCircle2} from 'react-icons/tb'
import { SlRefresh} from 'react-icons/sl'
import { IconContext } from 'react-icons';
import {FiEdit } from 'react-icons/fi';
import { VscDiffAdded } from 'react-icons/vsc';
import { CiSearch } from 'react-icons/ci';
import { GiPencil } from 'react-icons/gi';
import { RxCaretDown } from 'react-icons/rx'
import { CiFilter } from 'react-icons/ci'; 
import { RiAttachment2 } from 'react-icons/ri'
import { MdMarkEmailUnread } from "react-icons/md"
import { NumberCircle } from '../assets/components/other-components/number-circle';
import { ChatFace } from '../assets/components/essential-components/chatface';
import { GrAttachment } from 'react-icons/gr';
import { VscStarFull } from 'react-icons/vsc';
import Image from "../assets/images/image.jpg";
import { RiSendPlaneFill } from 'react-icons/ri'
import { Atext } from '../assets/components/essential-components/atext';
import { auth } from '../assets/functions/functions';
import {useAuthState} from "react-firebase-hooks/auth";
import React, {useState, useEffect} from "react";
import { Model } from '../assets/functions/functions';
import { useSelector } from 'react-redux';
import { SearchModal } from '../assets/components/essential-components/searchModal';
export const ChatPage = () =>{
    let date = new Date().toLocaleString();
    const [ user ] = useAuthState(auth);
    const userData = useSelector((state) => state.userDetails.value);
    // console.log(userData)
    // console.log(userData);
    
    return(
        <>
         <SearchModal></SearchModal>
       <main className="w-[100vw] h-[100vh] p-4 bg-teal-50 flex flex-row">
        <aside className="bg-transparent hidden sm:block w-0 sm:w-[30%] h-auto p-6 m-6 mt-0 ml-12">
           <header className="flex flex-row justify-between">
                <div className='flex flex-row'>
                    <div className="w-12 cursor-pointer rounded-full flex flex-row items-center justify-center text-center h-12 bg-gray-700">
                    {userData.photoimage ? <img className='rounded-full' src={userData.photoimage}></img> : <h1 className="text-2xl text-white">FI</h1>}
                    </div>
                    <div className="flex flex-col ml-3">
                        <h1 className="text-xl text-gray-700">{userData.username}</h1>
                        <h2 className="text-sm leading-5 font-normal text-gray-400">Avid lover of fruits and veggies.</h2>
                    </div>
                </div>
                <div className='flex flex-row items-center cursor-pointer'>
                    <BsThreeDots></BsThreeDots>
                </div>
           </header>
           <section className= 'w-[100%] bg-white h-fit  mt-10 rounded-xl shadow-[-5px_0px_40px_-20px_rgba(0,0,0,0.3)]'>
                <ul>
                    <li className="h-10 rounded-t-xl border-gray-500 px-4 bg-gray-200 border-b-[1px] py-10 flex flex-row items-center">
                        <IconContext.Provider value = {{color: "gray"}}>
                         <AiOutlineInbox></AiOutlineInbox>
                        </IconContext.Provider>
                         <div className=' ml-3'>
                            <h3 className='text-lg text-gray-800'>All Chats</h3>
                            <h5 className='text-sm text-gray-600 leading-5 font-light'>The messages you sent are not very true</h5>
                         </div>
                        <NumberCircle count={4}></NumberCircle>
                    </li>
                    <li className="h-10 px-4 border-gray-500 border-b-[1px] py-10 flex flex-row items-center">
                        <IconContext.Provider value={{color: 'gray'}}>
                            <BsStar></BsStar>
                        </IconContext.Provider>
                        <div className=' ml-3'>
                            <h3 className='text-lg text-gray-800'>Starred</h3>
                            <h5 className='text-sm text-gray-600 leading-5 font-light'>Selected messages will appear here</h5>
                         </div>
                    </li>
                    <li className="h-10 px-4 border-gray-500 border-b-[1px] py-10 flex flex-row items-center">
                        <IconContext.Provider value={{color: 'gray'}}>
                           <SlRefresh></SlRefresh>
                        </IconContext.Provider>
                        <div className=' ml-3'>
                            <h3 className='text-lg text-gray-800'>Snoozed</h3>
                            <h5 className='text-sm text-gray-600 leading-5 font-light'>Snoozed chats</h5>
                         </div>
                    </li>
                    <li className="h-10 px-4 border-gray-500 border-b-[1px] py-10 flex flex-row items-center"> 
                        <IconContext.Provider value={{color: 'gray'}}>
                           <FiEdit></FiEdit>
                        </IconContext.Provider>
                        <div className=' ml-3'>
                            <h3 className='text-lg text-gray-800'>Drafts</h3>
                            <h5 className='text-sm text-gray-600 leading-5 font-light'>Your drafts appear here</h5>
                         </div>
                    </li>
                    <li className="h-10 px-4 py-10 flex flex-row items-center">
                        <IconContext.Provider value={{color: 'red'}}>
                           <BsTrash3></BsTrash3>
                        </IconContext.Provider>
                        <div className=' ml-3'>
                            <h3 className='text-lg text-red-500'>Deleted</h3>
                            <h5 className='text-sm text-gray-600 leading-5 font-light'>Deleted messages</h5>
                         </div>
                    </li>
                </ul>
           </section>
        </aside>
        <main className='w-[100%] sm:w-[70%] p-1 sm:p-6 m-0 sm:m-6 mt-0 sm:ml-12'>
            <header className='w-full flex flex-row items-center border-b-2 pb-3'>
                <div className='bg-white h-10 w-10 rounded-lg flex flex-row items-center justify-center'>
                    <IconContext.Provider value={{color: 'black', size: '20px'}}>
                        <TbMessageCircle2></TbMessageCircle2>
                    </IconContext.Provider>
                </div>
                <div className='ml-3  mr-auto font-semibold'>
                    <h2 className='text-gray-900 text-lg'>Messages</h2>
                </div>
                <div className=' flex flex-row items-center justify-center '>
                    <div className='sm:hidden w-8 h-8 rounded-md bg-blue-100 flex flex-row justify-center items-center'>
                        <IconContext.Provider value={{color: 'gray'}}>
                            <BsThreeDotsVertical></BsThreeDotsVertical>
                        </IconContext.Provider>
                        
                    </div>
                    <div className='hidden w-8 h-8 rounded-md bg-blue-100 sm:flex flex-row justify-center items-center'>
                        <IconContext.Provider value={{color: 'gray'}}>
                            <CiSearch></CiSearch>
                        </IconContext.Provider>
                        
                    </div>
                    <div className='hidden w-8 h-8 rounded-md ml-3  bg-blue-100 sm:flex flex-row justify-center items-center'>
                        <IconContext.Provider value={{color: 'gray'}}>
                            <VscDiffAdded></VscDiffAdded>
                        </IconContext.Provider>
                    </div>
                </div>
            </header>
            <header className='flex flex-row mt-5 '>
                <div className='bg-white cursor-pointer h-10 w-fit pr-10 mr-auto rounded-md p-2 flex flex-row items-center'>
                    <div className='bg-blue-100 h-7 w-8 rounded-md flex flex-row items-center justify-center'>
                        <IconContext.Provider value={{color: 'gray', size: '16px'}}>
                            <GiPencil></GiPencil>
                        </IconContext.Provider>
                    </div>
                    <h2 className='ml-3 text-gray-800 text-sm '>New conversation</h2>
                </div>
                <div className='w-fit h-10 bg-white rounded-md flex items-center p-2'>
                    <div className='mr-2'>
                        <IconContext.Provider value={{ color: 'gray', size: '18px'}}>
                            <CiFilter></CiFilter>
                        </IconContext.Provider>
                    </div>
                    <article className='flex flex-row items-center'>
                        <span className='text-gray-700 text-sm'>Sort:</span>
                        <span className='text-gray-700 text-sm ml-1 '>A - Z</span>
                        <span className='inline-block ml-2'>
                            <IconContext.Provider value={{ color: 'gray', size: '24px'}}>
                                <RxCaretDown></RxCaretDown>
                            </IconContext.Provider>
                        </span>
                    </article>
                </div>
            </header> 
            <main className='max-h-[100vh] sm:h-fit sm:max-h-[65vh] flex flex-row  w-full bg-blue-50 mt-3 rounded-md'>
                <section className='chats w-[100%] sm:w-[40%] max-h-[78vh] sm:h-[65vh] flex flex-col border-r-2 p-4 border-w-2 overflow-y-scroll'>
                   
                </section>
                <section className=' hidden w-0 sm:block sm:w-[60%]'>
                    <header className='w-[100%] h-fit flex flex-row items-center pt-2 px-2 border-b-2 pb-2'>
                        <div className='mr-auto px-4 py-1 h-fit  w-fit rounded-md  bg-red-300 text-red-900'>
                            Discussion
                        </div>
                        <div className='icons flex flex-row items-center '>
                            <IconContext.Provider value={{color: 'rgb(201, 201, 255)', size: '16px'}}>
                                <span className='mr-4 cursor-pointer'><VscStarFull></VscStarFull></span>
                                <span className='mr-4 cursor-pointer'><MdMarkEmailUnread></MdMarkEmailUnread></span>
                                <span className='mr-4 cursor-pointer'><BsThreeDotsVertical></BsThreeDotsVertical></span>
                            </IconContext.Provider>
                        </div>
                    </header>
                    <section className='h-[76%]'>
                        <header className='p-1'>
                            <h6 className='text-sm text-blue-300 ml-1'>Today, {` ${date}` }</h6>
                            <h1 className='text-base font-semibold ml-1'>Where to look for cheap brochure services</h1>
                        </header>
                        <section className='chats flex flex-col p-4 h-[87%] overflow-scroll'>
                            <Atext me={true} image = {Image} message="I will come over now"></Atext>
                            <Atext me={false}  message = {"Please don't come over I am ill and my dad is also around"}></Atext>
                            <Atext me={false}  message = {"Please, Fortune"}></Atext>
                            <Atext me={true}image = {Image}   message = {"I know babe, I will not come."}></Atext>
                            <Atext me={true}image = {Image}   message = {"I will send some things over."}></Atext>
                            <Atext me={true}image = {Image}   message = {"Is that okay by you?"}></Atext>
                            <Atext me={false}  message = {"Okay, that's fine"}></Atext>
                        </section>
                       
                    </section>
                    <footer className='flex flex-row w-full '>
                            <div className='flex flex-row items-center w-full mx-3'>
                                <input placeholder='Type your message'  className='text-blue-600 focus:outline-none placeholder-blue-400 px-4 bg-white rounded-l-full w-full h-10' type='text'></input>
                                <span className='flex flex-row items-center bg-white p-1 rounded-r-full'>
                                    <span className="cursor-pointer">
                                        <IconContext.Provider value={{color: 'gray'}}>
                                            <RiAttachment2></RiAttachment2>
                                        </IconContext.Provider>
                                    </span>
                                    
                                    <button className='h-fit mx-2 flex flex-row items-center rounded-full w-fit p-[0.4rem] text-white bg-gray-600 text-sm'>
                                        <span className='mx-1'>Send</span>
                                        <span className="mx-1 mr-0">
                                        <IconContext.Provider value={{ color: 'white'}}>
                                            <RiSendPlaneFill></RiSendPlaneFill>
                                        </IconContext.Provider>
                                        </span>
                                    </button>
                                </span>
                                
                            </div>
                    </footer>
                </section>
            </main>
        </main>
       </main>
        </>
       
    )
}