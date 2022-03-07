import React from "react";
import moment from "moment";

import { Container, Image, DateText } from "./styles";

function Header() {
  const date = `${moment().year()}, semana ${moment().isoWeek()}`

  return (
    <Container>
      <Image src={require("../../assets/icon.png")} alt='' />
      <DateText>{date}</DateText>
    </Container>
  );
}

export default Header;
