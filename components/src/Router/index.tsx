import {
  createBrowserRouter,
  createRoutesFromElements, Route,
} from "react-router-dom";
import RootPage from "../pages/RootPage";
import ErrorPage from "../pages/ErrorPage";
import MainPage from "../pages/MainPage";
import AboutUsPage from "../pages/AboutUsPage";

const router = createBrowserRouter(createRoutesFromElements(
  <Route
    path="/"
    element={<RootPage />}
    errorElement={<ErrorPage />}
  >
    <Route errorElement={<ErrorPage />} />
    <Route index element={<MainPage />} />
    <Route
      path="/about"
      element={<AboutUsPage />}
      />
  </Route>
));

export default router;