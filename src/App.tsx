import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { QueryClientProvider, QueryClient } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import Register from './page/register';
import UserDetails from './page/usersDetails';

const router = createBrowserRouter([
  {
    path: 'register',
    element: <Register />
  },
  {
    path: 'userdetails',
    element: <UserDetails />
  }
]);

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} position='bottom-right' />
    </QueryClientProvider>
  )
}

export default App;