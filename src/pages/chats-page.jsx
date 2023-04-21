import { AiOutlineInbox } from 'react-icons/ai'
import { BsStar,BsTrash3, BsThreeDots } from 'react-icons/bs';
import { TbMessageCircle2} from 'react-icons/tb'
import { SlRefresh} from 'react-icons/sl'
import { IconContext } from 'react-icons';
import {FiEdit } from 'react-icons/fi';
import { VscDiffAdded } from 'react-icons/vsc';
import { CiSearch } from 'react-icons/ci';
import { GiPencil } from 'react-icons/gi';
import { RxCaretDown } from 'react-icons/rx'
import { CiFilter } from 'react-icons/ci';
import { NumberCircle } from '../assets/components/other-components/number-circle';
import { ChatFace } from '../assets/components/essential-components/chatface';
import Image from "../assets/images/image.jpg"

// import
export const ChatPage = () =>{
    return(
       <main className="w-[100vw] h-[100vh] p-5 bg-teal-50 flex flex-row">
        <aside className="bg-transparent w-[30%] h-auto p-6 m-6 mt-2 ml-12">
           <header className="flex flex-row justify-between">
                <div className='flex flex-row'>
                    <div className="w-12 cursor-pointer rounded-md flex flex-row items-center justify-center text-center h-12 bg-blue-500">
                        <h1 className="text-2xl text-white">FI</h1>
                    </div>
                    <div className="flex flex-col ml-3">
                        <h1 className="text-xl text-gray-700">Fortune Ishaku</h1>
                        <h2 className="text-sm leading-5 font-normal text-gray-400">Avid lover of fruits and veggies.</h2>
                    </div>
                </div>
                <div className='flex flex-row items-center cursor-pointer'>
                    <BsThreeDots></BsThreeDots>
                </div>
           </header>
           <section className= 'w-[100%] bg-white h-fit  mt-10 rounded-xl shadow-[-5px_0px_40px_-20px_rgba(0,0,0,0.3)]'>
                <ul>
                    <li className="h-10 rounded-t-xl px-4 bg-blue-100 border-b-2 py-10 flex flex-row items-center">
                        <IconContext.Provider value = {{color: "blue"}}>
                         <AiOutlineInbox></AiOutlineInbox>
                        </IconContext.Provider>
                         <div className=' ml-3'>
                            <h3 className='text-lg text-blue-500'>All Chats</h3>
                            <h5 className='text-sm text-gray-600 leading-5 font-light'>The messages you sent are not very true</h5>
                         </div>
                        <NumberCircle count={4}></NumberCircle>
                    </li>
                    <li className="h-10 px-4 border-b-2 py-10 flex flex-row items-center">
                        <IconContext.Provider value={{color: 'blue'}}>
                            <BsStar></BsStar>
                        </IconContext.Provider>
                        <div className=' ml-3'>
                            <h3 className='text-lg text-blue-500'>Starred</h3>
                            <h5 className='text-sm text-gray-600 leading-5 font-light'>Selected messages will appear here</h5>
                         </div>
                    </li>
                    <li className="h-10 px-4 border-b-2 py-10 flex flex-row items-center">
                        <IconContext.Provider value={{color: 'blue'}}>
                           <SlRefresh></SlRefresh>
                        </IconContext.Provider>
                        <div className=' ml-3'>
                            <h3 className='text-lg text-blue-500'>Snoozed</h3>
                            <h5 className='text-sm text-gray-600 leading-5 font-light'>Snoozed chats</h5>
                         </div>
                    </li>
                    <li className="h-10 px-4 border-b-2 py-10 flex flex-row items-center"> 
                        <IconContext.Provider value={{color: 'blue'}}>
                           <FiEdit></FiEdit>
                        </IconContext.Provider>
                        <div className=' ml-3'>
                            <h3 className='text-lg text-blue-500'>Drafts</h3>
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
        <main className='w-[60%] p-6 m-6 mt-2 ml-12'>
            <header className='w-full flex flex-row items-center border-b-2 pb-5'>
                <div className='bg-white h-10 w-10 rounded-lg flex flex-row items-center justify-center'>
                    <IconContext.Provider value={{color: 'black', size: '20px'}}>
                        <TbMessageCircle2></TbMessageCircle2>
                    </IconContext.Provider>
                </div>
                <div className='ml-3  mr-auto font-semibold'>
                    <h2 className='text-gray-900 text-lg'>Messages</h2>
                </div>
                <div className=' flex flex-row items-center justify-center '>
                    <div className='w-8 h-8 rounded-md bg-blue-100 flex flex-row justify-center items-center'>
                        <IconContext.Provider value={{color: 'blue'}}>
                            <CiSearch></CiSearch>
                        </IconContext.Provider>
                        
                    </div>
                    <div className='w-8 h-8 rounded-md ml-3  bg-blue-100 flex flex-row justify-center items-center'>
                        <IconContext.Provider value={{color: 'blue'}}>
                            <VscDiffAdded></VscDiffAdded>
                        </IconContext.Provider>
                    </div>
                </div>
            </header>
            <header className='flex flex-row mt-7 '>
                <div className='bg-white h-10 w-fit pr-10 mr-auto rounded-md p-2 flex flex-row items-center'>
                    <div className='bg-blue-100 h-7 w-8 rounded-md flex flex-row items-center justify-center'>
                        <IconContext.Provider value={{color: 'blue', size: '16px'}}>
                            <GiPencil></GiPencil>
                        </IconContext.Provider>
                    </div>
                    <h2 className='ml-3 text-blue-600 text-sm '>New conversation</h2>
                </div>
                <div className='w-fit h-10 bg-white rounded-md flex items-center p-2'>
                    <div className='mr-2'>
                        <IconContext.Provider value={{ color: 'blue', size: '18px'}}>
                            <CiFilter></CiFilter>
                        </IconContext.Provider>
                    </div>
                    <article className='flex flex-row items-center'>
                        <span className='text-blue-500 text-sm'>Sort:</span>
                        <span className='text-blue-500 text-sm ml-1 '>A - Z</span>
                        <span className='inline-block ml-2'>
                            <IconContext.Provider value={{ color: 'blue', size: '24px'}}>
                                <RxCaretDown></RxCaretDown>
                            </IconContext.Provider>
                        </span>
                    </article>
                </div>
            </header> 
            <main className='h-fit max-h-[60vh] overflow-auto w-full bg-blue-50 mt-4 rounded-md'>
                <section className='chats w-[40%] flex flex-col border-r-2 p-4 border-w-2'>
                    <ChatFace image = {Image} see={false} chatactive={true}></ChatFace>
                    <ChatFace image = {Image} see={false}></ChatFace>
                    <ChatFace image = {Image} see={false}></ChatFace>
                    <ChatFace image = {Image} see={false}></ChatFace>
                    <ChatFace image = {Image} see={false}></ChatFace>
                    <ChatFace image = {Image} see={false}></ChatFace>
                    <ChatFace image = {Image} see={false}></ChatFace>
                    <ChatFace image = {Image} see={false}></ChatFace>
                    <ChatFace image = {Image} see={false}></ChatFace>
                </section>
            </main>
        </main>
       </main>
    )
}