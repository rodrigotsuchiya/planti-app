import styled from 'styled-components/native';

export const Container = styled.View`
  margin-bottom: ${props => props.mb ? `${props.mb}px` : '0'};
  align-items: ${props => props.items ? props.items : 'flex-start'};
`;
export const Logo = styled.View`
  flex-direction: row;
  align-items: center;
`;
export const AppName = styled.Text`
  margin-left: 17px;
  font-size: 24px;
`;
