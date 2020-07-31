import React, { useState } from 'react';
import { View, StatusBar } from 'react-native';
import { Btn, TextBtn, Input } from '../../components';
import { useNavigation } from '@react-navigation/native';
import api from '../../services/api';
import Logo from '../../components/Logo';

import { Container } from './styles';

const SignUp = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  function handleSignUp() {
    api.post('/user', {
      name,
      email,
      password
    }).then(res => navigation.navigate('SignIn'));
  }
  const navigation = useNavigation();
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#4CAF50" />
      <Container>
        <Logo items='center' mb={50} />

        <View>
          <Input onChangeText={text => setName(text)} mb={5} placeholder="Nome" />
          <Input autoCapitalize="none" onChangeText={text => setEmail(text)} mb={5} placeholder="E-mail" />
          <Input onChangeText={text => setPassword(text)} mb={15} placeholder="Senha" />
          <Btn onPress={handleSignUp} primary mb='15px'>
            <TextBtn primary>Cadastrar</TextBtn>
          </Btn>
        </View>
      </Container>
    </>
  );

}

export default SignUp;