const Corpo = ({ dados, incrementarContador, decrementarContador, setExibirForm, removerAluno }) => {
    return (
        <>
        <div style={{ display : "flex", alignItems : "center", justifyContent : "center", width : "100%"}}>
            <table>
           
                <thead>
                
                    <tr>
                        <th>Alunos</th>
                        <th>Nota1</th>
                        <th>Nota2</th>
                        <th>Média</th>
                        <th>Ação</th>
                    </tr>
                </thead>
                <tbody>
                {
                    dados.map((aluno, index) => (
                        <tr key={index}>
                            <td>{aluno.aluno1}</td>
                            <td>{aluno.nota1}</td>
                            <td>{aluno.nota2}</td>
                            <td style={{ backgroundColor: aluno.media < 6 ? 'red' : 'transparent' }}>{aluno.media}</td>
                            <td><button onClick={() => removerAluno(aluno)}>x</button></td>
                        </tr>
                    ))
                }
                </tbody>
                
            </table>
            </div>
            
        <div style={{textAlign : "center"}}>
            <button  onClick={() => setExibirForm(true)}> Novo Aluno </button>
        </div>
        </>
    )
};

export default Corpo;
