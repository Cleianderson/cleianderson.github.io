import React, { useState } from "react";

import {
  Container,
  Content,
  Close,
  Header,
  Button
} from "./styles";

import Table from '../../../../components/Table'

const View: React.FC<{ week: TWeek; onClose: () => void }> = ({
  onClose,
  week,
}) => {
  const [isLaunch, setIsLaunch] = useState(true)

  return (
    <Container>
      <Content>
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
          week={week.data} label={isLaunch ? "Almoço" : 'Jantar'}
        />
      </Content>
      <Close onClick={onClose}>X fechar</Close>
    </Container>
  );
};

export default View;
