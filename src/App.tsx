import React from 'react';
import logo from './logo.svg';
import './App.css';
import Auth from './components/Auth/Auth';
import PlaceCreate from './Places/PlaceCreate';
import PlaceEdit from './Places/PlaceEdit';
import PlaceIndex from './Places/PlaceIndex';
import PlaceTable from './Places/PlaceTable';

function App() {
  return (
    <div>
      <p>Hello from App</p>
      <Auth />
      <PlaceCreate />
      <PlaceEdit />
      <PlaceIndex />
      <PlaceTable />
    </div>
  );
}

export default App;
