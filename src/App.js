import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import "./App.css";
import Main from "./layout/Main";
import AddService from "./pages/AddService/AddService";
import Blogs from "./pages/Blogs/Blogs";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import MyReviews from "./pages/MyReviews/MyReviews";
import Register from "./pages/Register/Register";
import ServiceDetails from "./pages/ServiceDetails/ServiceDetails";
import Services from "./pages/Services/Services";
import PrivateRoute from "./routes/PrivateRoute";

function App() {
   const notify = (verdict) => toast(verdict, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light"
    });

    const handleBtnClick = (action) => {
      notify(action);
    }

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
            {
               path: "login",
               element: <Login></Login>,
            },
            {
               path: "register",
               element: <Register></Register>,
            },
            {
               path: "myreviews",
               element: (
                  <PrivateRoute>
                     <MyReviews handleBtnClick={handleBtnClick}></MyReviews>
                  </PrivateRoute>
               ),
            },
            {
               path: "addservice",
               element: (
                  <PrivateRoute>
                     <AddService></AddService>
                  </PrivateRoute>
               ),
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
         <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
        ></ToastContainer>
      </div>
   );
}

export default App;
