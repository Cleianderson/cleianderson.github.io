import React, { useState, useEffect } from "react";

import api from "../../service/api";

import {
  Container,
  Content,
  WarnContainer,
  WarnTitle,
  WarnContent,
  WarnButton,
  Modal,
  EmptyText,
  EmptyContainer,
} from "./styles";
import CreateWarn from "./components/CreateWarn";

function Warns() {
  const [modalVisible, setModalVisible] = useState(false);
  const [warns, setWarns] = useState<Warning[]>([]);

  useEffect(() => {
    const loadWarns = async () => {
      const { data } = await api.get("/warn");
      setWarns(data);
    };
    loadWarns();
  }, [modalVisible]);

  return (
    <Container>
      {warns.length > 0 ? (
        <Content columnWidth='50%' duration={0}>
          {warns.map((item, index) => (
            <WarnContainer key={String(item._id + index)} >
              <WarnTitle>{item.title}</WarnTitle>
              <WarnContent>{item.content}</WarnContent>
            </WarnContainer>
          ))}
        </Content>
      ) : (
        <EmptyContainer>
          <EmptyText>Não há avisos</EmptyText>
        </EmptyContainer>
      )}
      <Modal visible={modalVisible}>
        <CreateWarn close={() => setModalVisible(false)} />
      </Modal>
      <WarnButton onClick={() => setModalVisible(true)}>+</WarnButton>
    </Container>
  );
}

export default Warns;
