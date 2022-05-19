import PropTypes from 'prop-types';
import React, { useState } from 'react';
import trash from '../images/trash.svg';

const formatDate = (date) => {
  if (!date) {
    return null;
  }
  const newDate = new Date(date);
  return newDate.toLocaleDateString();
};

function CardInfo({
  date, handlerRemove, id, status,
}) {
  const [statusSelected, setStatusSelected] = useState(status);

  const handleChange = (event) => {
    setStatusSelected(event.target.value);
  };

  return (
    <div className="cardToDo__info">
      <div className="cardToDo__date">
        { formatDate(date) }
      </div>
      <div className="cardToDo__status">
        <select
          name="status"
          id="status"
          onChange={handleChange}
          className="cardToDo__select"
          value={statusSelected}
        >
          <option className="cardToDo__option" value="Pendente">Pendente</option>
          <option className="cardToDo__option" value="Em andamento">Em andamento</option>
          <option className="cardToDo__option" value="Pronto">Pronto</option>
        </select>
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
  handlerRemove: PropTypes.func,
  id: PropTypes.string,
  status: PropTypes.string,
};

export default CardInfo;
