import React, { useEffect, useState } from "react";

import { Container, Content, ContainerInputs, Label } from "./styles";
import Suggestion from "./components/Suggestion";

import api from "../../service/api";
import { useSelector } from "react-redux";
import { useAlert } from "react-alert";

function Suggestions() {
  const [suggestions, setSuggestions] = useState<SuggestionSchema[]>();
  const [onlyMarkeds, setOnlyMarkeds] = useState(false);
  const [typesShow, setTypesShow] = useState<{
    ru: boolean;
    app: boolean;
    others: boolean;
  }>({ ru: false, app: false, others: true });

  const pass = useSelector<MainRootState, string | undefined>(state => state.mainState.userPassword)
  const alert = useAlert()

  const handleClickType = (
    event: React.MouseEvent<HTMLLabelElement, MouseEvent>
  ) => {
    switch (event.currentTarget.id) {
      case "app":
        return setTypesShow({ ru: false, others: false, app: !typesShow.app });
      case "ru":
        return setTypesShow({ others: false, app: false, ru: !typesShow.ru });
      case "others":
        return setTypesShow({
          app: false,
          ru: false,
          others: !typesShow.others,
        });
    }
  };

  const handleRemove = async (id: string) => {
    const res = await api.delete("/suggestions", {
      params: { pass, id },
      validateStatus: () => true,
    });
    if (res.status.toString().startsWith('2')) {
      const _suggestions = suggestions?.filter((item) => item._id !== id);
      setSuggestions(_suggestions);
    } else if (res.status.toString().startsWith('4')) {
      alert.error(res.data.error);
    }
  };

  const handleMark = async (id: string) => {
    const res = await api.post(
      "/toggleSuggestion",
      { pass, id },
      {
        validateStatus: () => true,
      }
    );
    if (res.status.toString().startsWith('2')) {
      const _suggestions = suggestions?.map((item) => {
        if (item._id === id) {
          item.viewed = !item.viewed;
        }
        return item;
      });
      setSuggestions(_suggestions);
    } else if (res.status.toString().startsWith('4')) {
      alert.error(res.data.error);
    }
  };

  useEffect(() => {
    const loadSuggestions = async () => {
      const { data } = await api.get("/suggestions");
      setSuggestions(sortSuggestions(data));
    };
    loadSuggestions();

  }, []);

  const sortSuggestions = (data: SuggestionSchema[] | undefined) => {
    const _sugg = data?.sort((a, b) => {
      if (a.viewed !== b.viewed) {
        return a.viewed ? -1 : 1
      } else {
        const num1 = new Date(a.createdAt).valueOf()
        const num2 = new Date(b.createdAt).valueOf()

        if (isNaN(num1)) {
          return isNaN(num2) ? 0 : 1
        }
        if (isNaN(num2)) {
          return isNaN(num1) ? 0 : -1
        }

        return Math.sign(num2 - num1) * 1
      }
    })

    return _sugg
  }

  const handleOnlyShowMarked = (event: any) => {
    const val = event.target.checked ? true : false
    setOnlyMarkeds(val)
  }

  return (
    <Container>
      <ContainerInputs>
        <Label id="others" show={typesShow?.others} onClick={handleClickType}>
          Outros
        </Label>
        <Label id="ru" show={typesShow?.ru} onClick={handleClickType}>
          RU
        </Label>
        <Label id="app" show={typesShow?.app} onClick={handleClickType}>
          App
        </Label>
      </ContainerInputs>
      <div style={{ margin: 10, marginBottom: 20 }} >
        <input id="onlyShowMarked" name="onlyShowMarked" type="checkbox" checked={onlyMarkeds} onChange={handleOnlyShowMarked} />
        <label htmlFor="onlyShowMarked">Mostrar apenas sugestções salvas</label>
      </div>
      <Content columnWidth='30%' duration={0}>
        {sortSuggestions(suggestions)?.map(
          (suggestion, index) =>
            Object.getOwnPropertyDescriptor(typesShow, suggestion.type)
              ?.value && suggestion.viewed === onlyMarkeds && (
              <Suggestion
                key={String(index + suggestion._id)}
                item={suggestion}
                remove={handleRemove}
                mark={handleMark}
              />
            )
        )}
      </Content>
    </Container>
  );
}

export default Suggestions;
