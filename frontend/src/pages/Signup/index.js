import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import Logo from '~/assets/logo.svg';

import { signUpRequest } from '~/store/modules/auth/actions';

const schema = Yup.object().shape({
  name: Yup.string().required('O nome é obrigatório'),
  email: Yup.string()
    .email('Insira um email valido')
    .required('O e-mail é obrigatorio'),
  password: Yup.string()
    .min(6, 'A senha precisa de ao menos 6 caracteres')
    .required('A senha é obrigatoria'),
});

export default function Signup() {
  const dispatch = useDispatch();

  function handleSubmit({ name, email, password }) {
    dispatch(signUpRequest(name, email, password));
  }
  return (
    <>
      <img src={Logo} alt="Meetapp" size={41} />

      <Form onSubmit={handleSubmit} schema={schema}>
        <Input placeholder="Nome Completo" name="name" />
        <Input type="email" name="email" id="" placeholder="Seu e-mail" />
        <Input type="password" name="password" placeholder="Sua senha" />

        <button type="submit">Criar conta</button>
        <Link to="/">Já tenho login </Link>
      </Form>
    </>
  );
}
