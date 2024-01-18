import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './Pages/Layout';
import ErrorPage from './Pages/ErrorPage';
import DashBoard from './Pages/DashBoard';
import Wallet from './Pages/Wallet';
const Router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        element: <DashBoard />,
        path: '/',
      },
      {
        element: <Wallet />,
        path: '/wallet',
      },
    ],
  },
]);
function App() {
  return (
    <>
      <RouterProvider router={Router} />
    </>
  );
}
export default App;
