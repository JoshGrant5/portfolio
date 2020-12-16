import { BrowserRouter, Route, Switch } from "react-router-dom";
import Nav from './components/Nav';
import Home from './components/Home';
import Bio from './components/Bio';
import Resume from './components/Resume';
import Projects from './components/Projects';
import About from './components/About';
// import Education from './components/Education';
import Contact from './components/Contact';

import './styles/index.scss';

export default function App(props) {
  return (
     <BrowserRouter>
      <Nav />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/bio" exact component={Bio} />
        <Route path="/projects" exact component={Projects} />
        <Route path="/resume" exact component={Resume} />
        <Route path="/about" exact component={About} />
        {/* <Route path="/education" exact component={Education} /> */}
        <Route path="/contact" exact component={Contact} />
      </Switch>
     </BrowserRouter>
  );
}
