import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import Formulario from './components/Formulario';
import Menu from './components/Menu';
import ListaDeItens from './pages/ListaDeItens';
import Home from './pages/Inicio';
import Sobre from './pages/Sobre';
import Produto from './pages/Produto';
import NotFound from './pages/NotFound';


export default function AppRouter () {
    return (
        <RecoilRoot>
            <main className="container">
                <Router>
                    <Menu />
                    <Routes >
                        <Route path='/' element={<Home />} />
                            <Route path='formulario' element={<Formulario />} />
                            <Route path='lista-de-itens' element={<ListaDeItens />} /> 
                            <Route path='sobre' element={<Sobre />}> 
                        </Route>
                        <Route path='produto/:id' element={<Produto /> } />
                        <Route path='*' element={<NotFound />} />
                    </Routes>
                </Router>
            </main>
        </RecoilRoot>
    )
}