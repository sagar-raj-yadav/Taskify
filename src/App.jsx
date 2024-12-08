import AllComponent from './AllComponent';
import './App.css';
import Members from './components/Members';
import Header from './components/Header';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  { path: "/", element: <AllComponent /> },
  { path: "/member", element: <Members /> }
]);

const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
