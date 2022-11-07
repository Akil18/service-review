import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";
import "./App.css";
import Main from "./layout/Main";
import Blogs from "./pages/Blogs/Blogs";
import Home from "./pages/Home/Home";
import ServiceDetails from "./pages/ServiceDetails/ServiceDetails";
import Services from "./pages/Services/Services";

function App() {
   const router = createBrowserRouter([
      {
         path: "/",
         element: <Main></Main>,
         children: [
            {
               path: "/",
               element: <Home></Home>,
            },
            {
               path: "blogs",
               element: <Blogs></Blogs>,
            },
            {
               path: "services",
               element: <Services></Services>,
            },
            {
               path: "services/:_id",
               loader: ({ params }) =>
                  fetch(`http://localhost:5000/services/${params._id}`),
               element: <ServiceDetails></ServiceDetails>,
            },
         ],
      },
      {
         path: "*",
         element: (
            <h1 className="text-xl mt-16">
               Nohting Here. Go back to{" "}
               <Link className="text-blue-500" to="/">
                  Home
               </Link>
            </h1>
         ),
      },
   ]);
   return (
      <div className="App">
         <RouterProvider router={router}></RouterProvider>
      </div>
   );
}

export default App;
