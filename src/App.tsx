import * as React from 'react';
import { useState, useEffect } from 'react';
import './App.css';
import Auth from './components/Auth/Auth';
import PlaceIndex from './Places/PlaceIndex';
import TrailIndex from './Trails/TrailIndex';
import Sitebar from './home/navbar';
import { Navigate, Route, Routes } from 'react-router-dom';
import HeaderJumboTron from './home/HeaderJumbotron';
import AdminIndex from './Admin/AdminIndex';

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
  const protectedViews= ()=> token ? 
  <Navigate to="/trails" replace/>: <Auth setToken={setToken}/>
  return (
    <div>
      <HeaderJumboTron/>
      <Sitebar clearToken={clearToken}/>
      <Routes>
      <Route path='/' element={protectedViews()}/>

        <Route path='/trails' element={token?<TrailIndex token={token}/>: <Navigate to="/" replace/>}/>
        <Route path='/places' element={token?<PlaceIndex token={token}/>: <Navigate to="/"/>}/>
        <Route path='/admin' element={token?<AdminIndex token={token}/>: <Navigate to="/"/>}/>
        </Routes>
    </div>
  );
}

export default App;
