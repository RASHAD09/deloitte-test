import { TYPES } from '../actions/UserActions';

export const userReducer = (state = {
  language :'en'
}, { payload, type }) => {
  switch (type) {
    case TYPES.LOGIN_SUCCESS:
      return { ...state, ...payload.user ,...payload.date,...payload.number};
    case TYPES.CLEAR_STORE:
      return {};
      case TYPES.LANGUAGE:
        return {...state, language:payload.language};
    default:
      return state;
  }
};
