import React from "react";
import { MdArrowBack } from "react-icons/md";

import { Container, Button } from "./styles";

function SubHeader() {
  return (
    <Container>
        <Button>
          <MdArrowBack size="30px" color="#1b2d4f" />
          voltar
        </Button>
    </Container>
  );
}

export default SubHeader;
