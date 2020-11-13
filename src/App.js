import { useState } from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import News from "./components/News";
import AddNews from "./components/AddNews";
import Navbar from "./components/Navbar";
import Login from "./components/Login";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <nav>
          <Navbar />
        </nav>
        <div className="main">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/news" component={News} />
            <Route path="/add" component={AddNews} />
            <Route path="/login" component={Login} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
