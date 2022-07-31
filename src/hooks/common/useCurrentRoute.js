import { useLocation } from 'react-router-dom';

const useCurrentRoute = () => {
  const { pathname, state } = useLocation();
  return { pathname, state };
};

export default useCurrentRoute;
