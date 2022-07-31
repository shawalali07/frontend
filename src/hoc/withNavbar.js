import { useSelector } from 'react-redux';

const withNavbar = (WrappedComponent) => {
  return () => {
    const token = useSelector((state) => state?.authSlice?.token);
    return <>{token && <WrappedComponent />}</>;
  };
};

export default withNavbar;
