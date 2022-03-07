import React from "react";

import { Table as CTable, Thead, Tr, Th, Tbody, Td, Container } from "./styles";

type props = { week: WeekDay[]; type: string; label?: string };

const KEYS_VALUES: { [key: string]: string } = {
  p1: "Prato Prin. 1",
  p2: "Prato Prin. 2",
  gua: "Guarnição",
  fag: "Fast Grill",
  gre: "Na Grelha",
  veg: "Vegetariano",
  sob: "Sobremesa",
  sal: "Sal. Crua",
  sco: "Sal. Cozida",
  sopa: "Sopa",
  suc: "Suco",
};

const Table: React.FC<props> = ({ week, type, label }) => {
  return (
    <Container>
      <CTable>
        <Thead>
          <Tr>
            <Th>Item</Th>
            <Th>Segunda</Th>
            <Th>Terça</Th>
            <Th>Quarta</Th>
            <Th>Quinta</Th>
            <Th>Sexta</Th>
          </Tr>
        </Thead>
        <Tbody>
          {Object.keys(KEYS_VALUES).map((val, index) => (
            <Tr key={index}>
              <Td>{KEYS_VALUES[val]}</Td>
              {week.map((dayWeek, _index) => (
                <Td key={String(index) + _index}>{dayWeek[type][val]}</Td>
              ))}
            </Tr>
          ))}
        </Tbody>
      </CTable>
    </Container>
  );
};

export default Table;
