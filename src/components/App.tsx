import * as React from "react";
import logo from 'image/react_logo.svg';
import styles from "./App.css";

interface Props {
  name: string;
}

export default function App(props:Props){
  return (
    <div className={styles.App}>
    <h1>Hello World!</h1>
    <p>Hello {props.name}</p>
    <img src={logo} height="480" />
  </div>
  );
}
