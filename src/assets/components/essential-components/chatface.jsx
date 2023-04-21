import { IconContext } from 'react-icons';
import { TiTickOutline } from 'react-icons/ti';
import { TiTick } from 'react-icons/ti';
export const ChatFace = (props) =>{
    return (
        <div className={props.chatactive ? "w-full h-15 rounded-md p-3 bg-white flex flex-row items-center mb-4 chat-active" : "w-full h-15 rounded-md p-3 bg-white flex flex-row items-center mb-4"}>
            <div className="rounded-full h-15 w-15">
                <img className="w-8 h-8 rounded-full object-cover" src={props.image} alt="" ></img>
            </div>
            <div className="flex flex-col ml-2">
                <h2 className='text-blue-600'>Fortune Ishaku</h2>
                <span className='flex flex-row '>
                    <IconContext.Provider value={{color: 'blue'}}>
                        <div className={props.see ? 'hidden' : 'inline' }><TiTickOutline></TiTickOutline></div>
                        <div className= {props.see ? 'inline' : 'hidden'}><TiTick></TiTick></div>
                    </IconContext.Provider>
                    <h5 className='text-[0.6rem] text-blue-900'>I don't think I'll come to the hub today</h5>
                </span>
            </div>
        </div>
    )
}