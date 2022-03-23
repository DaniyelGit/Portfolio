import React from 'react';
import './App.css';
import {Header} from "./header/Header";
import {Main} from "./main/Main";
import {Skills} from "./skills/Skills";
import {MyWorks} from "./works/MyWorks";
import {Freelance} from "./ freelance/Freelance";

function App() {
  return (
    <div className="App">
        <Header/>
        <Main/>
        <Skills/>
        <MyWorks/>
        <Freelance/>
    </div>
  );
}

export default App;
