import { Alert } from 'react-native';
import { all, put, call, takeLatest } from 'redux-saga/effects';

import api from '~/services/api';
import {
  createMeetupSuccess,
  createMeetupFailure,
  updateMeetupSuccess,
  updateMeetupFailure,
} from '~/store/modules/meetup/actions';

export function* createMeetup({ payload }) {
  try {
    yield call(api.post, 'meetups', payload.data);

    Alert.alert('Sucesso!', 'Meetup criado com sucesso');

    yield put(createMeetupSuccess());
  } catch (err) {
    Alert.alert('Erro ao criar meetup', 'Confira os dados informados');

    yield put(createMeetupFailure());
  }
}

export function* updateMeetup({ payload }) {
  const { id, data } = payload;

  try {
    yield call(api.put, `meetups/${id}`, data);

    Alert.alert('Sucesso!', 'Meetup atualizado com sucesso');

    yield put(updateMeetupSuccess());
  } catch (err) {
    Alert.alert('Erro ao atualizar meetup', 'Confira os dados informados');

    yield put(updateMeetupFailure());
  }
}

export default all([
  takeLatest('@meetup/CREATE_MEETUP_REQUEST', createMeetup),
  takeLatest('@meetup/UPDATE_MEETUP_REQUEST', updateMeetup),
]);
