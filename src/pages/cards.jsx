import * as React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

export const Cards = () => {
  const cards = useSelector((state) => state.cards);
  if (!cards || cards.lenght === 0) return null;
  return (
    <Container>
      <h2>Your cards</h2>
      <CardBlock>
        {cards.map(({ title, id, content }) => (
          <Card key={id}>
            <h4>{title}</h4>
            <span>{content}</span>
          </Card>
        ))}
      </CardBlock>
    </Container>
  );
};

export const Container = styled.div`
  padding: 30px;
`;

export const Card = styled.div`
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  margin: 10px;
  max-width: 300px;
`;

export const CardBlock = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
`;
