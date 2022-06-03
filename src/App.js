import './App.css';
import Textform from './components/Textform';

import Home from './components/Home';
import About from './components/About';
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
    <div>
    <Navbar/>
    <Switch>
    <Route exact path="/">
            <Textform/>
          </Route>
          <Route exact path="/about">
            <About/>
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
         
        </Switch>
        </div>
    </Router>
  );
}

export default App;
