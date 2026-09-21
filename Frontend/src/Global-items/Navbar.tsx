import { Link } from "react-router-dom";
import "./Navbar.css";

// Yeh Navbar h or yeh Global me isliye rkha me taaki sb page isko access krenge and yeh comman rhega sbke liye 


export default function Navbar(){
      return(
       <div className="flex justify-between mx-20 border-2 p-3 rounded-2xl mt-2 cursor-pointer" >

        {/* logo ka div */}
        <div>logo</div>

        <div className="flex gap-30.5 justify-between">
            <Link to="/">Home</Link>
            <Link to="/AiTools">AI Tools</Link>
            <Link to="/About">About</Link>
        </div>

         <div className="flex gap-10.5 justify-between">
            {/* token ka div */}
            <div className="flex gap-1">

            {/* tokens ke no rkhne k liye */}
            <span>10</span>
             <Link to="/Tokens">Tokens</Link>
            </div>

            <Link to="/Login">Login</Link>
           
        </div>
           
       </div>
      );
}