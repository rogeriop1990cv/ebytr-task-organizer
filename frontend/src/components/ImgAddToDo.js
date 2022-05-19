import React from 'react';
import addToDo from '../images/add_check.svg';
import './ImgAddToDo.css';

function ImgAddToDo() {
  return (
    <div className="imgaddtodo">
      <button className="imgaddtodo__button" type="button">
        <img className="imgaddtodo__img" src={addToDo} alt="ícone de add nova tarefa" />
      </button>
    </div>
  );
}

export default ImgAddToDo;
