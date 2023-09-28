import Dashboard from '@/pages/Dashboard';
import DetailsPage from '@/pages/DetailsPage';
import ErrorPage from '@/pages/ErrorPage';
import Home from '@/pages/Home';
import Transactions from '@/pages/Transactions';
import { createBrowserRouter } from 'react-router-dom';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>,
    errorElement: <ErrorPage/>
  },
  {
    path: '/transactions',
    element: <Transactions/>
  },
  {
    path: '/transactions/:id',
    element: <DetailsPage/>
  },
  {
    path: '/dashboard',
    element: <Dashboard/>
  }
])