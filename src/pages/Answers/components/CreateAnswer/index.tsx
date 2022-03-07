import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import {
  Container,
  Label,
  Input,
  TextArea,
  Close,
  Content,
  Submit,
  ErrorText,
  SubContainer,
} from "./styles";

import api from "../../../../service/api";

function CreateWarn({ close }: { close: () => void }) {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [theme, setTheme] = useState("");
  const [author, setAuthor] = useState("Unknown");
  const [relevation, setRelevation] = useState("0");
  const [error, setError] = useState("");

  const pass = useSelector<MainRootState, string | undefined>(state => state.mainState.userPassword);

  const handleSubmit = async () => {
    if (question.trim().length === 0) return setError("Insira uma pergunta");
    if (answer.trim().length === 0) return setError("Insira uma resposta");
    if (theme.trim().length === 0) return setError("Insira um tema");

    const res = await api.post(
      "/questions",
      { pass, question, answer, theme, author, relevation },
      { validateStatus: () => true }
    );
    if (res.status === 200) {
      setQuestion("");
      setAnswer("");
      setAuthor("Unknown");
      setRelevation("0")
      setTheme("")
    }
  };

  useEffect(() => {
    if (error.trim().length === 0) return;
    setError("");
  }, [question, answer, author, error]);

  return (
    <Container>
      <Content>
        <ErrorText>{error}</ErrorText>
        <Label>Pergunta</Label>
        <Input
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />
        <Label>Autor</Label>
        <Input
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <SubContainer>
          <div style={{display:'flex', flexDirection: 'column', flex: 1, marginRight: 10}} >
            <Label>Tema</Label>
            <Input
              type="text"
              value={theme}
              onChange={(e) => setTheme(e.target.value)}
            />
          </div>
          <div style={{display:'flex', flexDirection: 'column'}} >
            <Label>Relevância</Label>
            <Input
              type="number"
              value={relevation}
              style={{width: 50}}
              onChange={(e) => setRelevation(e.target.value)}
            />
          </div>
        </SubContainer>
        <Label>Resposta</Label>
        <TextArea value={answer} onChange={(e) => setAnswer(e.target.value)} />
        <Submit onClick={handleSubmit}>Enviar</Submit>
        <Close onClick={close}>X fechar</Close>
      </Content>
    </Container>
  );
}

export default CreateWarn;
