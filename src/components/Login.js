import React, {useState} from 'react';
import styles from '../blocks/Login.module.css'


const Login = ({handleData}) => {

  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(e) {
    e.preventDefault()
    if (login !== '' && password !== '') {
      handleData(login, password)
    } else {
      alert('Заполните поле email и password')
    }
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
          <button type='submit' className={styles.login__form_button}>Войти</button>
        </form>
      </div>
  );
};

export default Login;
