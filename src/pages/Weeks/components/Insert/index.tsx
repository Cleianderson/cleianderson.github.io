import React, { useState, useRef, FormEvent } from "react";
import { useSelector } from "react-redux";

import {
  Container,
  Content,
  Close,
  Header,
  Button,
  ButtonFile,
  ContainerButtons,
  Input,
  ErrorText,
  Label,
} from "./styles";

import Table from "../../../../components/Table";
import api from "../../../../service/api";
import { useAlert } from "react-alert";

const Insert: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [data, setData] = useState<WeekDay[]>([]);
  const [numWeek, setNumWeek] = useState<string>();
  const [error, setError] = useState<string>();
  const [isLaunch, setIsLaunch] = useState(true)

  const userPassword = useSelector<MainRootState>(state => state.mainState.userPassword);
  const alert = useAlert()
  const launchInput = useRef<HTMLInputElement>(null);
  const dinnerInput = useRef<HTMLInputElement>(null);

  const handleMount = async (e: FormEvent) => {
    e.preventDefault();
    if (!(launchInput.current?.files && dinnerInput.current?.files))
      return setError("Carregue todos os arquivos");

    const formData = new FormData();
    formData.append("files", dinnerInput.current!.files[0]);
    formData.append("files", launchInput.current!.files[0]);

    const res = await api.post("/parse", formData, {
      headers: {
        "content-type": "multipart/form-data",
      },
      validateStatus: () => true,
    });
    setData(res.data);
  };

  const handleSubmit = async () => {
    if (data.length === 0) return setError("Os arquivos não foram carregados");
    if (!numWeek) return setError("Selecione uma semana");

    const res = await api.post(
      `/schedule?number_week=${numWeek}`,
      {
        pass: userPassword,
        week: data,
      },
      { validateStatus: () => true }
    );

    if (res.status === 200) {
      alert.success(`Semana ${numWeek} criada com sucesso!`)
      setNumWeek("");
      setData([]);
      setError("");
    } else {
      alert.error(res.data.error);
    }
  };

  return (
    <Container>
      <ContainerButtons onSubmit={handleMount}>
        {data.length === 0 ?
          <>
            <Label>
              Almoço
              <ButtonFile type="file" ref={launchInput} accept=".xls, .xlsx" />
            </Label>
            <Label>
              Jantar
              <ButtonFile ref={dinnerInput} type="file" accept=".xls, .xlsx" />
            </Label>
            <ButtonFile type="submit" value="Carregar arquivos" />
            <ErrorText>{error}</ErrorText>
          </> :
          <>
            <ButtonFile type="button" onClick={handleSubmit} value="Enviar" />
            <Input
              type="number"
              placeholder="Núm. da Semana (ISO)"
              value={numWeek}
              onChange={(e) => setNumWeek(e.target.value)}
            />
          </>
        }
      </ContainerButtons>
      {data.length > 0 && <Content>
        <Header>
          <Button selected={isLaunch} onClick={() => setIsLaunch(true)}>
            Almoço
          </Button>
          <Button selected={!isLaunch} onClick={() => setIsLaunch(false)}>
            Jantar
          </Button>
        </Header>
        <Table
          type={isLaunch ? "almoco" : 'jantar'}
          week={data} label={isLaunch ? "Almoço" : 'Jantar'}
        />
      </Content>}
      <Close onClick={onClose}>X fechar</Close>
    </Container>
  );
};

export default Insert;
