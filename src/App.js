import './App.css';
// import bootstrap from 'bootstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Home from './pages/home.js';
import AppPage from './pages/app_page.js';
import Project from './pages/project.js';
import NotFound from './pages/404.js';

import Navbar from './components/navbar.js';
import {NavPages} from './components/navbar.js';

function App() {
  return (
    <Router>
      <div className="home">
        <Navbar activePage={NavPages.HOME}/>

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/project">
            <Project />
          </Route>
          <Route path="/app">
            <AppPage />
          </Route>
          <Route path="/">
            <NotFound />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
