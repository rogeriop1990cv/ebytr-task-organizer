/* eslint-disable no-use-before-define */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import PropTypes from 'prop-types';
import React from 'react';

const textAreaElement = (event, func) => {
  const parentTag = event.target.parentElement;
  const idTag = event.target.id.replace('p-', '');
  parentTag.removeChild(event.target);
  parentTag.innerHTML = `
  <textarea
  name="description"
  id=${`t-${idTag}`}
  cols="30"
  rows="10"
  >
  ${event.target.innerText.trim()}
  </textarea>
  `;

  document.getElementById(`t-${idTag}`).select();
  document.getElementById(`t-${idTag}`).classList.add('cardToDo__textarea');
  document.getElementById(`t-${idTag}`).focus();
  document.getElementById(`t-${idTag}`).addEventListener('blur', func);
};

const paragraphElement = (event, fun0, func1) => {
  const parentTag = event.target.parentElement;
  const idTag = event.target.id.replace('t-', '');
  parentTag.removeChild(event.target);
  parentTag.innerHTML = `
  <p id=${`p-${idTag}`}>
  ${event.target.value.trim()}
  </p>
  `;
  const bodyUpdate = {
    [parentTag.getAttribute('name')]: event.target.value.trim(),
  };
  document.getElementById(`p-${idTag}`).addEventListener('click', fun0);
  func1(idTag, bodyUpdate);
};

function CardDescription({ description, id, handlerUpdate }) {
  const handlerParagraphToTextArea = (event) => {
    textAreaElement(event, handlerTextAreaToParagraph);
  };
  const handlerTextAreaToParagraph = (event) => {
    paragraphElement(event, handlerParagraphToTextArea, handlerUpdate);
  };

  return (
    <div className="cardToDo__description" name="description">
      <p
        id={`p-${id}`}
        onClick={handlerParagraphToTextArea}
      >
        {description}
      </p>
    </div>
  );
}

CardDescription.defaultProps = {
  description: 'Uma breve descrição.',
  handlerUpdate: () => {},
  id: '0',

};

CardDescription.propTypes = {
  description: PropTypes.string,
  handlerUpdate: PropTypes.func,
  id: PropTypes.string,
};

export default CardDescription;
