import React, { useState } from 'react';
import { View, StatusBar } from 'react-native';
import { Btn, TextBtn, Input } from '../../components';
// import { useNavigation } from '@react-navigation/native';
import useAuth from '../../hooks/useAuth';

import Logo from '../../components/Logo';

import { Container } from './styles';

const SignIn = () => {
  const { signIn, error, signed } = useAuth();

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  async function handleSignIn() {
    return await signIn(email, password);
  }

  // const navigation = useNavigation();
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#4CAF50" />
      <Container>
        <Logo items='center' mb={50} />

        <View>

          <Input autoCapitalize="none" mb={5} placeholder="E-mail" onChangeText={text => setEmail(text)} />
          <Input mb={15} placeholder="Senha" onChangeText={text => setPassword(text)} />
          <Btn onPress={handleSignIn} primary mb='15px'>
            <TextBtn primary>Entrar</TextBtn>
          </Btn>
        </View>
      </Container>
    </>
  );

}

export default SignIn;