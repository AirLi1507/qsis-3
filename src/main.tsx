import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import LoginForm from './AuthWrapper/loginForm.tsx';
import NotFound from './AuthWrapper/notfound.tsx';
import Dashboard from './Dashboard/dashboardWrapper.tsx';
import './index.css';
import Home from './Dashboard/home.tsx';
import Profile from './Dashboard/profile.tsx';
import ExtensionCurriculum from './Dashboard/ec.tsx';
import Reading from './Dashboard/reading.tsx';
import SubjectSelection from './Dashboard/ss.tsx';
import Support from './Dashboard/support.tsx';
import Album from './Dashboard/album.tsx';
import Administration from './Dashboard/admin.tsx';
import Settings from './Dashboard/settings.tsx';
import Homework from './Dashboard/homework.tsx';

const studentInfoSample = {
  role: 'Student',
}

const TeacherInfoSample = {
  role: 'Teacher',
}

const dashboardTabs = [
  {
    element: Home,
    path: 'home'
  },
  {
    element: Profile,
    path: 'profile'
  },
  {
    element: Homework,
    path: 'homework'
  },
  {
    element: ExtensionCurriculum,
    path: 'ec'
  },
  {
    element: Reading,
    path: 'reading'
  },
  {
    element: SubjectSelection,
    path: 'ss'
  },
  {
    element: Support,
    path: 'support'
  },
  {
    element: Album,
    path: 'album'
  },
  {
    element: Administration,
    path: 'admin'
  },
  {
    element: Settings,
    path: 'settings'
  },
]

createRoot(document.getElementById('root')!).render(
  <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element=<Navigate to='/login' /> />
        <Route path='/login' element=<LoginForm /> />
        <Route path='/dashboard' element=<Navigate to='/dashboard/home' /> />
        {dashboardTabs.map(function (item) {return (
          <Route path={`/dashboard/${item.path}`} element={
            <Dashboard userInfo={TeacherInfoSample}>
              {item.element(TeacherInfoSample)}
            </Dashboard>
          } />
        )})}
        <Route path='/404' element=<NotFound /> />
        <Route path='/*' element=<Navigate to='/404' /> />
      </Routes>
    </BrowserRouter> 
  </>
)