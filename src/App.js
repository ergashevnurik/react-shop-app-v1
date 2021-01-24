import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Main from './components/Main';
import Basket from './components/Basket';
import Home from './Pages';
import React, {useState} from 'react'
import ShopData from './Data/ShopData';

function App() {
  const {products} = ShopData;
  const [cartItems, setCartItems] = useState([]);
  const onAdd = (product) => {
    const exist = cartItems.find(x => x.id === product.id);
    if (exist) {
      setCartItems(cartItems.map(x => x.id === product.id ? {...exist, qty: exist.qty + 1} : x))
    } else {
      setCartItems([...cartItems, {...product, qty: 1}]);
    }
  }
  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) => x.id === product.id ? {...exist, qty: exist.qty - 1} : x)
      )
    }
  }
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact></Route>
        <Route path="/shop" exact>
          <Header countCartItems={cartItems.length}/>
          <div className="row">
            <Main onAdd={onAdd} products={products}></Main>
            <Basket onAdd={onAdd} onRemove={onRemove} cartItems={cartItems}></Basket>
          </div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
