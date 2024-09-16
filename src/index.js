import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";
import Home from "./pages/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./pages/Error";
import Body from "./components/Body";

import reportWebVitals from "./reportWebVitals";
import RestaurantMenu from "./components/RestaurantMenu";
import Cart from "./components/Cart";

const Grocery = lazy(() => import("./components/GroceryStore"));

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h2>Loading.....</h2>}>
            <Grocery />
          </Suspense>
        ),
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);

reportWebVitals();

// Watch Namaste React Episode 7  for  React router dome concept
// bar bar dekhna mast padaya hai londe ne.

// uppar me  Client side routing ho rahi hai, ham server ko call nahi karre hain nye route me jane ke liye.
