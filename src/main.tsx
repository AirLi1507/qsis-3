import "./index.css";
import Router from './router.tsx';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router/dom';

import "./i18n.js"
import { ThemeProvider } from "./utils/context.tsx";

createRoot(document.getElementById('root')!).render(
  <ThemeProvider>
    <RouterProvider router={Router} />
  </ThemeProvider>
)
