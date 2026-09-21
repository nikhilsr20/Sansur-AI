import { BrowserRouter,Routes,Route } from "react-router-dom";
import Landing from "./Landing-page-items/Landing";
import AiTools from "./AI-Tools-page-items/AiTools";
import About from "./About-page-items/About";
import LoginSignupPage from "./Authentication-page-items/LoginSignupPage";
import TokensData from "./Tokens-page-items/TokensData";
export default function Routing(){
    return (

        <BrowserRouter>
        <Routes>
            <Route path='/' element={<Landing />}></Route>
            <Route path='/AiTools' element={<AiTools />}></Route>
             <Route path='/About' element={<About />}></Route>
              <Route path='/Login' element={<LoginSignupPage />}></Route>
            <Route path='/Tokens' element={<TokensData />}></Route>


        </Routes>
        </BrowserRouter>
        
    );

}