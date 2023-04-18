import { AiOutlineInbox } from 'react-icons/ai'
import { BsThreeDots } from 'react-icons/bs';
import { IconContext } from 'react-icons';
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
                        <h2 className="text-base leading-5 font-normal text-gray-400">Avid lover of fruits and veggies.</h2>
                    </div>
                </div>
                <div className='flex flex-row items-center cursor-pointer'>
                    <BsThreeDots></BsThreeDots>
                </div>
           </header>
           <section className= 'w-[100%] bg-white h-80 p-3 mt-10 rounded-lg shadow-[-5px_0px_40px_-20px_rgba(0,0,0,0.3)]'>
                <ul>
                    <li className="h-10 p-2 flex flex-row items-center">
                        <IconContext.Provider value = {{color: "blue"}}>
                         <AiOutlineInbox></AiOutlineInbox>
                        </IconContext.Provider>
                         
                         <div className=' ml-3'>
                            <h3 className='text-blue-500'>All Chats</h3>
                            <h5 className='text-sm leading-3 font-light'>The messages you sent are not very true</h5>
                         </div>
                    </li>
                    <li className="h-10 p-2">Starred</li>
                    <li className="h-10 p-2">Snoozed</li>
                    <li className="h-10 p-2 ">Drafts</li>
                    <li className="h-10 p-2">Deleted</li>
                </ul>
           </section>
        </aside>
       </main>
    )
}