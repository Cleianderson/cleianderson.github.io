import styled from "styled-components";

interface Btn {
  readonly isSelected: boolean
}

export const Container = styled.div`
  grid-area: s;
  min-width: 200px;
  width: 200px;
  background: #1b2d4f;
  height: calc(100vh - 50px);
`;

export const Button = styled.button<Btn>`
  width: 100%;
  margin-top: 10px;
  padding: 10px 15px;
  font-size: 15px;
  border: 1px solid ${props => props.isSelected ? '#ffffff' : '#1b2d4f'};
  background: ${props => props.isSelected ? '#eeeeee' : '#1b2d4f'};
  color: ${props => props.isSelected ? '#1b2d4f' : '#eeeeee'};
  font-weight: bold;
  transition: border .5s;
  border-radius: ${props => props.isSelected ? '100px 0px 0px 100px' : '0px'};
  
  &:hover {
    /* background: ${props => props.isSelected ? '#f9b233' : '#eeeeee'}; */
    color: ${props => props.isSelected ? '#1b2d4f' : '#f9b233'};
    border-top-width: 1px;
    border-bottom-width: 1px;
    border-top-color: #f9b233;
    border-bottom-color: #f9b233;
    cursor: pointer;
  }
`;
