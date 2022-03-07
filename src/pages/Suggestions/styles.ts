import styled from "styled-components";
import StackGrid from 'react-stack-grid'

export const Container = styled.div`
  height: 100vh;
  padding: 10px;
`;

export const Content = styled(StackGrid)`
  /* display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 15px;
  padding: 0px 10px;
  padding-top: 10px;
  margin-bottom: 10px;
  height: calc(100vh - 70px);
  overflow: auto; */
`

export const Label = styled.label<{show: boolean}>`
  margin-right: 10px;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 5px 10px;
  text-align: center;
  width: 50px;
  transition: background 1s;
  background: ${({show}) => show ? '#add8e6' : ''};
`

export const ContainerInputs = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  position: absolute;
  top: 0;
  right: 0;
  height: 50px;
  margin-right: 10px;
`
