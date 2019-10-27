import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { MdSystemUpdateAlt, MdViewHeadline } from 'react-icons/md';

import history from '~/services/history';

import {
  cancelMeetupRequest,
  openMeetupEdit,
} from '~/store/modules/meetup/actions';

import { Container, Details, EditButton, Cancelbutton } from './styles';

export default function MeetupDetais() {
  const meetup = useSelector(state => state.meetup.event);

  if (!meetup) {
    history.goBack();
  }

  const dispatch = useDispatch();

  function handleCancel() {
    dispatch(cancelMeetupRequest(meetup.id));
  }

  function handleEdit() {
    dispatch(openMeetupEdit(meetup));
    history.push('/edit');
  }

  return (
    <Container>
      <header>
        <h1>{meetup.title}</h1>
        <aside>
          <EditButton type="button" onClick={() => handleEdit(meetup)}>
            <MdViewHeadline />
            Editar
          </EditButton>
          <Cancelbutton type="button" onClick={() => handleCancel()}>
            <MdSystemUpdateAlt />
            Cancelar
          </Cancelbutton>
        </aside>
      </header>

      <Details>
        <img src={meetup.imagem ? meetup.imagem.url : ''} alt="" />
        <p>{meetup.description}</p>
        <footer>
          <time>{meetup.formattedDate}</time>
          <location>{meetup.location}</location>
        </footer>
      </Details>
    </Container>
  );
}
