import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import NavBar from "./navbar";
import Welcome from './welcome';
import Post from './addItem';
import Search from './search';
import About from './about';
import ItemLookup from './itemLookup';
import PostConfirm from './postConfrim';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
it('Navbar without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App><NavBar /></App>, div);
  ReactDOM.unmountComponentAtNode(div);
});
it('Welcome without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App><Welcome /></App>, div);
  ReactDOM.unmountComponentAtNode(div);
});
it('Post without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Post />, div);
  ReactDOM.unmountComponentAtNode(div);
});
it('Search without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App><Search /></App>, div);
  ReactDOM.unmountComponentAtNode(div);
});
it('About without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<About />, div);
  ReactDOM.unmountComponentAtNode(div);
});
it('ItemLookup without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App><ItemLookup results={{}} /></App>, div);
  ReactDOM.unmountComponentAtNode(div);
});
it('PostConfirm without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App><PostConfirm /></App>, div);
  ReactDOM.unmountComponentAtNode(div);
});

