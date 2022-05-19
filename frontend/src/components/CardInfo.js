import PropTypes from 'prop-types';
import React from 'react';

function CardInfo({ date, status }) {
  return (
    <div className="cardToDo__info">
      <div className="cardToDo__date">
        { date }
      </div>
      <div id="status" className="cardToDo__status">
        <p>{ status }</p>
      </div>
    </div>
  );
}

CardInfo.defaultProps = {
  date: '00/00/00',
  status: 'Status',

};

CardInfo.propTypes = {
  date: PropTypes.string,
  status: PropTypes.string,
};

export default CardInfo;
