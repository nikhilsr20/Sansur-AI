import { useState,useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

interface LoginResponse{
    message: string;
    token: string;
}
interface SignupResponse{
    message: string;
}


// yeh h login signup ka half section 
export default function LoginSignupHalf(){

    const [currtype,setCurrtype]=useState("Login");
    const email = useRef<HTMLInputElement>(null);
    const password = useRef<HTMLInputElement>(null);
    const cpassword = useRef<HTMLInputElement>(null);

    const [error,setError]=useState<string>("");
    const navigate=useNavigate()


    const handleCurrType=()=>{
        if(currtype==="Login"){
            setCurrtype("Signup");
        }
        else{
             setCurrtype("Login");
        }
    }



   
// yeh type script ka part h and humne idhr useRef isliye use kiya kuyu ki hum re render nhi krana tha 
const errorTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

const Errorremove = () => {

    if (errorTimer.current) {
        clearTimeout(errorTimer.current);
    }

    errorTimer.current = setTimeout(() => {
        setError("");
    }, 2300);
};

    

const handleSubmit = async (e: React.FormEvent<HTMLFormElement>)=>{
     
    console.log("enter");
    e.preventDefault();

    if(!email.current?.value){
      setError("Email is required");
      Errorremove();
      return;
    }
    if(!password.current?.value){
        setError("password is required");
        Errorremove();
        return;
        
    }
    if(currtype==="Signup" && !cpassword.current?.value){
         setError("password is required");
         Errorremove();
         return;
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.com$/;

    if(email.current?.value && !emailRegex.test(email.current?.value)){
       setError("enter correct email");
       Errorremove();
       return;
    }
    if(currtype==="Signup" && password.current?.value != cpassword.current?.value){
         setError("passwords does'nt match");
         Errorremove();
         return;
    }

     // so here instead of the fetch i am using await because woh easy to write h syntactically
    if(currtype==="Login"){
          const response=await axios.post<LoginResponse>("http://localhost:8080/auth/Login",{
            email:email.current?.value,
            password:password.current?.value
          })

          console.log(response.data);
    } 
    else{
          console.log("enter");
        const response=await axios.post<SignupResponse>("http://localhost:8080/auth/Signup",{
            email:email.current?.value,
            password:password.current?.value,
            cpassword:cpassword.current?.value
        })
         console.log(response.data.message);
         if(response.data.message==="Email Already Exists"){
            setError("passwords does'nt match");
         Errorremove();
         return;
         }
         else{
             navigate("/Login");
         }
    }
           
    }

    return (
        <div className="p-10 w-120 border-2 rounded-2xl">
            <div className="flex justify-between mx-10">
                <span className="cursor-pointer" onClick={handleCurrType} style={{color:currtype==="Login"?"blue":"black"}}>Login</span>
                <span className="cursor-pointer" onClick={handleCurrType} style={{color:currtype==="Signup"?"blue":"black"}}>Signup</span>
            </div>

            {error==="" ?<div className="text-red-400 p-1 mt-2 h-2"></div>:<div className=" p-1 font-serif text-red-400 mt-2 h-2">error : {error}</div>}

            <form className="flex flex-col gap-5 mt-10" onSubmit={handleSubmit}>
                <div className="flex flex-col">
                <label>email</label>
                <input ref={email} className="border-1 p-1" type="email" placeholder="Enter your email"/>
                </div>

                <div className="flex flex-col">
                <label>password</label>
                <input ref={password}  className="border-1 p-1" type="password" placeholder="Enter your password"/>
                </div>
                
                {currtype==="Signup"?
                <div className="flex flex-col">
                <label>confirm password</label>
                <input ref={cpassword}  className="border-1 p-1" type="password" placeholder="Confirm your password"/>
                </div>
                :
                <></>}
                
                
                 <button className="p-1 px-2 border-1 cursor-pointer rounded-xl w-fit m-auto hover:bg-blue-500 hover:text-white transition-all" type="submit">{currtype}</button>
                

            </form>

            {/* forgot password */}
            {currtype=="Login"?<div className="flex justify-center mt-5 cursor-pointer">
                    <h1>Forgot Password?</h1>
            </div>:<></>}
            


            {/* -----or----- ye wali line  */}
            <div className="flex justify-between items-center p-2 cursor-pointer">
                <hr className="w-40"/>
                <span>or</span>
                <hr className="w-40"/>
            </div>


            <div className="border-1 flex justify-center items-center gap-2 mt-5">
                {/* image of Google logo */}
                <img className="w-5 h-5" src="https://img.icons8.com/?size=96&id=17949&format=png"></img>
                <span>Continue With Google</span>
            </div>

            
        </div>
    );
}