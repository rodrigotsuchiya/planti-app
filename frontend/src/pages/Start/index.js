import React from 'react';
import { View, Text, Image, StatusBar } from 'react-native';
import { Container, Btn, TextBtn, Title, Caption } from '../../components';
import { useNavigation } from '@react-navigation/native';

const Start = () => {
  const navigation = useNavigation();
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#F8FAFC" />
      <Container>

        {/* <Header /> */}

        <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
          <Title mb={5}>Hey...</Title>
          <Caption mb='40px'>Quer receber recomendações de plantio com base na sua localização? <Caption bold>
            Cadastre-se agora mesmo, ou entre na sua conta.
        </Caption></Caption>

          <Image
            style={{
              width: 250,
              height: 300,
            }}
            source={{
              uri: 'https://i.imgur.com/VTU67qp.png'
            }} />
        </View>

        <View>
          <Btn onPress={() => navigation.navigate('SignIn')} primary mb='5px'>
            <TextBtn primary>Entrar</TextBtn>
          </Btn>
          <Btn onPress={() => navigation.navigate('SignUp')} mb='15px'>
            <TextBtn>Cadastrar</TextBtn>
          </Btn>
        </View>
      </Container >
    </>
  );
}

export default Start;