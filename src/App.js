import './App.css';
import {Redirect, Route, Switch, useHistory} from "react-router-dom";
import Main from "./components/Main";
import ProtectedRoute from "./components/ProtectedRoute";
import Login from "./components/Login";
import {useDispatch, useSelector} from "react-redux";
import {setLoggedIn, setUserLogin} from "./redux/store";

function App() {
  const loggedIn = useSelector(state => state.loggedIn);
  const history = useHistory();
  const dispatch = useDispatch()

  function checkData(login) {
      dispatch(setLoggedIn(true))
      dispatch(setUserLogin(login))
      history.push('/profile');
  }

  return (
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Login handleData={checkData}/>
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
