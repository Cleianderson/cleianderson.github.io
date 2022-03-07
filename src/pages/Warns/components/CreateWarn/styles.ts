import styled from "styled-components";

export const Container = styled.div`
  box-shadow: 5px 5px 10px 0px #444;
  border-radius: 10px;
  z-index: 10;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  background: #eee;
  width: 500px;
  border-radius: 10px;
  padding: 10px 15px;
`;

export const Label = styled.label`
  color: #1b2d4f;
  font-weight: bold;
  margin-top: 10px;
`;
export const Input = styled.input`
  border: 1px solid #ccc;
  border-radius: 10px;
  background: #fff;
  padding: 5px 15px;
  font-size: 16px;
`;

export const TextArea = styled.textarea`
  border: 1px solid #ccc;
  border-radius: 10px;
  background: #fff;
  padding: 5px 15px;
  font-size: 16px;
  height: 150px;
`;
export const Close = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  border: 0px;
  background: #a00;
  color: white;
  cursor: pointer;
  font-weight: bold;
  font-size: 16px;
  border-top-right-radius: 10px;
  border-bottom-left-radius: 10px;
`;

export const Submit = styled.button`
  max-width: 100px;
  color: white;
  border: 1px solid #ccc;
  border-radius: 10px;
  background: #1b2d4f;
  font-size: 16px;
  font-weight: bold;
  padding: 5px 15px;
  align-self: center;
  margin: 5px;
  margin-top: 10px;
  transition: all .5s;
  cursor: pointer;
`

export const ErrorText = styled.span`
  font-weight: bold;
  color: #a00;
  align-self: center;
  font-size: 16px;
`