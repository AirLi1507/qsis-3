import "./index.css";
import Router from './router.tsx';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router/dom';

createRoot(document.getElementById('root')!).render(
  <RouterProvider router={Router} />
)
