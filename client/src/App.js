import { Route } from 'react-router-dom';
import style from './App.module.css';
import Cards from './componentes/Cards';
import NavBar from './componentes/NavBar';
import Inicial from './componentes/Inicial';
import CreatePoke from './componentes/CreatePoke';
import Detail from './componentes/DetailsPoke';
import Name from './componentes/Name';
import DetailType from './componentes/DetailType';
import DetailsApi from './componentes/DetailsApi';
import DetailDB from './componentes/DetailDB';
import AbcAttack from './componentes/AbcAttack';



function App() {
  return (
    <div className={ style.App }>
      <Route path='/home' component={ NavBar } />
      <Route path='/home' exact component={ Cards } />
      <Route path='/home/detail/:id' exact component={ Detail } />
      <Route path='/home/:name' exact component={ Name } />
      <Route path='/home/create/poke' exact component={ CreatePoke } />
      <Route path='/home/detail/type/:poke' exact component={ DetailType } />
      <Route path='/home/datail/api/datos'exact component={ DetailsApi } />
      <Route path='/home/datail/DataBase/datos' exact component={ DetailDB } />
      <Route path='/home/filtros/abc-attack' exact component={ AbcAttack } />

      <div className={ style.inicio }>
        <Route path='/' exact component={ Inicial } />
      </div>
      {/* <Route path='/home/about' component={About} /> */}
    </div> 
  );
}

export default App;
