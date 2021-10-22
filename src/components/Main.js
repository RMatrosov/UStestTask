import React from 'react';
import styles from '../blocks/Main.module.css'
import {useSelector} from "react-redux";

const Main = () => {
  const userLogin = useSelector(state => state.userLogin);

  return (
      <div className={styles.main__wrapper}>
        <h1 className={styles.main__title}>{userLogin}</h1>
      </div>
  );
};

export default Main;
