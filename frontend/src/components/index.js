import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
export const Container = styled.View`
  margin: 20px;
  flex: 1;
  justify-content: space-between;
`;

export const Btn = styled(RectButton)`
  background: ${props => props.primary ? '#4CAF50' : 'transparent'};
  padding: 16px;
  border-radius: 4px;
  margin-bottom: ${props => props.mb ? props.mb : 0};
`;
export const TextBtn = styled.Text`
  font-size: 16px;
  text-align: center;
  color: ${props => props.primary ? '#fff' : '#4CAF50'};
`;
export const Title = styled.Text`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: ${props => props.mb ? `${props.mb}px` : 0};
  margin-left: ${props => props.ml ? `${props.ml}px` : 0};
`;
export const Caption = styled.Text`
  font-size: 16px;
  color: #001100;
  margin-bottom: ${props => props.mb ? props.mb : 0};
  text-align: ${props => props.textAlign ? props.textAlign : 'center'};
  font-weight: ${props => props.bold ? 700 : 400};
`;

export const Input = styled.TextInput`
  border: 2px solid #ddd;
  border-radius: 4px;
  padding: 15px 20px;
  margin-bottom: ${props => props.mb ? `${props.mb}px` : 0};
`;