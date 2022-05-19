/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState } from 'react';
import './App.css';
import CardDescription from './components/CardDescription';
import CardInfo from './components/CardInfo';
import CardToDo from './components/CardToDo';
import Header from './components/Header';
import ImgAddToDo from './components/ImgAddToDo';
import SortBar from './components/SortBar';

function App() {
  const [toDoList, setToDoList] = useState([]);

  useEffect(() => {
    (async () => {
      const allTodo = await fetch('http://localhost:3001/');
      const dataJson = await allTodo.json();
      setToDoList(dataJson);
    })();
  }, []);

  return (
    <div className="container">
      <Header />
      <SortBar />
      <div className="container__cards">
        {/* Card de add task */}
        <CardToDo>
          <ImgAddToDo />
          <CardInfo date="" status="Adicionar" />
        </CardToDo>

        {
          toDoList.map((task) => (
            <CardToDo key={task._id}>
              <CardDescription description={task.description} />
              <CardInfo date={task.createAt} status={task.status} />
            </CardToDo>
          ))
        }

      </div>
    </div>
  );
}

export default App;
