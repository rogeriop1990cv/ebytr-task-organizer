import PropTypes from 'prop-types';
import React from 'react';

function CardDescription({ description }) {
  return (
    <div id="description" className="cardToDo__description">
      <p>
        { description }
      </p>
    </div>
  );
}

CardDescription.defaultProps = {
  description: 'Uma breve descrição.',

};

CardDescription.propTypes = {
  description: PropTypes.string,
};

export default CardDescription;
