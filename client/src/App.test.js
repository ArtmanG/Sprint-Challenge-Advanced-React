import React from 'react';
import ReactDOM from 'react-dom';
import { render, fireEvent } from "@testing-library/react";
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

test("renders cards after API get", async () => {
  const { findAllByTestId } = render(<App />);
  await findAllByTestId('playerCard');
});

test("dark mode button works", () => {
  const { getByText } = render(<App />);
  const darkModeToggle = getByText(/dark mode/i);
  const state = document.body.classList.contains('dark-mode');
  fireEvent.click(darkModeToggle);
  expect(document.body.classList.contains('dark-mode')).toBe(state);
})