import { UserController } from '../controllers';
import { strings } from '../localization';
import RNRestart from 'react-native-restart';
import { I18nManager } from 'react-native';
export const TYPES = {
  CLEAR_STORE: 'CLEAR_STORE',
  LOGIN: 'LOGIN',
  LOGIN_REQUEST: 'LOGIN_REQUEST',
  LOGIN_ERROR: 'LOGIN_ERROR',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LANGUAGE:'LANGUAGE',
};


// action 
const loginRequest = () => ({
  type: TYPES.LOGIN_REQUEST,
  payload: null,
});

const loginSuccess = (user) => ({
  type: TYPES.LOGIN_SUCCESS,
  payload: { user },
});

const loginError = (error) => ({
  type: TYPES.LOGIN_ERROR,
  payload: { error },
});

const clearStore = () => ({
  type: TYPES.CLEAR_STORE,
  payload: null,
});


const setLanguage = (language) => ({
  type: TYPES.LANGUAGE,
  payload: {language},
});



export const login = (username,date,number) => async (dispatch, _, {  }) => {
  try {
    dispatch(loginRequest());
    const userController = new UserController();
    const { data } = await userController.login({ username, date ,number});
   
    dispatch(loginSuccess(data.user));
  } catch ({ data }) {
    dispatch(loginError(data?.error ?? strings.login.invalidCredentials));
  }
};


export const changelanguage = (language) => async (dispatch, _, { }) => {

    strings.setLanguage(language)
    
    // restart th e app and add rtl 

    dispatch(setLanguage(language));
  
      I18nManager.allowRTL(language==='ar')
      I18nManager.forceRTL(language==='ar')
    
    RNRestart.Restart();


};


export const logout = () => async (dispatch, _, { }) => {
  try {
    const userController = new UserController();
    await userController.logout({});
  } finally {
    dispatch(clearStore());
  }
};
