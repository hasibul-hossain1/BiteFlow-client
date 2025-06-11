import React from "react";
import Navbar from "./components/Common/Navbar";
import { Outlet, useLocation } from "react-router";
import Footer from "./components/Common/Footer";
import { useSelector } from "./hooks/AppContext";
import Loader from "./components/Common/Loader";
import ErrorPage from "./pages/ErrorPage";
import { useEffect } from "react";

function App() {
  const user=useSelector(state=>state.user)
  const foods=useSelector(state=>state.foods)
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // or 'auto' for instant scroll
    });
  }, [pathname]);
  if (foods.error) return <ErrorPage message={foods.error} />;
  if (foods.loading || user.loading) return <Loader />;
  return (
    <>
      <main>
        <Navbar />
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
