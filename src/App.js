import React from 'react';
// import './App.css';
import DisplayNumber from "./components/DisplayNumber";
import Login from "./components/login-submission";
import Counter from "./components/Counter";

function App() {
  return (
    <div className="container-fluid">
      <header className="">
        <p>
          Unit Testing React Applications using jest
        </p>
      </header>
        <hr />
        <DisplayNumber />
        <hr />
        <Login />
        <hr />
        <Counter />
    </div>
  );
}

export default App;
