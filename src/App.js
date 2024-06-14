import './App.css';
import Navbar from './components/Navbar';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"; 

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>
      <Navbar/>
    </div>,
  },
  {
    path: "/about",
    element: <div>
            <Navbar/>
            Hello
    </div>,
  }
]);

function App() {
  return (
    <>
    <RouterProvider router={router} />
    </>
  );
}

export default App;
