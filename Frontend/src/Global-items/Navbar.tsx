
import "./Navbar.css";

// Yeh Navbar h or yeh Global me isliye rkha me taaki sb page isko access krenge and yeh comman rhega sbke liye 


export default function Navbar(){
      return(
       <div>

        {/* logo ka div */}
        <div></div>

        <div className="flex">
            <span>Home</span>
            <span>AI Tools</span>
            <span>About</span>
        </div>

         <div className="flex">
            {/* token ka div */}
            <div>token</div>

            <span>Login</span>
           
        </div>
           
       </div>
      );
}