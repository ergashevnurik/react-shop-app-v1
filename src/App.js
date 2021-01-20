import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Pages';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home}></Route>
      </Switch>
    </Router>
  );
}

export default App;
