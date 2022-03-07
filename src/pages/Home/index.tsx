import React, { useEffect, useCallback } from "react";
import { useSelector } from "react-redux";

// import { Container } from './styles';

import Sidebar from "./components/Sidebar";
import Header from "../../components/Header";
import Warns from "../../pages/Warns";
import Suggestions from "../../pages/Suggestions";
import Answers from "../../pages/Answers";
import Weeks from "../../pages/Weeks";

import api from "../../service/api";
import {
  WeekContainer,
  Container,
  Content,
} from "./styles";

function Home() {
  const selectedPage = useSelector<MainRootState, string>(state => state.mainState.selectedPage)

  const pages: { [key: string]: JSX.Element } = {
    'weeks': <Weeks />,
    'suggestions': <Suggestions />,
    'warns': <Warns />,
    'answers': <Answers />,
  }

  useEffect(() => {
    const loadWeek = async () => {
      await api.get<TWeek>("/thisweek");
    };
    loadWeek();
  }, []);

  const renderWeek = useCallback(() => {
    // if (week?.length) {
    //   return week?.map((item, index) => <Week item={item} index={index} />);
    // } else {
    return pages[selectedPage];
    // }
  }, [selectedPage, pages]);

  return (
    <Container>
      <Header />
      <Content>
        <Sidebar />
        <WeekContainer>{renderWeek()}</WeekContainer>
      </Content>
    </Container>
  );
}

export default Home;
