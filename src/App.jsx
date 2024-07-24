// src/App.jsx
import React, { useEffect,useState } from 'react';
import { useSelector , useDispatch } from 'react-redux';
import authService from './appwrite/auth';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes';
import {login, logout} from "./store/authSlice"
import './App.css';

function App() {
  const darkMode = useSelector((state) => state.theme.darkMode);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

//auth 

  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    authService.getCurrentUser()
    .then((userData) => {
      if (userData) {
        dispatch(login({userData}))
      } else {
        dispatch(logout())
      }
    })
    .finally(() => setLoading(false))
  }, [])



  return !loading ? ( 
    <div className="App">
      <RouterProvider router={router} />
    </div>
  ):<div>building</div>
}

export default App;
