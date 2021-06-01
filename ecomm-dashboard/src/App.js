import logo from "./logo.svg";
import "./App.css";
import { Button } from "react-bootstrap";
import Header from "./Header";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Login from "./Login";
import Register from "./Register";
import AddProduct from "./AddProduct";
import UpdateProduct from "./UpdateProduct";
import Protected from "./Protected";
import ProductList from "./ProductList";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          {/* <Header /> */}
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/add">
            <Protected Cmp={AddProduct} />
            {/* <AddProduct /> */}
          </Route>
          <Route path="/update">
            <Protected Cmp={UpdateProduct} />
            {/* <UpdateProduct /> */}
          </Route>
          <Route path="/">
            <Protected Cmp={ProductList} />
            {/* <AddProduct /> */}
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
