import React from 'react';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';
import { Container, Content, Background } from './styles';

import Input from '../../components/Input';
import Button from '../../components/Button';

const SignIn: React.FC = () => (
  <Container>
    <Content>
      <img src={logoImg} alt="goBarber" />
      <form>
        <h1>Faça seu logon</h1>

        <Input name="email" icon={FiMail} type="text" placeholder="E-mail" />
        <Input
          name="password"
          icon={FiLock}
          type="password"
          placeholder="password"
        />

        <Button type="submit">Entrar</Button>

        <a href="nada">Esqueci minha senha</a>
      </form>

      <a href="nada">
        <FiLogIn />
        Criar conta
      </a>
    </Content>
    <Background />
  </Container>
);
export default SignIn;