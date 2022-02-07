import './App.css';
// import bootstrap from 'bootstrap';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Home from './pages/home.js';
import AppPage from './pages/app_page.js';
import Project from './pages/project.js';
import NotFound from './pages/404.js';

import Navigation from './components/navigation.js';
import {NavPages} from './components/navigation.js';
import {Container} from "react-bootstrap";

function App() {
  return (
    <Router>
      <Container>
        <Navigation activePage={NavPages.HOME}/>

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/project" element={<Project />}/>
          <Route path="/app" element={<AppPage />} />
          <Route path="/" element={<NotFound />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
