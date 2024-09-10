/* import { useState } from "react";

function Form({ setExibirForm, adicionarTodo }) {

    const [tarefa, setTarefa] = useState("");
    const [data, setData] = useState("");
    return (
        <>
        <h2>Todo</h2>
        <div>
            <label>Tarefa</label>
            <input type="text" value={tarefa} onChange={e => setTarefa(e.target.value)}/> 
        </div>
        <div>
            <label>Data</label>
            <input type="date" value={data} onChange={e => setData(e.target.value)}/> 
        </div>
        <button onClick={
                () => {
                    setExibirForm(false);
                    adicionarTodo({tarefa : tarefa, data : data})
                }
            }>Salvar</button>
        </>
    )
    
}

export default Form; */