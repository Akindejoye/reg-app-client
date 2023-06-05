import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: 'register',
    element: <h1>Register Page</h1>
  }
]);

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App;