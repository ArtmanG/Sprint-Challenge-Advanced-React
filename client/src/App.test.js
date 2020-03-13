import React from 'react';
import ReactDOM from 'react-dom';
import { render } from "@testing-library/react";
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('renders an h1 with text Womens World Cup', () => {
  const { getByText } = render(<App />);
  getByText(/women's world cup/i);
});

test('renders an h1 with text Most Searched Players 2019', () => {
  const { getByText } = render(<App />);
  getByText(/most searched players 2019/i);
});
