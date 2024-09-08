import Footer from './componentes/Footer';
import Header from './componentes/Header';
import MenuNav from './componentes/MenuNav';
import Principal from './componentes/Principal';
import estilos from './App.module.css'
//import ListagemItens from './componentes/ListagemItens';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
//import Inicio from './pagina/Inicio';
import ItemPage from './componentes/ItemPage';
import NaoEncontrada from './pagina/NaoEncontrada';
import { useState } from 'react';
import ListagemItens from './componentes/ListagemItens';
import GameDeals from './componentes/DadosApi';
import SobreNos from './pagina/SobreNois';
// npm install react-slick slick-carousel
const App = () => {
  const [deals, setDeals] = useState([]);
  const [filteredDeals, setFilteredDeals] = useState([]);
  const [filterType, setFilterType] = useState('all'); 
  return (
      <BrowserRouter>
        <div className={estilos.container}>
          <Header />
          <Principal>
            <Routes>   
              <Route path='/sobreNos' element={<SobreNos/>} ></Route>
              <Route path='/naoencontrada' element={<NaoEncontrada />}></Route>
              <Route path='/' element={<GameDeals deals={deals} setDeals={setDeals} filteredDeals = {filteredDeals} setFilteredDeals={setFilteredDeals} filterType={filterType} setFilterType={setFilterType}  />}></Route>
              <Route path='/item/:id' element={<ItemPage deals={deals}/>}></Route>        
            </Routes>
          </Principal>
          <Footer autor="Adrian" />
        </div>
      </BrowserRouter>
  )
}

export default App;
