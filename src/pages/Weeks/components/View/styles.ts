import styled from "styled-components";

type Btn = {
  selected: boolean
}

export const Container = styled.div`
  background: #eee;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 0 3px 5px 0 #00000066;
  margin: 50px;
  position: relative;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  padding: 20px;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  max-width: 1100px;
`;

export const Close = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  background: #a00;
  color: white;
  font-weight: bold;
  border: 1px solid #a00;
  border-top-right-radius: 10px;
  border-bottom-left-radius: 10px;
  cursor: pointer;
`;

export const Header = styled.div`
  width: 100%;
  justify-content: left;
  align-items: flex-start;
`

export const Button = styled.button<Btn>`
  background: ${props => props.selected ? '#eee' : '#cccccc'};
  border: 1px solid #666;
  border-bottom: ${props => props.selected ? '0px' : '1px'} solid #666;
  padding: 5px 10px;
  margin-right: 5px;
  border-radius: 10px 10px 0 0;
  position: relative;
  top: ${props => props.selected ? '2px' : '1px'};
`