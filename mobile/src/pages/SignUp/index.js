import React from 'react';
import { View, StatusBar } from 'react-native';
import { Btn, TextBtn, Input } from '../../components';
import { useNavigation } from '@react-navigation/native';

import Logo from '../../components/Logo';

import { Container } from './styles';

const SignUp = () => {
  const navigation = useNavigation();
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#4CAF50" />
      <Container>
        <Logo items='center' mb={50} />

        <View>
          <Input mb={5} placeholder="Nome" />
          <Input mb={5} placeholder="E-mail" />
          <Input mb={15} placeholder="Senha" />
          <Btn onPress={() => navigation.navigate('Home')} primary mb='15px'>
            <TextBtn primary>Cadastrar</TextBtn>
          </Btn>
        </View>
      </Container>
    </>
  );

}

export default SignUp;