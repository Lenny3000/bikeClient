import React from 'react';
import logo from './logo.svg';
import './App.css';
import Auth from './components/Auth/Auth';
import PlaceCreate from './Places/PlaceCreate';
import PlaceEdit from './Places/PlaceEdit';
import PlaceIndex from './Places/PlaceIndex';
import PlaceTable from './Places/PlaceTable';
import TrailCreate from './Trails/TrailCreate';
import TrailEdit from './Trails/TrailEdit';
import TrailIndex from './Trails/TrailIndex';
import TrailTable from './Trails/TrailTable';

function App() {
  return (
    <div>
      <Auth />
      <PlaceCreate />
      <PlaceEdit />
      <PlaceIndex />
      <PlaceTable />
      <TrailCreate />
      <TrailEdit />
      <TrailIndex />
      <TrailTable />
    </div>
  );
}

export default App;
