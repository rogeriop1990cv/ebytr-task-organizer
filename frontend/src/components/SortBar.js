import React from 'react';
import './SortBar.css';

function SortBar() {
  return (
    <div className="sortbar">
      <button type="button" className="sortbar__button">Ordem Alfabética</button>
      |
      <button type="button" className="sortbar__button">Data de Criação</button>
      |
      <button type="button" className="sortbar__button">Status</button>
    </div>
  );
}

export default SortBar;
