import { createBrowserRouter } from 'react-router-dom';
import { GenerationPage } from './pages/GenerationPage';
import { PrintPage } from './pages/PrintPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <GenerationPage />,
  },
  {
    path: '/data',
    element: <PrintPage />,
  },
]);
