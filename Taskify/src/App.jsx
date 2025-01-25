
import './App.css';
import AllCard from "./components/AllCard";
import Header from './components/Header';

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Members from './screen/Members';

const App = () => {

  const router = createBrowserRouter([
    { path: "/", element: <>
      <Header/>
      <AllCard/>
    </> },
    // { path: "/login", element: <Login /> },
    // { path: "/signup", element: <Signup /> },
    { path: "/member", element: <Members /> }
  ]);


  return (
    <>
         <RouterProvider router={router} />
    </>
  )
}

export default App