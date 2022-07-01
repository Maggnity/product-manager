import React from 'react';
import { RecoilRoot } from 'recoil';
import AdicionaItem from './components/Formulario';
import Header from './components/Header';
import Itens from './components/ListaDeItens';

function App() {
  return (
    <div className="App">
      <RecoilRoot>
        <Header></Header>
        <Itens />
        <AdicionaItem />
      </RecoilRoot>  
    </div>
  );
}

export default App;
