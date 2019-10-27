import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '~/services/api';
import history from '~/services/history';

import { updateMeetupFailure, updateMeetupSuccess } from './actions';

export function* updateMeetup({ payload }) {
  try {
    const { title, description, banner, ...rest } = payload.data;
    const { id } = payload.editMeetup;

    const meetup = { title, description, banner, ...rest };

    console.tron.log(meetup);

    yield call(api.put, `meetups/${id}`, meetup);

    yield put(updateMeetupSuccess());

    toast.success('Meetup atualizado com sucesso!');
  } catch (err) {
    toast.error('Falha ao atualiza o Meetup, verifique os dados');
    yield put(updateMeetupFailure());
  }
}

export function* createMeetup({ payload }) {
  try {
    const { title, description, date, location, banner } = payload.data;

    const meetup = {
      title,
      description,
      date,
      location,
      banner,
    };

    yield call(api.post, 'meetups', meetup);

    history.push('/');

    toast.success('Novo Meetup criado com sucesso');
  } catch (err) {
    toast.error('Falha ao criar o Meetup, verifique os dados');
    yield put(updateMeetupFailure());
  }
}

export function* cancelMeetup({ payload }) {
  try {
    const meetupId = payload.id;
    yield call(api.delete, `meetups/${meetupId}`);

    history.push('/');
    toast.info('Meetup cancelado');
  } catch (err) {
    console.tron.log({ err });
    yield put(updateMeetupFailure());
  }
}

export default all([
  takeLatest('@meetup/CREATE_NEW_MEETUP', createMeetup),
  takeLatest('@meetup/UPDATE_MEETUP_REQUEST', updateMeetup),
  takeLatest('@meetup/CANCEL_MEETUP_REQUEST', cancelMeetup),
]);
