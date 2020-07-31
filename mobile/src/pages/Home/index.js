import React, { useState, useEffect } from 'react';
import { View, StatusBar, Text } from 'react-native';
import { Container, Btn, TextBtn, Title, Caption } from '../../components';
import Card from '../../components/Card';

import weather from '../../services/weather';
import plants from '../../services/plants';

const Home = () => {
  const [data, setData] = useState();
  const [forecastConditions, setForecastConditions] = useState([]);

  useEffect(() => {
    weather.get('').then(res => {
      setData(res.data);

      const forecast = res.data.results.forecast;
      const conditions = forecast.map(day => day.condition);

      setForecastConditions(conditions);

      return
    }).catch(err => console.log(err));
  }, []);
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#F8FAFC" />
      <Container>

        <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
          <Title mb={5}>Bem vindo</Title>
          <Caption bold>Vai plantar hoje?</Caption>
          <Caption mb='40px'> Confira abaixo uma lista de recomendações para quer o seu plantio seja um sucesso.</Caption>

          <View style={{
            flexDirection: 'row',
            flexWrap: "wrap",
            justifyContent: 'space-between',
          }}>
            {
              plants.map(plant => (
                <Card caption={plant.name} image_uri={plant.image} />
              ))
            }
          </View>

        </View>

        <View>
          <Btn style={{ backgroundColor: 'red' }} onPress={() => { }} mb='5px'>
            <TextBtn primary>Alerta Temporal</TextBtn>
          </Btn>
        </View>
      </Container >
    </>
  );
}

export default Home;