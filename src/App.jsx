import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Pages/Layout";
import ErrorPage from "./Pages/ErrorPage";
import DashBoard from "./Pages/DashBoard";
const Router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        element: <DashBoard />,
        path: "/",
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
