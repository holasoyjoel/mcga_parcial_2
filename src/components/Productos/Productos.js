import { useState } from "react";
import TablaProducto from "../Shared/TablaProducto/TablaProducto";
import {cofigureStore , applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import ProductoReducer from "../../reducers/ProductoReducer";

const store = configureStore(ProductoReducer);

const Productos = ()=>{
    const [columnsTable , setColumnsTable] = useState(["Id" , "Name" , "Price" , "Stock" , "Description"]);
    
    return(
        <>
            <h1>Productos</h1>
            <hr></hr>
            <TablaProducto columnsTable = {columnsTable}/>
            
        </>
    );
}

export default Productos;