import React from "react";
import Navbar from "./components/Common/Navbar";
import { Outlet } from "react-router";
import Footer from "./components/Common/Footer";
import { useApp } from "./hooks/AppContext";
import Loader from "./components/Common/Loader";
import ErrorPage from "./pages/ErrorPage";

function App() {
  const { state } = useApp();
  if (state.foods.error) return <ErrorPage message={state.error}/>;
  return (
    <>
      <main>
        <Navbar />
        {state.foods.loading || state.user.loading ? <Loader /> : <Outlet />}
      </main>
      <Footer />
    </>
  );
}

export default App;
