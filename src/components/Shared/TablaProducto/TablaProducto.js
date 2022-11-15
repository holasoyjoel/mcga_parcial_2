

const TablaProducto = ({columnsTable})=>{
    return(
        <>
            <table>
                <tr>
                    {
                        columnsTable.map(column =>{
                            return <th>{column}</th>
                        })
                    }
                    <th>Edit</th>
                    <th>Del</th>
                </tr>
            </table>
        </>
    );
}

export default TablaProducto