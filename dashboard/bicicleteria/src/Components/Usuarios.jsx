import React, { useEffect, useState } from 'react'



function Usuarios() {
    const [usuarios,setUsuarios] = useState(["Cargando..."]);

    useEffect(()=>{
        fetch("http://localhost:3000/users/listaApi")
        .then (res=>res.json())
        .then(data => {
            setUsuarios(data.data)   
        })
        .catch(e=>console.log(e))
    },[])
    return (
        <div>
            <h3>Cantidad de usuarios: <button>{usuarios.length}</button></h3>
            {/* <ul>
                {usuarios.map((user, i) => (
                    <>
                        <li key={user}> {user.data} </li>
                    </>
                ))}
            </ul> */}
            
        </div>
    )
}

export default Usuarios