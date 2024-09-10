import logo from './logo.svg';
import './App.css';
import Titulo from './titulo';
import Corpo from './corpo';
import { useState } from 'react';
import FormAlunos from './FormAlunos';

function App() {

  const [contador, setContador] = useState(0);
  //Estados
  /* const incrementarContador = () => {
    setContador(contador+1)
  }

  const decrementarContador = () => {
    setContador(contador-1)
  } */
  
  const [exibirForm, setExibirForm] = useState(false);

  const [alunos, setAlunos] = useState([])

  const adicionarAluno = (aluno) => {
    setAlunos([...alunos,aluno]);
  }


  return (
    <div>
      
      <Titulo texto="NOTA ALUNOS"/>

  
      {
        exibirForm && 
        <FormAlunos adicionarAluno={adicionarAluno} setExibirForm={setExibirForm}/>
      }

      {!exibirForm &&
        <Corpo dados={alunos}
          /* incrementarContador={incrementarContador}
          decrementarContador={decrementarContador} */
          setExibirForm={setExibirForm}
        />
      }
      
      {/* <Calculo/> */}
    </div>
  );
}

export default App;
