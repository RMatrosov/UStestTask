import './App.css';
import {Redirect, Route, Switch, useHistory} from "react-router-dom";
import Main from "./components/Main";
import ProtectedRoute from "./components/ProtectedRoute";
import Login from "./components/Login";
import {useDispatch, useSelector} from "react-redux";
import {setLoggedIn, setUserLogin} from "./redux/store";

function App() {
  const trueLogin = 'developer21';
  const truePassword = '123456';
  const loggedIn = useSelector(state => state.loggedIn);
  const history = useHistory();
  const dispatch = useDispatch()

  function checkData(login, password) {
    if (login.toString() === trueLogin && password.toString() === truePassword) {
      dispatch(setLoggedIn(true))
      dispatch(setUserLogin(login))
      history.push('/profile');
    }else {
      alert('Введен не верный логин или пароль')
    }
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
