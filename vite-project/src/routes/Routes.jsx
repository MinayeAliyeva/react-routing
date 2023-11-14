import MainRoute from "../MainRoute/MainRoute";
import About from "../Pages/About/About";
import Home from '../Pages/Home/Home';


export const Routes = [
  {
    path: "/",
    element: <MainRoute />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      }
    ],
  },
];
