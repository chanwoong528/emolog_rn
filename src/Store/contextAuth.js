import {createContext, useReducer} from 'react';
export const AuthContext = createContext();

export const LOGIN_USER = 'LOGIN_USER';
export const LOGOUT_USER = 'LOGOUT_USER';

const initialAuthState = {
  userId: '',
  name: '',
  email: '',
  loginType: '',
  platform: '',
  verified: false,
  active: false,
  accessToken: '',
  refreshToken: '',
};
const AuthReducer = (state = initialAuthState, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return {...action.payload};

    case LOGOUT_USER:
      return initialAuthState;
    default:
      return state;
  }
};

export const AuthProvider = ({children}) => {
  const [authState, authDispatch] = useReducer(AuthReducer, initialAuthState);
  const {
    userId,
    name,
    email,
    loginType,
    platform,
    verified,
    active,
    accessToken,
    refreshToken,
  } = authState;
  return (
    <AuthContext.Provider
      value={{
        userId,
        name,
        email,
        loginType,
        platform,
        verified,
        active,
        accessToken,
        refreshToken,
        authDispatch,
      }}>
      {children}
    </AuthContext.Provider>
  );
};
