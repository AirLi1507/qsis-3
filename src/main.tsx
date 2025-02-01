import { Profiler } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import './index.css';
import LoginForm from './AuthWrapper/loginForm.tsx';
import NotFound from './AuthWrapper/notfound.tsx';
import Dashboard from './Dashboard/dashboard.tsx';

createRoot(document.getElementById('root')!).render(
  <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element=<Navigate to='/login' /> />
        <Route path='/login' element=<LoginForm /> />
        <Route path='/dashboard' element=<Dashboard /> />
        <Route path='/404' element=<NotFound /> />
        <Route path='/*' element=<Navigate to='/404'/>/>
      </Routes>
    </BrowserRouter> 
  </>
)
