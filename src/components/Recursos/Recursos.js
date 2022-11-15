import {
    Link
} from "react-router-dom"
const Recursos = ()=>{
    return(
        <>
            <h1>Recursos</h1>
            <ul>
                <li>
                    <Link to="/productos">Productos</Link>
                </li>
            </ul>
        </>
    );
}

export default Recursos;