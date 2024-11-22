import { useState } from "react";

export default function Spread() {

    const [nombre, setNombre] = useState("anonimo");
    //Con arreglos de varios valores
    const [usuario, setUsuario] = useState({
        nombre: "Juan",
        apellido: "Santacruz",
        edad: "54",
        correo: "JSantacruz@outlook.com"
    })


    return (
        <div>
            <input type="text" value={nombre} onChange={e => {
                setNombre(e.target.value);
            }} />
            <p>{nombre}</p>
            <br />
            <label htmlFor="">Nombre</label>
            <input type="text" value={usuario.nombre} onChange={e => {
                setUsuario({
                    ...usuario,
                    nombre: e.target.value
                });
            }} />
            <label htmlFor="">Apellido:</label>
            <input type="text" value={usuario.apellido} onChange={e => {
                setUsuario({
                    ...usuario,
                    apellido: e.target.value
                })
            }} />
            <label htmlFor="">Edad:</label>
            <input type="text" value={usuario.edad} onChange={e => {
                setUsuario({
                    ...usuario,
                    edad: e.target.value
                })
            }} />
            <label htmlFor="">Correo:</label>
            <input type="text" value={usuario.correo} onChange={e => {
                setUsuario({
                    ...usuario,
                    correo: e.target.value
                })
            }} />
            <p>Usuario: {usuario.nombre + " " + usuario.apellido + " "} edad: {usuario.edad + " "} correo: {usuario.correo}</p>
        </div>
    );
};