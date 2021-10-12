import React from "react";
import { SafeEnviromentContainer } from "./SafeEnviroment.style";
import { Container } from "@mui/material";

const SafeEnviroment = () => {
  return (
    <SafeEnviromentContainer>
      <Container>
        Ambiente seguro <i className={"twf-lock"} />
      </Container>
    </SafeEnviromentContainer>
  );
};

export default SafeEnviroment;
