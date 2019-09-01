import types from './types';

export function subscribeRequest(id) {
  return {
    type: types.SUBSCRIBE_REQUEST,
    payload: { id },
  };
}

export function subscribeSuccess() {
  return {
    type: types.SUBSCRIBE_SUCCESS,
  };
}

export function subscribeFailure() {
  return {
    type: types.SUBSCRIBE_FAILURE,
  };
}

export function cancelSubscriptionRequest(id) {
  return {
    type: types.CANCEL_SUBSCRIPTION_REQUEST,
    payload: { id },
  };
}

export function cancelSubscriptionSuccess() {
  return {
    type: types.CANCEL_SUBSCRIPTION_SUCCESS,
  };
}

export function cancelSubscriptionFailure() {
  return {
    type: types.CANCEL_SUBSCRIPTION_FAILURE,
  };
}
