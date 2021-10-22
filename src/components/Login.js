import React, {useEffect, useState} from 'react';
import styles from '../blocks/Login.module.css'
import cn from 'classnames';


const Login = ({handleData}) => {
  const trueLogin = 'developer21';
  const truePassword = '123456';
  const [disabled, setDisabled] = useState(true);

  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

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
    handleData(login)
  }


  return (
      <div className={styles.login__wrapper} onSubmit={handleSubmit}>
        <form className={styles.login__form}>
          <h4 className={styles.login__form_title}>Вход</h4>
          <input type="text" className={styles.login__form_input}
                 placeholder='Введите email'
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
