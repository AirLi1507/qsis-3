import { Navigate } from 'react-router-dom'

import LoginForm from '../AuthWrapper/loginForm.tsx';
import NotFound from '../AuthWrapper/notfound.tsx';

import Home from '../Dashboard/Tabs/home.tsx';
import Profile from '../Dashboard/Tabs/profile.tsx';
import Homework from '../Dashboard/Tabs/homework.tsx';
import ExtensionCurriculum from '../Dashboard/Tabs/ec.tsx';
import Reading from '../Dashboard/Tabs/reading.tsx';
import SubjectSelection from '../Dashboard/Tabs/ss.tsx';
import Support from '../Dashboard/Tabs/support.tsx';
import Album from '../Dashboard/Tabs/album.tsx';
import Administration from '../Dashboard/Tabs/admin.tsx';
import Settings from '../Dashboard/Tabs/settings.tsx';
import ResetForm from '../AuthWrapper/resetForm.tsx';

const BaseRoutes = [
  { path: '/', element: <Navigate to='/login' /> },
  { path: '/*', element: <NotFound /> },
  { path: '/login', element: <LoginForm /> },
  { path: '/reset', element: <ResetForm /> },
]

const DashboardTabs = [
  [
    { path: '', element: Home },
    { path: 'profile', element: Profile },
    { path: 'homework', element: Homework },
    { path: 'ec', element: ExtensionCurriculum },
    { path: 'reading', element: Reading },
    { path: 'ss', element: SubjectSelection },
    { path: 'settings', element: Settings },
  ],
  [
    { path: 'support', element: Support },
    { path: 'album', element: Album },
    { path: 'admin', element: Administration }
  ]
]

export { BaseRoutes, DashboardTabs }
