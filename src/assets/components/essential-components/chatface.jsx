import { IconContext } from 'react-icons';
import { TiTickOutline } from 'react-icons/ti';
import { TiTick } from 'react-icons/ti';
export const ChatFace = (props) =>{
    return (
        <div className={props.chatactive ? "w-full cursor-pointer h-15 rounded-md p-3 bg-white flex flex-row items-center mb-2 chat-active" : "w-full h-15 cursor-pointer rounded-md p-3 bg-white mb-1 flex flex-row items-center "}>
            <div className="rounded-full h-15 w-15">
                <img className="w-8 h-8 rounded-full object-cover" src={props.image} alt="" ></img>
            </div>
            <div className="flex flex-col ml-2">
                <h2 className='text-blue-600'>{props.name}</h2>
                <span className='flex flex-row '>
                    <IconContext.Provider value={{color: 'blue'}}>
                        <div className={props.see ? 'hidden' : 'inline' }><TiTickOutline></TiTickOutline></div>
                        <div className= {props.see ? 'inline' : 'hidden'}><TiTick></TiTick></div>
                    </IconContext.Provider>
                    <h5 className='text-[0.6rem] text-blue-900'>{props.message}</h5>
                </span>
            </div>
        </div>
    )
}