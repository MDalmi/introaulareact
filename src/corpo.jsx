const Corpo = ({ dados, incrementarContador, decrementarContador, setExibirForm }) => {
    return (
        <>
            <h1>Corpo da Página</h1>

            <button onClick={()=> setExibirForm(true)}> Novo Aluno </button>
         
            <table>
                <br/>
                <tr>
                    <th>Alunos</th>
                    <th>Nota1</th>
                    <th>Nota2</th>
                    <th>MEDIA</th>
                </tr>
                {
                    dados.map((aluno, index) => (
                        <tr key={index}>
                            <td>{aluno.aluno1}</td>
                            <td>{aluno.nota1}</td>
                            <td>{aluno.nota2}</td>
                            <td style={{backgroundColor : aluno.media<6 && 'red'}}>{aluno.media}</td>
                            
       
                        </tr>
                    ))
                }
            </table>
        </>
    )
}

export default Corpo;