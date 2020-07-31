import React from 'react';
import { View, Image } from 'react-native';
import { Caption } from '../index';

import { Container, ImageWrapper } from './styles';

const Card = ({ caption, image_uri }) => {
  return (
    <Container>
      <ImageWrapper>
        <Image
          style={{
            width: 70,
            height: 70
          }}
          source={{
            uri: image_uri
          }} />

      </ImageWrapper>
      <Caption>{caption}</Caption>
    </Container>);
}

export default Card;