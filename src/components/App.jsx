import { Route, Routes } from "react-router-dom";
import { useState, lazy, Suspense, useEffect } from "react";
import Layout from "./Layout/Layout.jsx";
import Loader from "../components/Loader/Loader.jsx";
import RestrictedRoute from "./RestrictedRoute.jsx";
import PrivateRoute from './PrivateRoute.jsx';

const HomePage = lazy(() => import("../pages/HomePage/HomePage.jsx"));
const NotFoundPage = lazy(() => import("../pages/NotFoundPage/NotFoundPage"));
const ContactPage = lazy(() =>
  import("../pages/ContactsPage/ContactsPage.jsx")
);
const RegisterPage = lazy(() => import("../pages/RegisterPage/RegisterPage"));
const LoginPage = lazy(() => import("../pages/LoginPage/LoginPage"));

import css from "./App.module.css";
import { useDispatch, useSelector } from "react-redux";
import { refreshUser } from "../redux/auth/operations.js";
import { selectIsRefreshing } from "../redux/auth/selectors.js";

export default function App() {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  if (isRefreshing) {
    return null;
  }

  return (
    <Layout>
      {loading && <Loader />}
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/register"
            element={
              <RestrictedRoute component={<RegisterPage />} redirectTo="/" />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute
                component={<LoginPage />}
                redirectTo="/contacts"
              />
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute component={<ContactPage />} redirectTo="/login" />
            }
          />

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </Layout>
  );

export default App;
