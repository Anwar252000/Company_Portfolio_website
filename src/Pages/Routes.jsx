
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import Layout from "../Components/Layout";
import Career from "./Career";
import Mission from "./Mission";
import Home from "./Home";
import Vision from "./Vision";
import Philosophy from "./Philosophy";
import Strategy from "./Strategy";
import SoftwareConsulting from "./SoftwareConsulting";
import SoftwareDevelopment from "./SoftwareDevelopment";
import EnterpriseApp from "./EnterpriseApp";
import Techdevelopment from "./TechDevelopment";
import Contact from "./Contact";
import Learnmore from "./Learnmore"


const router = createBrowserRouter([
  
    {
        path: "/",
        element: <Layout/>,
        children:[{
          index:true,
          element: <App/>
        }]
      },
      {
        path: "/",
        element: <Layout />,
        children: [{
            index: true,
            element:<Home/>
        }]
    },
    {
      path: "/mission",
      element: <Layout />,
      children: [{
          index: true,
          element:<Mission/>
      }]
    },
    {
        path: "/vision",
        element: <Layout />,
        children: [{
            index: true,
            element:<Vision/>
        }]
      },
      {
        path: "/philosophy",
        element: <Layout />,
        children: [{
            index: true,
            element:<Philosophy/>
        }]
      },
      {
        path: "/strategy",
        element: <Layout />,
        children: [{
            index: true,
            element:<Strategy />
        }]
      },
      {
        path: "/SoftwareConsulting",
        element: <Layout />,
        children: [{
            index: true,
            element:<SoftwareConsulting/>
        }]
      },
      {
        path: "/SoftwareDevelopment",
        element: <Layout />,
        children: [{
            index: true,
            element:<SoftwareDevelopment/>
        }]
      },
      {
        path: "/EnterpriseApp",
        element: <Layout />,
        children: [{
            index: true,
            element:<EnterpriseApp/>
        }]
      },
      {
        path: "/techdevelopment",
        element: <Layout />,
        children: [{
            index: true,
            element:<Techdevelopment/>
        }]
      },
      {
        path: "/career",
        element: <Layout />,
        children: [{
            index: true,
            element:<Career/>
        }]
      },
      {
        path: "/contact",
        element: <Layout />,
        children: [{
            index: true,
            element:<Contact/>
        }]
      },
      {
        path: "/learnmore",
        element: <Layout />,
        children: [{
            index: true,
            element:<Learnmore/>

        }]
      },
  
  

]);

function Routes() {
  return <RouterProvider router={router} />;
}

export default Routes;
