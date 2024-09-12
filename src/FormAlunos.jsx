import { useState } from "react";

function FormAlunos({ adicionarAluno, setExibirForm }) {

    const [aluno1, setAluno1] = useState("");
    const [nota1, setNota1] = useState("");
    const [nota2, setNota2] = useState("");
    const [media, setMedia] = useState(0.0);

    const calcularMedia = () => {
        const mediaCalculada = (Number(nota1) + Number(nota2)) / 2;
        setMedia(mediaCalculada);
        return mediaCalculada;
    };

    const handleCalcularMedia = () => {
        const mediaCalculada = calcularMedia();
        adicionarAluno({ aluno1, nota1, nota2, media: mediaCalculada });
        setExibirForm(false);
    };

    return (
        <>
            <h2 style={{textAlign : "center"}}>Aluno</h2>
            <div style={{textAlign : "center"}}>
                <label>Aluno </label> <n/><n/><n/>
                <input type="text" value={aluno1} onChange={e => setAluno1(e.target.value)} />
            </div>
            <div style={{textAlign : "center"}}>
                <label>Nota 1 </label> <n/><n/>
                <input type="number" value={nota1} onChange={e => setNota1(e.target.value)} />
            </div>
            <div style={{textAlign : "center"}}>
                <label>Nota 2</label> <n/><n/>
                <input type="number" value={nota2} onChange={e => setNota2(e.target.value)} />
            </div>
            <div style={{textAlign : "center"}}>
                <label> Média do Aluno </label>
                <input value={media} readOnly />
            </div>
            <div style={{textAlign : "center"}}>
            {/* <button  onClick={() => setMedia(calcularMedia())}>Mostra Média</button> */}

            <button  onClick={handleCalcularMedia}>Calcular Média</button>
            </div>
        </>
    );
}

export default FormAlunos;
