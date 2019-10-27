import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import { parseISO } from 'date-fns';

import { MdLoyalty } from 'react-icons/md';
import {
  createNewMeetup,
  updateMeetupRequest,
} from '~/store/modules/meetup/actions';

import BannerInput from './BannerInput';
import Datepicker from '~/components/Datepicker';

import { Container } from './styles';

export default function MeetupForm() {
  const editMeetup = useSelector(state => state.meetup.editEvent);
  const isUpdate = useSelector(state => state.meetup.isUpdate);

  const meetupFormatted = editMeetup
    ? {
        ...editMeetup,
        date: parseISO(editMeetup.date),
      }
    : {};

  const dispatch = useDispatch();

  function handleSubmit(data) {
    if (
      isUpdate
        ? dispatch(updateMeetupRequest(data, editMeetup))
        : dispatch(createNewMeetup(data))
    );
  }
  return (
    <Container>
      <Form
        onSubmit={handleSubmit}
        initialData={meetupFormatted}
        autoComplete="off"
      >
        <BannerInput name="banner" />
        <Input type="text" name="title" placeholder="Título do Meetup" />
        <Input
          multiline
          name="description"
          placeholder="Descrição completa"
          rows="5"
        />
        <Datepicker type="text" value="prayer" name="date" />
        <Input type="text" name="location" placeholder="Localização" />
        <button type="submit">
          <MdLoyalty size={20} color="#fff" /> Salvar Meetup
        </button>
      </Form>
    </Container>
  );
}
