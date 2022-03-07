import React, { useState, useEffect } from "react";
import { MdAdd } from "react-icons/md";

import { Container, Content, Week, Modal, BtnInsert } from "./styles";

import api from "../../service/api";
import Insert from "./components/Insert";
import View from "./components/View";

const Weeks: React.FC = () => {
  const [weeks, setWeeks] = useState<TWeek[]>();
  const [viewWeek, setViewWeek] = useState<TWeek>();
  const [inserting, setInserting] = useState(false);

  useEffect(() => {
    const loadWeeks = async () => {
      const { data } = await api.get<TWeek[]>("/weeks");
      setWeeks(data);
    };
    loadWeeks();
  }, [inserting]);

  return (
    <Container>
      <Content>
        {weeks?.map((w) => (
          <Week key={w.number_week} onClick={() => setViewWeek(w)}>{w.year}, semana {w.number_week}</Week>
        ))}
      </Content>
      <BtnInsert onClick={() => setInserting(true)}>
        <MdAdd color="#fff" size={25} />
        inserir
      </BtnInsert>
      <Modal visible={Boolean(inserting || viewWeek)}>
        {inserting && <Insert onClose={() => setInserting(false)} />}
        {viewWeek && (
          <View week={viewWeek} onClose={() => setViewWeek(undefined)} />
        )}
      </Modal>
    </Container>
  );
};

export default Weeks;
