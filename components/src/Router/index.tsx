import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import RootPage from '../pages/RootPage';
import ErrorPage from '../pages/ErrorPage';
import MainPage from '../pages/MainPage';
import AboutUsPage from '../pages/AboutUsPage';
import { Path } from '../enums';
import FormPage from '../pages/FormPage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path={Path.Home} element={<RootPage />} errorElement={<ErrorPage />}>
      <Route errorElement={<ErrorPage />} />
      <Route index element={<MainPage />} />
      <Route path={Path.About} element={<AboutUsPage />} />
      <Route path={Path.Form} element={<FormPage />} />
    </Route>
  )
);

export default router;
