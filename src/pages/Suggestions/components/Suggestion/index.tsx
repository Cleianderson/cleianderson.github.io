import React from "react";
import moment from "moment";
import { MdDeleteForever, MdBookmark, MdBookmarkBorder } from "react-icons/md";

import {
  Container,
  Content,
  TSuggestion,
  Info,
  Author,
  Header,
  Title,
  TDate,
  Button,
} from "./styles";

const Suggestion: React.FC<{
  item: SuggestionSchema;
  remove: (id: string) => void;
  mark: (id: string) => void;
}> = ({ item, remove, mark }) => {
  return (
    <Container viewed={item.viewed}>
      <Content>
        <Header>
          <Title>
            <Author>{item.author}</Author>
            <Info>
              <TDate>
                {item.createdAt
                  ? moment(item.createdAt).format("DD/MM/yy")
                  : "sem data"}
              </TDate>
            </Info>
          </Title>
          <Button onClick={() => mark(item._id)}>
            {item.viewed ? (
              <MdBookmark size={20} color="#f9b233" />
            ) : (
              <MdBookmarkBorder size={20} color="#f9b233" />
            )}
          </Button>
          <Button onClick={() => remove(item._id)}>
            <MdDeleteForever size={20} color="#f55" />
          </Button>
        </Header>
        <TSuggestion>{item.suggestion}</TSuggestion>
      </Content>
    </Container>
  );
};

export default Suggestion;
