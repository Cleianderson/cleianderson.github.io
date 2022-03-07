import styled from 'styled-components';

export const Container = styled.div`
  display:flex;
  flex:1;
  flex-direction: row;
  justify-content: left;
  align-items: center;
  background: linear-gradient(white,#eee);
  width: 100vw;
  height: 50px;
  box-shadow: 0px 1px 5px 0px;
`;

export const Image = styled.img`
  width: 40px;
  height: 40px;
`

export const DateText = styled.span`
  color: #666;
  margin-left: 20px;
`