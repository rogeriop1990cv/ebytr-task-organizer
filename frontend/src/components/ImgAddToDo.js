import PropTypes from 'prop-types';
import React from 'react';
import addToDo from '../images/add_check.svg';
import './ImgAddToDo.css';

function ImgAddToDo({ handlerAdd }) {
  return (
    <div className="imgaddtodo">
      <button className="imgaddtodo__button" type="button" onClick={handlerAdd}>
        <img className="imgaddtodo__img" src={addToDo} alt="ícone de add nova tarefa" />
      </button>
    </div>
  );
}

ImgAddToDo.defaultProps = {
  handlerAdd: () => {},
};

ImgAddToDo.propTypes = {
  handlerAdd: PropTypes.func,
};

export default ImgAddToDo;
