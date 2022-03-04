import * as React from 'react';
import { useState, useEffect } from 'react';

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
import Sitebar from './home/navbar';

function App() {
  const [token, setToken] = useState<null|string>("");
  useEffect(() => {
    if (localStorage.getItem('token')){
      setToken(localStorage.getItem('token'));
    }
  }, [])
  const clearToken= ()=> {
    setToken("")
    localStorage.clear()
  }
  const protectedViews= ()=> token ? <PlaceIndex />: <Auth setToken={setToken}/>
  return (
    <div>
      <Sitebar clearToken={clearToken}/>
      {protectedViews()}
    </div>
  );
}

export default App;
