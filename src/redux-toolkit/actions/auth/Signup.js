import { AuthApi } from '../../../configurations/AxiosIntercenptor';
import { setToken } from '../../slices/authSlice';
import { authRoutes } from '../../../routes/serverRoutes';

const signup = (data, success, fail) => (dispatch) => {
  AuthApi.post(authRoutes.SIGNUP, data)
    .then((res) => {
      dispatch(setToken({ email: res?.data?.data?.email }));
      success();
    })
    .catch((err) => {
      console.log(err);
      fail(err.response?.data?.errors[0]?.message || err?.response?.data?.msg);
    });
};

export { signup };
