import React, { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { publicRoutes } from "./routes/";
import DefaultLayout from "./layouts/DefaultLayout/";
import HeaderOnly from "./layouts/HeaderOnly/";
import NoInternet from "./pages/NoInternet/NoInternet";
import { Fragment } from "react";
import { useSelector } from "react-redux";
const App = () => {
  const { accessToken, loading } = useSelector((state) => state.auth);
  const { internet, checkInternet } = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    if (!loading && !accessToken) {
      // xử lý khi chưa đăng nhập
      //navigate("/");
    }
  }, [accessToken, loading, navigate]);

  return (
    <Routes>
      {publicRoutes.map((route, index) => {
        const Page = route.component;
        let Layout = DefaultLayout;
        if (route.layout) {
          Layout = route.layout;
        } else if (route.layout === null) {
          Layout = HeaderOnly;
        }
        return (
          <Route
            key={index}
            path={route.path}
            element={
              <Layout>
                <Page />
              </Layout>
            }
          />
        );
      })}
    </Routes>
  );
};

export default App;
