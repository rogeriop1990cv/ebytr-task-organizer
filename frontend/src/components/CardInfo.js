import PropTypes from 'prop-types';
import React from 'react';
import trash from '../images/trash.svg';

const formatDate = (date) => {
  if (!date) {
    return null;
  }
  const newDate = new Date(date);
  return newDate.toLocaleDateString();
};

function CardInfo({
  date, status, handlerRemove, id,
}) {
  return (
    <div className="cardToDo__info">
      <div className="cardToDo__date">
        { formatDate(date) }
      </div>
      <div id="status" className="cardToDo__status">
        <p>{ status }</p>
      </div>
      <div className="cardToDo__trash">
        <button id={id} className="cardToDo__button" onClick={handlerRemove} type="button">
          <img className="cardToDo__img" src={trash} alt="icon remover tarefa" />
        </button>
      </div>
    </div>
  );
}

CardInfo.defaultProps = {
  id: '0',
  date: '',
  status: 'Status',
  handlerRemove: () => {},

};

CardInfo.propTypes = {
  date: PropTypes.string,
  status: PropTypes.string,
  handlerRemove: PropTypes.func,
  id: PropTypes.string,
};

export default CardInfo;
