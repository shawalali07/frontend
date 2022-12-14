import { useSelector } from 'react-redux';

const useLoading = () => {
  const loading = useSelector((state) => state.Loading?.loading);
  return loading;
};

export default useLoading;
