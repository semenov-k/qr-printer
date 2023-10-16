import { createHashRouter } from 'react-router-dom';
import { GenerationPage } from './pages/GenerationPage';
import { PrintPage } from './pages/PrintPage';

export const router = createHashRouter([
  {
    path: '/',
    element: <GenerationPage />,
  },
  {
    path: '/data',
    element: <PrintPage />,
  },
]);
