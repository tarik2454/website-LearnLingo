import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <main>
      <Suspense fallback={<div>qweqwe</div>}>
        <Outlet />
      </Suspense>
    </main>
  );
};

export default Layout;
