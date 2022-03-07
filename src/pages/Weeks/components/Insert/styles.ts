import styled from "styled-components";

type Btn = {
  selected: boolean
}

export const Container = styled.div`
  margin: 50px;
  background: #eee;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 0 3px 5px 0 #00000066;
  /* width: 90vw;
  height: 90vh; */
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  padding: 20px;
  align-items: center;
  justify-content: center;
  max-width: 1100px;
`;

export const ButtonFile = styled.input`
  background: #eee;
  color: #1b2d4f;
  border: 1px solid #ccc;
  padding: 5px 10px;
  border-radius: 10px;
  margin-right: 10px;
  cursor: pointer;
  transition: all 0.4s;

  &:hover {
    box-shadow: 0 2px 5px 0 #00000044;
  }
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  background: #eee;
  color: #1b2d4f;
  border: 1px solid #ccc;
  padding: 5px 10px;
  border-radius: 10px;
  margin-right: 10px;
  cursor: pointer;
  transition: all 0.4s;
`

export const ContainerButtons = styled.form`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px 15px;
  background: linear-gradient(#eee, #ddd);
  border: 0px solid #ccc;
  border-bottom-width: 1px;
  border-radius: 10px;
  box-shadow: 0 3px 5px 0 #00000066;
`;

export const Close = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  background: #a00;
  border: 0px;
  border-bottom-left-radius: 10px;
  border-top-right-radius: 10px;
  color: white;
  font-weight: bold;
  cursor: pointer;
`;

export const Input = styled.input`
  background: #eee;
  border: 1px solid #ccc;
  border-radius: 10px;
  margin-right: 10px;
  padding: 10px 0px 10px 10px;
`

export const ErrorText = styled.span`
  color: #a00;
  font-weight: bold;
  text-align: center;
  align-self: center;
`
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