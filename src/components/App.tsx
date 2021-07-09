import * as React from "react";
import logo from 'image/react_logo.svg';
import styles from "./App.css";

class App extends React.Component<Record<string, unknown>, undefined> {
  public render() {
    return (
      <div className={styles.App}>
        <h1>Hello World!</h1>
        <p>Hello</p>
        <img src={logo} height="480" />
      </div>
    );
  }
}

declare let module: Record<string, unknown>;

export default App;
