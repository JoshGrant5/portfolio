import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from './components/Home';
import Projects from './components/Projects';
import './styles/App.scss';

export default function App() {
  return (
     <BrowserRouter>
       <Switch>
         <Route path="/" exact component={Home} />
         <Route path="/projects" exact component={Projects} />
       </Switch>
     </BrowserRouter>
  );
}
