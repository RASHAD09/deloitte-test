import { STATUS } from '../constants';

const { LOADING, NOT_STARTED,  } = STATUS;


export const isLoadingSelector = (actions, state) => {
  return actions.reduce((prevState, value) => {
    const status = state.status[value] || NOT_STARTED;
    return prevState || status === LOADING;
  }, false);
};



