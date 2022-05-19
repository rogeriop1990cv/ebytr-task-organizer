import React from 'react';
import './App.css';
import CardDescription from './components/CardDescription';
import CardInfo from './components/CardInfo';
import CardToDo from './components/CardToDo';
import Header from './components/Header';

function App() {
  return (
    <div>
      <Header />
      <br />
      <CardToDo>
        <CardDescription description="Hello My Friend!!!" />
        <CardInfo date="20/15/1254" status="Pendente" />
      </CardToDo>
    </div>
  );
}

export default App;
