import { Container, Message } from "./styles";

import React from "react";

type Props = {
  message: string;
};

export const ListEmpty = ({ message }: Props) => {
  return (
    <Container>
      <Message>{message}</Message>
    </Container>
  );
};
