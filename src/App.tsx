import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Register from './page/register';

const router = createBrowserRouter([
  {
    path: 'register',
    element: <Register />
  }
]);

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App;