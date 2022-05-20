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

  const handlerRemove = (event) => {
    const { id } = event.target.parentElement;
    setToDoList(toDoList.filter((item) => item._id !== id));
    (async () => {
      fetch(`http://localhost:3001/${id}`, {
        method: 'DELETE',
      });
    })();
  };

  const handlerAdd = () => {
    (async () => {
      const date = await fetch('http://localhost:3001/', {
        method: 'POST',
      });
      const newTask = await date.json();
      toDoList.unshift(newTask);
      setToDoList([...toDoList]);
    })();
  };

  const handlerUpdate = (id, body) => {
    (async () => {
      await fetch(`http://localhost:3001/${id}`, {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        method: 'PUT',
        body: JSON.stringify(body),
      });
    })();
  };

  return (
    <div className="container">
      <Header />
      <SortBar />
      <div className="container__cards">
        {/* Card de add task */}
        <CardToDo>
          <ImgAddToDo handlerAdd={handlerAdd} />
        </CardToDo>

        {
          toDoList.map((task) => (
            <CardToDo key={task._id}>
              <CardDescription
                handlerUpdate={handlerUpdate}
                description={task.description}
                id={task._id}
              />
              <CardInfo
                handlerUpdate={handlerUpdate}
                handlerRemove={handlerRemove}
                id={task._id}
                date={task.createAt}
                status={task.status}
              />
            </CardToDo>
          ))
        }

      </div>
    </div>
  );
}

export default App;
