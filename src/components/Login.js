import React, {useEffect, useState} from 'react';
import styles from '../blocks/Login.module.css'
import cn from 'classnames';
import {setLoggedIn, setUserLogin} from "../redux/store";
import {useHistory} from "react-router-dom";
import {useDispatch} from "react-redux";


const Login = () => {
  const trueLogin = 'developer21';
  const truePassword = '123456';
  const [disabled, setDisabled] = useState(true);
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();
  const dispatch = useDispatch()

  useEffect(() => {
    if (login.toString() === trueLogin && password.toString() === truePassword) {
      setDisabled(false)
    }
    return () => {
      setDisabled(true)
    };
  }, [login, password]);

  function handleSubmit(e) {
    e.preventDefault()
    dispatch(setLoggedIn(true))
    dispatch(setUserLogin(login))
    history.push('/profile');
  }

  return (
      <div className={styles.login__wrapper} onSubmit={handleSubmit}>
        <form className={styles.login__form}>
          <h4 className={styles.login__form_title}>Вход</h4>
          <input type="text" className={styles.login__form_input}
                 placeholder='Введите login'
                 value={login || ''}
                 onChange={event => setLogin(event.target.value)}
          />
          <input type="password" className={styles.login__form_input}
                 placeholder='Введите password'
                 value={password || ''}
                 onChange={event => setPassword(event.target.value)}
          />
          <button type='submit' className={cn(styles.login__form_button, {
            [styles.disabled]: disabled === true
          })}
                  disabled={disabled}
          >Войти
          </button>
        </form>
      </div>
  );
};

export default Login;
