import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Pages';
import Shop from './Pages/shop';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact></Route>
        <Route path="/shop" exact>
          <Shop/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
