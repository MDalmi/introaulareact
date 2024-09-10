import { useState } from "react";

function FormAlunos({ adicionarAluno, setExibirForm }) {

    const [aluno1, setAluno1] = useState("");
    const [nota1, setNota1] = useState("");
    const [nota2, setNota2] = useState("");
    const [media, setMedia] = useState("");

    return (
        <>
            <h2>Aluno</h2>
            <div>
                <label>Aluno</label> <n/><n/><n/>
                <input type="text" value={aluno1} onChange={e => setAluno1(e.target.value)} />
            </div>
            <div>
                <label>Nota 1 </label> <n/><n/>
                <input type="number" value={nota1} onChange={e => setNota1(e.target.value)} />
            </div>
            <div>
                <label>Nota 2</label> <n/><n/>
                <input type="number" value={nota2} onChange={e => setNota2(e.target.value)} />
            </div>
            <div>
                <label>Média do Aluno</label>
                <input value={media}/>
            </div>

            <button onClick={
                () => 
                setMedia((Number(nota1) + Number(nota2)) / 2)

            }>Mostra Média</button>

            <button onClick={
                () => {

                    setMedia((Number(nota1) + Number(nota2)) / 2)

                    adicionarAluno({ aluno1: aluno1, nota1: nota1, nota2: nota2, media: media })
                    
                    setExibirForm(false);

                }
            }>Calcular Média</button>
        </>
    )

}

export default FormAlunos;