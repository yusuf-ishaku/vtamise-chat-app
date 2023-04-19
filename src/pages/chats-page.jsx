import { AiOutlineInbox } from 'react-icons/ai'
import { BsStar,BsTrash3, BsThreeDots } from 'react-icons/bs';
import { SlRefresh} from 'react-icons/sl'
import { IconContext } from 'react-icons';
import {FiEdit } from 'react-icons/fi';
import { NumberCircle } from '../assets/components/other-components/number-circle';

// import
export const ChatPage = () =>{
    return(
       <main className="w-[100vw] h-[100vh] p-5 bg-teal-50">
        <aside className="bg-transparent w-[30%] h-auto p-6 m-6 ml-12">
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
       </main>
    )
}