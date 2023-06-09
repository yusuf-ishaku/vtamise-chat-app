import { FcGoogle } from "react-icons/fc";
import {AiOutlineEye} from "react-icons/ai";
import { AiOutlineEyeInvisible} from 'react-icons/ai'
import FruitImage from "../assets/images/fruit-plate.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { useForm } from "react-hook-form";
import {yupResolver} from '@hookform/resolvers/yup';
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Model } from "../assets/functions/functions";
import * as yup from 'yup';
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { useState } from "react";


export const LoginPage = () =>{
   
    const dispatch = useDispatch();
    // const navigate = useNavigate();
   const [eye, setEye] = useState(false);
    const firebaseConfig = {
        apiKey: "AIzaSyBV9mQryKNrEMkObOxf-70pOMcV7j7tYkM",
        authDomain: "vchat-c5b3b.firebaseapp.com",
        databaseURL: "https://vchat-c5b3b-default-rtdb.firebaseio.com",
        projectId: "vchat-c5b3b",
        storageBucket: "vchat-c5b3b.appspot.com",
        messagingSenderId: "28715899102",
        appId: "1:28715899102:web:f4d2f0e403e581bc9e0a4f",
        measurementId: "G-GQJTY19DKC"
    };
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);
    const schema = yup.object().shape({
        email: yup.string().email().required("Email is invalid"),
        password: yup.string().min(8).required("Password must be at least 8 characters")
    });
    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(schema)
    });
    const provider = new GoogleAuthProvider();
    const navigate = useNavigate();
    
    const onSubmit = (data) =>{
        console.log(data);
        Model.signInUserNormally(auth, data.email, data.password, dispatch, navigate );
    }
    // let fry = "smiling"
    
    return(
        <section className="w-[100%] h-[100vh] flex flex-row-reverse">
            <section className="form flex flex-col items-center justify-center w-[100%] p-3 lg:p-0 lg:w-[40%] bg-white">
                <section className="block w-[70%]">
                    <header>
                        <h2 className="text-gray-900 mb-3 tracking-normal font-normal leading-8 text-3xl">Welcome back!</h2>
                        <article className="text-gray-500 text-sm sm:text-base  font-normal">Get back to your friends and peers</article>
                    </header>
                    <form onSubmit={handleSubmit(onSubmit)} className="w-full flex flex-col mt-6" >
                        <input type="email" placeholder="Email" {...register("email")} className="p-2 my-2 pl-1 border-gray-300 border-b-2 focus:outline-none text-gray-700 font-normal text-base tracking-wide placeholder-gray-400" required/>
                        <span className="text-[0.8rem] text-red-600">{errors.email?.message}</span>
                        <div className="w-full flex flex-row items-center">
                            <input type={eye? "text":"password"} placeholder="Password" {...register("password")} className="w-[100%] p-2 my-2 pl-1 border-gray-300 border-b-2 focus:outline-none text-gray-700 font-normal text-base tracking-wide placeholder-gray-400" required/>
                            <span onClick={() => setEye(!eye)} className=" h-full inline-flex flex-row justify-center items-center">{eye ? <AiOutlineEye></AiOutlineEye> : <AiOutlineEyeInvisible></AiOutlineEyeInvisible>}</span>
                        </div>
                        <span className="text-[0.8rem] text-red-600">{errors.password?.message}</span>
                      
                        <button className="bg-black my-3 mt-8 text-stone-100 border-gray-700 border-2 w-full h-fit p-2 rounded-md" type="submit">Log in</button>
                        <button onClick={() => {Model.signinWithGoogle(auth, provider, navigate, dispatch);}} className="bg-stone-50 my-2 flex flex-row items-center justify-center text-gray-900 border-gray-300 border-2 w-full h-fit p-2 rounded-md" type="submit">
                            <FcGoogle></FcGoogle>
                               <span>Continue with Google</span> 
                        </button>
                        <span className="text-gray-600 text-sm mt-2 text-center">Don't have an account?<span className="ml-1 underline text-green-600"><Link to="/">Sign up</Link></span></span> 
                    </form>
                </section>
            </section>
            <section className="bing-image hidden w-[60%] bg-stone-300 sm:flex items-center flex-row justify-center">
                <img src={FruitImage} alt="Fruit Image " />
                <div className="text-white hidden lg:block p-3 card backdrop-blur-sm lg:w-[35rem] bg-transparent border-white border-1 h-64  absolute">
                    <Swiper
                        spaceBetween={30}
                        centeredSlides={true}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        // pagination={{
                        //     clickable: true,
                        // }}
                        // navigation={true}
                        modules={[Autoplay, Pagination, Navigation]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <div className="swiper flex flex-col justify-center w-[100%] p-4 text-3xl  h-[15rem]">
                                The platform used by thousands to meet fellow fruit lovers.
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="swiper flex flex-col justify-center w-[100%] p-4 text-3xl  h-[15rem]">
                                Chats, groups and forums... all in one place.
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="swiper flex flex-col justify-center w-[100%] p-4 text-3xl  h-[15rem]">
                                Stay on top of upcoming health lifestyle trends, read our blogs, meet nutritionists etc.
                            </div>
                        </SwiperSlide>

                    </Swiper>
                </div>
            </section>
        </section>
    )
}