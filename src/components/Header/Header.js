import Navbar from "../Navbar/Navbar";
import style from './Header.module.css';
const Header = ()=>{
    return(
        <div className={`${style.bg_uai} ${style.height_10}`}>
            <Navbar/>
        </div>
    );
};
export default Header;