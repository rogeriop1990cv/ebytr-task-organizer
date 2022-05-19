import React from 'react';
import PropTypes from 'prop-types';
import CardDescription from './CardDescription';
import CardInfo from './CardInfo';
import './CardToDo.css';

function CardToDo({ children }) {
  return (
    <div className="cardToDo">
      { children }
    </div>
  );
}

CardToDo.defaultProps = {
  children:
  <>
    <CardDescription />
    <CardInfo />
  </>,
};

CardToDo.propTypes = {
  children: PropTypes.node,
};

export default CardToDo;
