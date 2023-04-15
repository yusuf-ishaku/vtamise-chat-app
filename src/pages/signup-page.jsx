import { FcGoogle } from "react-icons/fc"
import FruitImage from "../assets/images/fruitimage.png"
export const SignUpPage = () =>{
    return(
        <section className="w-[100%] h-[100vh] flex flex-row">
            <section className="form flex flex-col items-center justify-center w-[40%] bg-white">
                <section>
                    <header>
                        <h2 className="text-gray-900 mb-4 tracking-normal font-normal leading-8 text-3xl">Create an account</h2>
                        <article className="text-gray-500 text-sm font-normal">Join Vtamise chats, and meet with 1000+ fruit lovers!</article>
                    </header>
                    <form className="w-auto flex flex-col mt-6" >
                        <input type="text" placeholder="Username" className="p-3 my-2 pl-1 border-gray-300 border-b-2 focus:outline-none text-gray-700 font-normal text-base tracking-wide placeholder-gray-400" required/>
                        <input type="email" placeholder="Email" className="p-3 my-2 pl-1 border-gray-300 border-b-2 focus:outline-none text-gray-700 font-normal text-base tracking-wide placeholder-gray-400" required/>
                        <input type="password" placeholder="Password" className="p-3 my-2 pl-1 border-gray-300 border-b-2 focus:outline-none text-gray-700 font-normal text-base tracking-wide placeholder-gray-400" required/>
                        <button className="bg-black my-3 mt-10 text-stone-100 border-gray-700 border-2 w-full h-fit p-3 rounded-md" type="submit">Create account</button>
                        <button className="bg-stone-50 my-2 flex flex-row items-center justify-center text-gray-900 border-gray-300 border-2 w-full h-fit p-3 rounded-md" type="submit">
                            <FcGoogle></FcGoogle>
                               <span>Sign up with Google</span> 
                        </button>
                    </form>
                </section>
            </section>
            <section className="bing-image w-[60%] bg-stone-300 flex items-center flex-row justify-center">
                <img src={FruitImage} alt="Fruit Image " />
                <div className="text-white p-3 card backdrop-blur-sm w-[35rem] bg-transparent border-white border-1 h-64  absolute">
                    
                </div>
            </section>
        </section>
    )
}