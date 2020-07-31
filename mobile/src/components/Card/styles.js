import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

export const Container = styled.View`
  width: ${(Dimensions.get('screen').width - 60) / 3}px;
  margin-bottom: 15px;
`;

export const ImageWrapper = styled.View`
  border: 1px solid #ddd;
  padding: 10px;
  align-items: center;
  border-radius: 2px;
  margin-bottom: 2px;
`;
