import React, { useState, useEffect, useCallback } from "react";
import { MdAdd } from "react-icons/md";

import api from "../../service/api";

import {
  Container,
  Content,
  AnswerButton,
  Modal,
  EmptyText,
  EmptyContainer,
  AnswerContainer,
} from "./styles";
import CreateAnswer from "./components/CreateAnswer";
import Answer from "./components/Answer";

function Answers() {
  const [modalVisible, setModalVisible] = useState(false);
  const [answers, setAnswers] = useState<TAnswers[]>([]);

  useEffect(() => {
    const loadAnswers = async () => {
      const { data } = await api.get<TAnswers[]>("/questions");
      setAnswers(data);
    };
    loadAnswers();
  }, []);

  const renderContent = useCallback(() => {
    if (answers.length) {
      return answers.map((item, index) => (
        <AnswerContainer key={String(item._id + index)}>
          <Answer item={item} />
        </AnswerContainer>
      ));
    } else {
      return (
        <EmptyContainer>
          <EmptyText>respostas não encontradas</EmptyText>
        </EmptyContainer>
      );
    }
  }, [answers]);

  return (
    <Container>
      <Content columnWidth='50%' duration={0}>{renderContent()}</Content>
      <AnswerButton onClick={() => setModalVisible(true)}>
        <MdAdd size={25} color="#fff" />
        criar resposta
      </AnswerButton>
      <Modal visible={modalVisible}>
        <CreateAnswer close={() => setModalVisible(false)} />
      </Modal>
    </Container>
  );
}

export default Answers;
