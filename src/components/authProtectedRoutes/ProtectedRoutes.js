import React from 'react';
import { Navigate } from 'react-router-dom';
import { useGetToken } from '../../hooks/register/useGetToken';
import { browserRoutes } from '../../routes/browserRoutes';
import isEmpty from '../../utils/isEmpty';

const ProtectedRoutes = ({ children, redirectLink }) => {
  const token = useGetToken();
  if (isEmpty(token)) {
    return (
      <Navigate
        to={redirectLink ? redirectLink : browserRoutes.LOGIN}
        replace
      />
    );
  }
  return children;
};

export default ProtectedRoutes;
