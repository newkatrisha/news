import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import News from "./components/News";
import AddNews from "./components/AddNews";
import Login from "./Login";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <nav>
          <ul>
            <li>
              <a href="/">Главная</a>
            </li>
            <li>
              <a href="/news">Новости</a>
            </li>
            <li>
              <a href="/login">Вход/Выход</a>
            </li>
          </ul>
        </nav>
        <div className="main">
          {/* <Login /> */}
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/news" component={News} />
            <Route path="/add" component={AddNews} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
