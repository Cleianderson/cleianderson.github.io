import styled from "styled-components";

export const Container = styled.div`
  border: 1px solid #ccc;
  border-radius: 10px;
  margin: 5px;
  padding: 10px 15px;
  box-shadow: 0px 3px 5px 0px #00000066;
`;

export const Label = styled.label`
  margin-right: 5px;
`;

export const Content = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SubHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Question = styled.input`
  padding: 5px 15px;
  border: 1px solid #ccc;
  border-radius: 10px;
  background: #ffffff66;
  font-size: 15px;
  margin: 5px;
`;

export const Answer = styled.textarea`
  background: #ffffff66;
  padding: 5px 5px;
  margin: 5px;
  font-size: 15px;
  border: 1px solid #ccc;
  border-radius: 10px;
  line-height: 1.7;
  max-height: calc(100vh - 400px)
`;

export const Author = styled(Question)``;

export const Button = styled.button`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    font-size: 15px;
    font-weight: bold;
    color: #1b2d4f;
    background: #eee;
    border: 1px solid #ccc;
    border-radius: 10px;
    align-self: center;
    padding: 5px 10px;
    margin: 5px;
    cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
    opacity: ${props => props.disabled ? '.3' : '1'};
`;

export const Relevation = styled(Question)`
  max-width: 50px;
  text-align: center;
  padding-right: 0px;
`;

export const ContainerButtons = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`
