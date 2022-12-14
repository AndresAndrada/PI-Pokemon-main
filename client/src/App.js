import { Route } from 'react-router-dom';
import './App.css';
import Cards from './componentes/Cards';
import NavBar from './componentes/NavBar';
import Inicial from './componentes/Inicial';
import CreatePoke from './componentes/CreatePoke';
import Detail from './componentes/DetailsPoke';

function App() {
  return (
    <div className="App">
      <Route path='/' exact component={ Inicial } />
      <Route path='/home' component={  NavBar } />
      {/* <Route path='/home/about' component={About} /> */}
      <Route path='/home' exact component={ Cards } />
      <Route path='/home/detail' exact component={ Detail } />
      <Route path='/home/detail/:id' component={ Detail } />
      <Route path='/home/create' exact component={ CreatePoke } />
    </div>  
  );
}

export default App;
