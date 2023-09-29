import { Dashboard } from '@/pages/Dashboard';
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
    path: '/transactions',
    element: <Transactions/>,
  },
  {
    path: '/transactions/:id',
    element: <DetailsPage/>,
  },
  {
    path: '/dashboard',
    element: <Dashboard/>,
  }
])