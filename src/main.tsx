import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import LoginForm from './AuthWrapper/loginForm.tsx';
import NotFound from './AuthWrapper/notfound.tsx';
import Dashboard from './Dashboard/dashboardWrapper.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element=<Navigate to='/login' /> />
        <Route path='/login' element=<LoginForm /> />
        <Route path='/dashboard' element=<Dashboard>dashboard</Dashboard> />
        <Route path='/dashboard/home' element=<Dashboard>home</Dashboard> />
        <Route path='/dashboard/profile' element=<Dashboard>profile</Dashboard> />
        <Route path='/dashboard/homework' element=<Dashboard>homework</Dashboard> />
        <Route path='/dashboard/ec' element=<Dashboard>ec</Dashboard> />
        <Route path='/dashboard/reading' element=<Dashboard>reading</Dashboard> />
        <Route path='/404' element=<NotFound /> />
        <Route path='/*' element=<Navigate to='/404'/>/>
      </Routes>
    </BrowserRouter> 
  </>
)
