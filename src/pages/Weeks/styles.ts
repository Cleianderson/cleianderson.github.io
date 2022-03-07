import styled from "styled-components";

export const Container = styled.div`
  height: calc(100vh - 50px);
  /* position: relative; */
`;

export const Content = styled.div`
  display: grid;
  grid-template-rows: 100px 100px;
  grid-template-columns: 1fr 1fr 1fr;
  height: 100%;
`;

export const Week = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 15px;
  border: 1px solid #ccc;
  border-radius: 10px;
  margin: 10px;
  font-size: 18px;
  color: #1b2d4f;
  background: #eee;
  box-shadow: 0 3px 5px 0 #00000022;
  transition: box-shadow .4s;

  cursor: pointer;
  &:hover{
    box-shadow: 0 5px 10px 0 #00000022;
  }
`;

export const Modal = styled.div<{ visible: boolean }>`
  transition: display 1s;
  display: ${({ visible }) => (visible ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 100vw;
  height: 100vh;
  background: #ccccccaa;
  top: 0;
  max-width: calc(100vw - 200px);
`;

export const BtnInsert = styled.button`
  position: absolute;
  top: 7px;
  right: 10px;
  background: #1b2d4f;
  border: 0px;
  border-radius: 10px;
  color: white;
  font-weight: bold;
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px 15px;
  cursor: pointer;
  transition: color 0.4s;

  &:hover {
    color: #f9b233;
  }
`;
