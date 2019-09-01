import produce from 'immer';

import types from './types';

const INITIAL_STATE = {
  loading: false,
};

function meetup(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case types.SUBSCRIBE_REQUEST:
      case types.CANCEL_SUBSCRIPTION_REQUEST: {
        draft.loading = true;
        break;
      }
      case types.SUBSCRIBE_SUCCESS:
      case types.SUBSCRIBE_FAILURE:
      case types.CANCEL_SUBSCRIPTION_SUCCESS:
      case types.CANCEL_SUBSCRIPTION_FAILURE: {
        draft.loading = false;
        break;
      }
      default:
    }
  });
}

export default meetup;
