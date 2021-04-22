import * as React from "react";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import styled from "styled-components";

import { cardAdded } from "../features/cards-slices";
import { Input, Button, Field } from "woly";
import { block } from "../global";

export const AddCard = () => {
  const [title, setTitle] = React.useState("");
  const [content, setContent] = React.useState("");
  const dispatch = useDispatch();

  const onTitleChange = React.useCallback((event) => {
    setTitle(event.target.value);
  }, []);

  const onContentChange = React.useCallback((event) => {
    setContent(event.target.value);
  }, []);

  const onFormSubmit = React.useCallback(
    (event) => {
      event.preventDefault();
      if (title === "" || content === "") {
        return;
      }
      dispatch(
        cardAdded({
          id: nanoid(),
          title,
          content,
        })
      );
      setTitle("");
      setContent("");
    },
    [title, content, dispatch]
  );
  return (
    <Container>
      <Form onSubmit={onFormSubmit}>
        <h2>Add card</h2>
        <Block>
          <Field label="Title">
            <Input
              value={title}
              onChange={onTitleChange}
              name="title"
              type="text"
            />
          </Field>
          <Field label="Content">
            <Input
              value={content}
              onChange={onContentChange}
              name="content"
              type="text"
            />
          </Field>
          <Button type="submit" text="Add New Card" />
        </Block>
      </Form>
    </Container>
  );
};

const Block = styled.div`
  display: flex;
  flex-direction: column;
`;

const Container = styled(block.M)`
  padding: 30px;
`;

export const Form = styled.form`
  max-width: 300px;
`;
