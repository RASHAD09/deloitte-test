import { STATUS } from '../constants';

const {  LOADING, NOT_STARTED,  } = STATUS;

export const statusReducer = (state = {}, { type }) => {

 

  const matchesStart = /(.*)_(REQUEST)/.exec(type);


  let status = NOT_STARTED;
  let key = null;

  if (matchesStart) {
    const [, requestName] = matchesStart;
    key = requestName;
    status = LOADING;
  }

  if (key) {
    return { ...state, [key]: status };
  }

  return state;
};
