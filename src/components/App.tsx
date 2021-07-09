import * as React from "react";

import image from './../assets/img/react_logo.svg';
import "./../assets/scss/App.scss";
import styles from "./App.css";

console.log(styles.App);

class App extends React.Component<Record<string, unknown>, undefined> {
  public render() {
    return (
      <div className={styles.App}>
        <h1>Hello World!</h1>
        <p>Foo to 21231231xcxzcxxcxzcxzc333z
          1
          2
          3
          4xcxzczxc
          5
          1</p>

        <img src={image} height="480" />
      </div>
    );
  }
}

declare let module: Record<string, unknown>;

export default App;
