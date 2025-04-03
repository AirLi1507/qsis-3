import { createRoot } from 'react-dom/client';
import { Router } from './Routing/router.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(<Router />)
