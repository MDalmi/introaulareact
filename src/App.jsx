import logo from './logo.svg';
import './App.css';
import Titulo from './titulo';
import Corpo from './corpo';
import { useState } from 'react';
import FormAlunos from './FormAlunos';

function App() {

  const [contador, setContador] = useState(0);
  // Estados
  /* const incrementarContador = () => {
    setContador(contador+1)
  }

  const decrementarContador = () => {
    setContador(contador-1)
  } */
  
  const [exibirForm, setExibirForm] = useState(false);

  const [alunos, setAlunos] = useState([]);

  const adicionarAluno = (aluno) => {
    setAlunos([...alunos, aluno]);
  };

  const removerAluno = (aluno_x) => {
    setAlunos(alunos.filter(aluno => aluno !== aluno_x));
  };

  return (
    <div>
      <Titulo texto="MÉDIA DOS ALUNOS"/>

      {
        exibirForm && 
        <FormAlunos adicionarAluno={adicionarAluno} setExibirForm={setExibirForm}/>
      }

      {!exibirForm &&
        <Corpo 
          dados={alunos}
          /* incrementarContador={incrementarContador}
          decrementarContador={decrementarContador} */
          setExibirForm={setExibirForm}
          removerAluno={removerAluno}
        />
      }
      
      {/* <Calculo/> */}
    </div>
  );
}

export default App;
