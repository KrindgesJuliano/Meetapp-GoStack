import React, { useState, useEffect, useRef } from 'react';
import ReactDatePicker from 'react-datepicker';
import ptBR from 'date-fns/locale/pt-BR';
import PropTypes from 'prop-types';

import { useField } from '@rocketseat/unform';

import 'react-datepicker/dist/react-datepicker.css';

export default function Datepicker({ name }) {
  const ref = useRef(null);
  const { fieldName, registerField, defaultValue, error } = useField(name);
  const [selected, setSelected] = useState(defaultValue);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: ref.current,
      path: 'props.selected',
      clearValue: pickerRef => {
        pickerRef.clear();
      },
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref.current, fieldName]);

  return (
    <>
      <ReactDatePicker
        name={fieldName}
        selected={selected}
        onChange={date => setSelected(date)}
        ref={ref}
        minDate={new Date()}
        locale={ptBR}
        dateFormat="MMMM d, yyyy HH:mm"
        showTimeSelect
        showDisabledMonthNavigation
        placeholderText="Data do Meetup"
      />
      {error && <span>{error}</span>}
    </>
  );
}
