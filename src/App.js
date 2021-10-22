import './App.css';
import {Redirect, Route, Switch} from "react-router-dom";
import Main from "./components/Main";
import ProtectedRoute from "./components/ProtectedRoute";
import Login from "./components/Login";
import {useSelector} from "react-redux";


function App() {
  const loggedIn = useSelector(state => state.loggedIn);

  return (
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Login/>
          </Route>
          <ProtectedRoute
              loggedIn={loggedIn}
              component={Main}
          />
          <Route exact path="/profile">
            <Main/>
          </Route>
          <Redirect to={{pathname: '/'}}/>
        </Switch>
      </div>
  );
}

export default App;
