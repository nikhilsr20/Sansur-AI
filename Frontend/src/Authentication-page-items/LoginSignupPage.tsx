import DesignHalf from "./DesignHalf";
import LoginSignupHalf from "./LoginSignupHalf";




// isme me login page or signup dono ek me hi include krne ka try krunga 
export default function LoginSignupPage(){
    return (
    <div>
        {/* yah 2 div mene partioning ke liye bnaye h like half side login page rkhenge and half side me ese images type automatic jo change ho */}

        {/* for Login box */}
        <div>
            <LoginSignupHalf/>
        </div>


         {/* for images  */}
         <div>
                <DesignHalf/>
        </div>


    </div>
    );
}