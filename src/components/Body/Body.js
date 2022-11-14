import { Route, Routes } from "react-router-dom";
import About from "../About/About";
import Home from "../Home/Home";
import Recursos from "../Recursos/Recursos";

const Body = ()=>{
    return(
            <Routes>
                <Route exact path='/recursos' element={<Recursos/>}></Route>
                <Route exact path='/about' element={<About/>}></Route>
                <Route exact path='/' element={<Home/>}></Route>
            </Routes>
    )
}

export default Body;