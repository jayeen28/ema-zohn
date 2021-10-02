import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import OrderReview from './components/OrderReview/OrderReview';
import NotFound from './components/NotFound/NotFound';
import PlaceOrder from './components/PlaceOrder/PlaceOrder';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Router>
        <Switch>
          <Route exact path="/">
          </Route>
          <Route path="/shop">
            <Shop></Shop>
          </Route>
          <Route path="/review">
            <OrderReview />
          </Route>
          <Route path="/placeorder">
            <PlaceOrder></PlaceOrder>
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
