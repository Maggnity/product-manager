import React from 'react';
import { RecoilRoot } from 'recoil';
import AdicionaItem from './components/Formulario';
import Header from './components/Menu';
import Itens from './pages/ListaDeItens';

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
