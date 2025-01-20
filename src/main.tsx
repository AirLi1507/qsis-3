import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import './index.css';
import LoginForm from './AuthWrapper/loginForm';
import NotFound from './AuthWrapper/notfound';
import Dashboard from './Dashboard/dashboard';

createRoot(document.getElementById('root')!).render(
  <>
    <Helmet>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link rel="stylesheet" href="fonts/noto.css" />
      <link rel="shortcut icon" href="images/icon.png" type="image/x-icon" />
      <title>QSIS 3</title>
    </Helmet>
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
