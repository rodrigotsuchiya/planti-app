import React from 'react';
import { FontAwesome5 } from '@expo/vector-icons';

import { Container, Logo, AppName } from './styles';

const Header = ({ items, mb }) => {
  return (
    <Container items={items} mb={mb}>
      <Logo>
        <FontAwesome5 name="leaf" size={28} color="#4CAF50" />
        <AppName>Plant</AppName>
      </Logo>
    </Container>
  );
}

export default Header;