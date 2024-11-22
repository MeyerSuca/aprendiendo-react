import { useState } from 'react';
import './Button.css'

export default function Button() {
    const [num, setNum] = useState(0); // Número inicial
    const [intentos, cambiarIntentos] = useState(0);
    const [valor, setValor] = useState("");

    function acertar() {
        setNum(Math.round(Math.random() * 10))
        const valorNumerico = parseInt(valor); // Convertir el valor a número
        if (valorNumerico === num) {
            alert(`¡Ganaste en ${intentos + 1} intentos!`);
            cambiarIntentos(0); // Reiniciar intentos
            setNum(Math.round(Math.random() * 10)); // Generar nuevo número
            setValor(""); // Limpiar el campo de entrada
        } else {
            cambiarIntentos(intentos + 1); // Incrementar intentos
        }
    }

    return (
        <div>
            <input
                type="number"
                value={valor}
                onChange={(e) => setValor(e.target.value)} // Actualizar estado del input
                placeholder="Ingresa un número"
            />
            <button onClick={acertar}>Generar numero</button>
            <p>Intentos: {intentos}</p>
        </div>
    );
}
