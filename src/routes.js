import { Route, Routes } from "react-router-dom";
import { ROUTERS } from "./routes/router";
import Layout from "./pages/layout";
import HomePage from "./pages/home";

const renderUserRouter = () => {
  const userRouters = [
    {
      path: ROUTERS.USER.HOME,
      component: <HomePage/>,
    },
  ];

  return (
    <Layout>
      <Routes>
        {userRouters.map((item, key) => (
          <Route key={key} path={item.path} element={item.component} />
        ))}
      </Routes>
    </Layout>
  );
};

const RouterCustom = () => {
  return renderUserRouter();
};

export default RouterCustom;
