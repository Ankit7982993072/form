import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import Nam from './Name';

import Dash from './Dashboard/Dashboard';
import Login from './LOGIN/login';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
       <Switch>
       <Route path='/create-new' exact component={Dash}/>
         
        <Route path='/form/:' exact component={Nam}/>
        <Route path='/'  exact component={Login}/>         
       </Switch>

    </div>
    </BrowserRouter>
  );
}

export default App;
