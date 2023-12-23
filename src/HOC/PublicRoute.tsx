import React, { ReactNode } from 'react';

interface PublicRouteProps {
  children: ReactNode;
}

const PublicRoute: React.FC<PublicRouteProps> = ({ children }) => {
  return <div>{children}</div>;
};

export default PublicRoute;
