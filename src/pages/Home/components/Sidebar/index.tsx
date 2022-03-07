import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { Container, Button } from "./styles";


function Sidebar() {
  const dispatch = useDispatch()
  const selectedPage = useSelector<MainRootState, string>(state => state.mainState.selectedPage)

  const setPage = (page: string) => dispatch({ type: 'SET_PAGE', payload: { selectedPage: page } })

  const pages = ['weeks', 'warns', 'suggestions', 'answers']
  const titlePages: { [key: string]: string } = {
    'weeks': 'Semanas', 'warns': 'Avisos', 'suggestions': 'Sugestões', 'answers': 'Mural'
  }

  return (
    <Container>
      {pages.map((strPage) => (
        <Button key={strPage} isSelected={strPage === selectedPage} onClick={() => setPage(strPage)} >
          {titlePages[strPage]}
        </Button>
      ))}
    </Container>
  );
}

export default Sidebar;
