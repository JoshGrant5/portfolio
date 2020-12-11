import { BrowserRouter, Route, Switch } from "react-router-dom";
import Nav from './components/Nav';
import Home from './components/Home';
import Projects from './components/Projects';

import './styles/index.scss';

export default function App(props) {
  return (
     <BrowserRouter>
      <Nav />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/projects" exact component={Projects} />
        {/* <Route path="/background" exact component={Background} />
        <Route path="/contact" exact component={Contact} /> */}
      </Switch>
     </BrowserRouter>
  );
}
