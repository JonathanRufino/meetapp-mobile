import { Alert } from 'react-native';
import { all, put, call, takeLatest } from 'redux-saga/effects';

import api from '~/services/api';

import {
  subscribeSuccess,
  subscribeFailure,
  cancelSubscriptionSuccess,
  cancelSubscriptionFailure,
} from './actions';
import MeetupTypes from './types';

export function* subscribe({ payload }) {
  try {
    yield call(api.post, `meetups/${payload.id}/subscriptions`);

    Alert.alert('Sucesso!', 'Inscrição realizada com sucesso');

    yield put(subscribeSuccess());
  } catch (err) {
    Alert.alert('Erro na inscrição', err.response.data.error);

    yield put(subscribeFailure());
  }
}

export function* cancelSubscription({ payload }) {
  const { id, data } = payload;

  try {
    yield call(api.put, `meetups/${id}`, data);

    Alert.alert('Sucesso!', 'Meetup atualizado com sucesso');

    yield put(cancelSubscriptionSuccess());
  } catch (err) {
    Alert.alert('Erro ao atualizar meetup', err.response.data.error);

    yield put(cancelSubscriptionFailure());
  }
}

export default all([
  takeLatest(MeetupTypes.SUBSCRIBE_REQUEST, subscribe),
  takeLatest(MeetupTypes.CANCEL_SUBSCRIPTION_REQUEST, cancelSubscription),
]);
