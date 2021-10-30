import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import MyOrders from './components/MyOrders/MyOrders';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import ContextProvider from './components/Context/ContextProvider';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import GoogleSignIn from './components/GoogleSignIn/GoogleSignIn';
import PlaceOrder from './components/PlaceOrder/PlaceOrder';
import ManageAllUsers from './components/ManageAllUsers/ManageAllUsers';
import Addservice from './components/Addservice/Addservice';
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <ContextProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <Route exact path="/allorders">
              <ManageAllUsers></ManageAllUsers>
            </Route>
            <PrivateRoute exact path="/offer/:title">
              <PlaceOrder></PlaceOrder>
            </PrivateRoute>
            <Route path="/login">
              <GoogleSignIn></GoogleSignIn>
            </Route>
            <Route path="/addservice">
              <Addservice></Addservice>
            </Route>
            <Route path="/myorders">
              <MyOrders></MyOrders>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </ContextProvider>
    </div>
  );
}

export default App;
