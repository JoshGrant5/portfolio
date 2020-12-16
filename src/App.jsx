import { BrowserRouter, Route, Switch } from "react-router-dom";
import Nav from './components/Nav';
import Landing from './components/Landing';
import Home from './components/Home';
import Resume from './components/Resume';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';

import './styles/index.scss';

export default function App(props) {
  return (
     <BrowserRouter>
      <Nav />
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/home" exact component={Home} />
        <Route path="/projects" exact component={Projects} />
        <Route path="/resume" exact component={Resume} />
        <Route path="/about" exact component={About} />
        <Route path="/contact" exact component={Contact} />
      </Switch>
     </BrowserRouter>
  );
}
