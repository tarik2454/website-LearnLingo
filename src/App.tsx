import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';

import Layout from './components/Layout';
const Home = lazy(() => import('./pages/Home/Home'));
import Welcome from './pages/Welcome/Welcome';
import NotFound from './pages/NotFound/NotFound';
import PublicRoute from './HOC/PublicRoute';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="website-LearnLingo" element={<Layout />}>
          <Route index element={<Home />} />

          <Route
            path="welcome"
            element={
              <PublicRoute>
                <Welcome />
              </PublicRoute>
            }
          />
          <Route
            path="signin"
            element={
              <PublicRoute>
                <Welcome />
              </PublicRoute>
            }
          />
          <Route
            path="signup"
            element={
              <PublicRoute>
                <Welcome />
              </PublicRoute>
            }
          />

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
