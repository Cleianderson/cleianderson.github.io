import React, { useEffect, useRef, useState } from "react";
import { MdSave, MdDeleteForever } from "react-icons/md";
import { useSelector } from "react-redux";
import { useAlert } from "react-alert";

import {
  Container,
  Content,
  Header,
  Question,
  Author,
  Answer as TAAnswer,
  Relevation,
  SubHeader,
  Label,
  Button,
  ContainerButtons,
} from "./styles";

import api from "../../../../service/api";

const Answer: React.FC<{ item: TAnswers }> = ({ item }) => {
  const [answer, setAnswer] = useState(item.answer);
  const [question, setQuestion] = useState(item.question);
  const [author, setAuthor] = useState(item.author);
  const [relevation, setRelevation] = useState(String(item.relevation));
  const [edited, setEdited] = useState(false);

  const questionTextArea = useRef<HTMLTextAreaElement>(null);
  const firstRun = useRef(true);

  const pass = useSelector<MainRootState, string | undefined>(state => state.mainState.userPassword);
  const alert = useAlert()

  const handleUpdateAnswer = async () => {
    const res = await api.put(
      "/questions",
      {
        pass,
        id: item._id,
        answer,
        question,
        author,
        relevation,
      },
      { validateStatus: () => true }
    );
    if (res.status.toString().startsWith('2')) {
      setEdited(false);
    } else if (res.status.toString().startsWith('4')) {
      alert.error(res.data.error)
    }
  };

  const handleDeleteAnswer = async () => {
    const res = await api.delete("/questions", {
      params: {
        id: item._id,
        pass,
      },
      validateStatus: () => true
    });

    if (res.status.toString().startsWith('2')) {
      setRelevation("<deleted>");
      setAuthor("<deleted>");
      setQuestion("<deleted>");
      setAnswer("<deleted>");
      setEdited(false);
    } else if (res.status.toString().startsWith('4')) {
      alert.error(res.data.error)
    }
  };

  useEffect(() => {
    questionTextArea.current!.style.height = String(
      questionTextArea.current?.scrollHeight + "px"
    );
  }, []);

  useEffect(() => {
    if (firstRun.current) {
      firstRun.current = false;
    } else {
      setEdited(true);
    }
  }, [answer, question, author, relevation]);

  return (
    <Container>
      <Content>
        <Header>
          <Question
            type="text"
            value={question}
            onChange={(event) => setQuestion(event.target.value)}
          />
          <SubHeader>
            <Label>Autor:</Label>
            <Author
              type="text"
              value={author}
              onChange={(event) => setAuthor(event.target.value)}
            />
            <Label>Relevância:</Label>
            <Relevation
              type="number"
              value={relevation}
              onChange={(event) => setRelevation(event.target.value)}
            />
          </SubHeader>
        </Header>
        <TAAnswer
          ref={questionTextArea}
          value={answer}
          onChange={(event) => setAnswer(event.target.value)}
        />
        <ContainerButtons>
          <Button disabled={!edited} onClick={handleUpdateAnswer}>
            <MdSave color="#1b2d4f" size={20} />
            Salvar
          </Button>
          <Button onClick={handleDeleteAnswer} style={{ color: "#a00" }}>
            <MdDeleteForever color="#a00" size={20} />
            Remover
          </Button>
        </ContainerButtons>
      </Content>
    </Container>
  );
};

export default Answer;
