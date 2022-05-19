import React from 'react';
import './App.css';
import CardDescription from './components/CardDescription';
import CardInfo from './components/CardInfo';
import CardToDo from './components/CardToDo';
import Header from './components/Header';
import SortBar from './components/SortBar';

function App() {
  return (
    <div className="container">
      <Header />
      <SortBar />
      <div className="container__cards">
        <CardToDo>
          <CardDescription description="Hello My Friend!!!" />
          <CardInfo date="20/15/1254" status="Pendente" />
        </CardToDo>
      </div>
    </div>
  );
}

export default App;
