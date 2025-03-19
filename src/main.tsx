import { createRoot } from 'react-dom/client';
import { Navigate, createBrowserRouter, RouterProvider } from 'react-router-dom'
import LoginForm from './AuthWrapper/loginForm.tsx';
import NotFound from './AuthWrapper/notfound.tsx';
import Dashboard from './Dashboard/dashboardWrapper.tsx';
import './index.css';
import Home from './Dashboard/Tabs/home.tsx';
import Profile from './Dashboard/Tabs/profile.tsx';
import Homework from './Dashboard/Tabs/homework.tsx';
import ExtensionCurriculum from './Dashboard/Tabs/ec.tsx';
import Reading from './Dashboard/Tabs/reading.tsx';
import SubjectSelection from './Dashboard/Tabs/ss.tsx';
import Support from './Dashboard/Tabs/support.tsx';
import Album from './Dashboard/Tabs/album.tsx';
import Administration from './Dashboard/Tabs/admin.tsx';
import Settings from './Dashboard/Tabs/settings.tsx';
import ResetForm from './AuthWrapper/resetForm.tsx';
import { studentInfoSample } from './Data/exampleDataSet.ts';

const routes = [
  { path: '/', element: <Navigate to='/login' /> },
  { path: '/*', element: <Navigate to='/404' /> },
  { path: '/404', element: <NotFound /> },
  { path: '/login', element: <LoginForm /> },
  { path: '/reset', element: <ResetForm /> },
  { path: '/dashboard*', element: <Navigate to='/login' /> },
]

const DashboardTabs = [
  { path: '', element: Home },
  { path: 'profile', element: Profile },
  { path: 'homework', element: Homework },
  { path: 'ec', element: ExtensionCurriculum },
  { path: 'reading', element: Reading },
  { path: 'ss', element: SubjectSelection },
  { path: 'settings', element: Settings },
]

let DashboardRoutes: Array<any> = []

if (localStorage.getItem('login') === 'true') {
  routes.pop()
  DashboardTabs.forEach((i) => {
    DashboardRoutes.push(
      {
        path: `/dashboard/${i.path}`,
        element:
          <Dashboard userInfo={{ data: studentInfoSample }} >
            <i.element data={studentInfoSample} />
          </Dashboard >
      }
    )
  })
}

DashboardRoutes.forEach((i) => { routes.push(i) })

const router = createBrowserRouter(routes)

createRoot(document.getElementById('root')!).render(<RouterProvider router={router} />)


