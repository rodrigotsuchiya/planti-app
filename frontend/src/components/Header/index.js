import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import Logo from '../Logo';
import { Feather } from '@expo/vector-icons';
import { Caption, Title } from '../../components';
import weather from '../../services/weather';

import { Container, Weather, Info, Temp } from './styles';

const Header = () => {
  const [data, setData] = useState();
  const [iconName, setIconName] = useState();

  useEffect(() => {
    weather.get('').then(res => {
      setData(res.data);

      switch (res.data.results.condition_slug) {
        case 'storm':
          setIconName('cloud');
          break;
        case 'snow':
          setIconName('cloud');
          break;
        case 'hail':
          setIconName('cloud');
          break;
        case 'rain':
          setIconName('cloud');
          break;
        case 'fog':
          setIconName('cloud');
          break;
        case 'clear_day':
          setIconName('cloud');
          break;
        case 'clear_night':
          setIconName('cloud');
          break;
        case 'cloud':
          setIconName('cloud');
          break;
        case 'cloudly_day':
          setIconName('cloud');
          break;
        case 'cloudly_night':
          setIconName('cloud');
          break;
        case 'sun':
          setIconName('cloud');
          break;
        case 'moon':
          setIconName('cloud');
          break;
        default:
          setIconName('cloud');
      }


    }).catch(err => console.log(err));
  }, []);
  return (
    <Container>
      <Logo />
      <Weather>
        <Info>
          <Temp>
            <Feather name={iconName} size={28} color="gray" />
            <Title ml={10}>{data ? data.results.temp : null}°</Title>
          </Temp>

          <Caption>{data ? data.results.city : null}</Caption>
        </Info>
      </Weather>
    </Container>
  );
}

export default Header;