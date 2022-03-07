import styled from "styled-components";

export const Container = styled.div`
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid #666;
  border-radius: 0 10px 10px 10px;
`

export const Table = styled.table`
  border-collapse: collapse;
  margin: 5px;
  width: 100%;
`;
export const Thead = styled.thead``;
export const Tbody = styled.tbody``;
export const Tr = styled.tr`
  border-top: 1px;
  font-size: 12px;
  text-align: center;
  min-height: 40px;
  * {
    padding: 5px;
  }
  &:nth-child(even) {
    background: #1b2d4f22;
  }
`;
export const Td = styled.td``;
export const Th = styled.th`
  min-width: 100px;
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

export const Title = styled.span`
  text-align: center;
  color: #1b2d4f;
  font-weight: bold;
  margin-top: 20px;
  font-size: 18px;
  border: 0px solid #1b2d4f;
  border-bottom-width: 1px;
`;
