import styled from "styled-components";
import StackGrid from "react-stack-grid";

export const Container = styled.div`
  height: 100vh;
`;
export const Content = styled(StackGrid)`
  max-width: calc(100% - 1px);
  height: calc(100vh - 50px);
`;
export const WarnContainer = styled.div`
  margin: 10px;
  display: flex;
  width: 100%;
  max-width: 500px;
  flex-direction: column;
  border: 1px solid #ccc;
  border-radius: 10px;
`;
export const WarnTitle = styled.span`
  background: #1b2d4f;
  padding: 7px 15px;
  color: white;
  font-weight: bold;
  text-align: center;
  border: 0px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;
export const WarnContent = styled.span`
  padding: 7px 15px;
  text-align: justify;
  border: 0px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

export const WarnButton = styled.button`
  position: absolute;
  top: 5px;
  right: 20px;
  font-size: 30px;
  border: 0px;
  background: #1b2d4f;
  color: white;
  border-radius: 50px;
  height: 40px;
  width: 40px;
  box-shadow: 0px 1px 5px 0px #000000aa;
  cursor: pointer;
  transition: color 0.5s;
  &:hover {
    color: #f9b233;
  }
`;

export const Modal = styled.div<{visible:boolean}>`
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

export const EmptyContainer = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`

export const EmptyText = styled.span`
  align-self: center;
`