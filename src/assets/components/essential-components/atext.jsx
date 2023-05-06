import { IconContext } from 'react-icons'
import { CgProfile} from 'react-icons/cg'
export const Atext = (props) =>{
    return(
        <>
        <div  className={props.me ? "flex flex-row-reverse items-center": "flex flex-row items-center"}>
            <div className="rounded-full h-8 w-8">
                
                {props.image ? <img className="w-5 h-5 rounded-full object-cover" src={props.image} alt="" ></img> : <IconContext.Provider value={{size: '20px'}}><CgProfile></CgProfile></IconContext.Provider>}
            </div>
            <div className={props.me ? "rounded-br-none px-2 max-w-[16rem]  text-white flex flex-row items-center mb-2 p-1 rounded-md mr-2 bg-gray-700 w-fit h-fit ": "mb-2 rounded-bl-none rounded-md flex flex-row max-w-[16rem] items-center text-gray-700 px-2  p-1 bg-gray-300 w-fit h-fit ml-1 "}>
                <p className="text-[0.8rem] w-full">{props.message}</p>
            </div>
        </div>
       
        </>
    )
}