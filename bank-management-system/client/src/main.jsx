import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store, persistor } from "./store/store.js";
import { PersistGate } from "redux-persist/integration/react";
import Protected from "./components/Protected.jsx";
import {
  HomePage,
  Services,
  ContactUs,
  Profile,
  Charts,
  Account,
  Login,
  Signup,
  Dashboard, 
  SendMoney,
  AddReview,
  Transactions
} from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/contact-us",
        element: <ContactUs />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/profile",
        element: <Profile/>
      },
      {
        path: "/account",
        element: (
          <Protected>
            <Account />
          </Protected>
        ),
        children: [
          {
            path: "/account",
            element: <Dashboard />,
          },
          {
            path: "/account/transactions",
            element: <Transactions />,
          },
          {
            path: "/account/send-money",
            element: <SendMoney />,
          },
          {
            path: "/account/add-review",
            element: <AddReview />,
          }
        ]
      },
      {
        path: "/charts",
        element: (
          <Protected>
            <Charts />
          </Protected>
        ),
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router={router} />
      </PersistGate>
    </Provider>
  </StrictMode>
);
