import React from 'react';
import ReactDOM from 'react-dom';
import MainPage from './sberbank-op';
import SberReg from './sberbank-reg';

it('renders without crashing', () => {
  const sber_op = document.createElement('sber_op');
  const sber_reg = document.createElement('sber_reg');
  ReactDOM.render(<MainPage />, sber_op);
  ReactDOM.render(<SberReg />, sber_reg);
  ReactDOM.unmountComponentAtNode(sber_op);
  ReactDOM.unmountComponentAtNode(sber_reg);
});
