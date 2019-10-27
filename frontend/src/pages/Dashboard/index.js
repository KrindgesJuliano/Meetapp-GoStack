import React, { useState, useEffect, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';

import { MdLoyalty, MdHighlightOff } from 'react-icons/md';
import { openMeetupDetails } from '~/store/modules/meetup/actions';

import { Container, Event } from './styles';

import api from '~/services/api';
import history from '~/services/history';

export default function Dashboard() {
  const [event, setEvent] = useState([]);
  const [date, setDate] = useState(new Date());
  const dispatch = useDispatch();

  const dateFormatted = useMemo(
    () => format(date, 'MM/dd/yyyy', { locale: pt }),
    [date]
  );

  useEffect(() => {
    async function loadEvents() {
      const response = await api.get('organizing', { params: { date } });
      const data = response.data.map(meetup => ({
        ...meetup,
        formattedDate: format(parseISO(meetup.date), "MMMM d', às' hh'h'mm", {
          locale: pt,
        }),
      }));
      setEvent(data);
    }

    loadEvents();
  }, [date]);

  function handleOpenDetails(meetup) {
    dispatch(openMeetupDetails(meetup));
    history.push('/details');
  }

  return (
    <Container>
      <header>
        <h1>Meus meetups</h1>
        <Link to="/edit">
          <button type="button">
            <MdLoyalty size={20} color="#fff" />
            Novo meetup
          </button>
        </Link>
      </header>

      <ul>
        {event.map(meetup => (
          <Event key={meetup.id} onClick={() => handleOpenDetails(meetup)}>
            <strong>{meetup.title}</strong>
            <aside>
              <span>{meetup.formattedDate}</span>
              <button type="button">
                <MdHighlightOff size={24} color="#fff" />
              </button>
            </aside>
          </Event>
        ))}
      </ul>
    </Container>
  );
}
