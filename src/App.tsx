import React from 'react';
import { RecoilRoot } from 'recoil';
import AdicionaItem from './components/Formulario';
import Itens from './components/ListaDeItens';

function App() {
  return (
    <div className="App">
      <RecoilRoot>
        <Itens />
        <AdicionaItem />
      </RecoilRoot>  
    </div>
  );
}

export default App;
