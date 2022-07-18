import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { AuthProvider } from './context/authContext';

import './index.css';

import App from './App';

import Login from './components/Login';
import ProtectedRoute from './components/Login/ProtectedRoute';
import Dashmin from './components/Dashmin';
import Blog from './components/Blog';
import Post from './components/Blog/Post';
import Error404 from './components/ErrorPages';
import Error418 from './components/ErrorPages/Error418';

ReactDOM.render(
  // <React.StrictMode>
  <BrowserRouter>
    <AuthProvider>
      <Routes>
        <Route path='*' element={<Error404 />} />
        <Route path='coffe' element={<Error418 />} />
        <Route path='/' element={<App />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/blog/:id' element={<Post />} />
        <Route path='/login' element={<Login />} />
        <Route path='/dashmin' element={
          <ProtectedRoute>
            <Dashmin />
          </ProtectedRoute>
        } />
      </Routes>
    </AuthProvider>
  </BrowserRouter>,
  // </React.StrictMode>,
  document.getElementById('root')
);
