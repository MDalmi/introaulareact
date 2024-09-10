import { useState } from "react";

function Calculo() {

    const [num1, setNum1] = useState(null);
    const [num2, setNum2] = useState(null);
    const [res, setRes] = useState(null);

    return (
        <>
            <h1>Resultado =  {res}</h1>
            <div>
                <label>Numero 1</label>
                <input type="number" value={num1} onChange={e => setNum1(e.target.value)} />
            </div>
            <div> 
                <label>Numero 2</label>
                <input type="number" value={num2} onChange={e => setNum2(e.target.value)} />
            </div>

            <button onClick={
                () => setRes(Number(num1) + Number(num2))}>
                     +
            </button>
            <button onClick={
                () => setRes(Number(num1) - Number(num2))}>
                     -
            </button>
            <button onClick={
                () => setRes(Number(num1) * Number(num2))}>
                     *
            </button>
            <button onClick={
                () => setRes(Number(num1) / Number(num2))}>
                     /
            </button>


        </>
    )

}

export default Calculo;