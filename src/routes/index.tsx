import { DetailsPage } from '@/pages/DetailsPage';
import { Home } from '@/pages/Home';
import { Transactions } from '@/pages/Transactions';
import { createBrowserRouter } from 'react-router-dom';
import { NotFound } from '@/pages/NotFound';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>,
    errorElement: <NotFound/>
  },
  {
    path: '/items',
    element: <Transactions/>,
  },
  {
    path: '/items/:id',
    element: <DetailsPage/>,
  },
])