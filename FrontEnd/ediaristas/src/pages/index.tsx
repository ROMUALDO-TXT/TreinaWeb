import type { NextPage } from "next";
import SafeEnviroment from "@components/feedback/safeEnviroment/SafeEnviroment";
import PageTitle from "@components/data-display/pageTitle/PageTitle";
import UserInformation from "@components/data-display/userInformation/UserInformation";
import TextFieldMask from "@components/inputs/textFieldMask/TextFieldMask";
import { Button, Typography, Container } from "@mui/material";
import {
  FormElementsContainer,
  ProfissionaisPaper,
  ProfissionaisContainer,
} from "@styles/pages/index.style";
import useIndex from "@data/hooks/pages/useIndex.page";

const Home: NextPage = () => {
  const { cep, setCep, cepValidated } = useIndex();

  return (
    <div>
      <SafeEnviroment />
      <PageTitle
        title={"Conheça os profissionais"}
        subtitle={
          "Preencha o seu endereço e descubra todos os profissionais na sua área"
        }
      />
      <Container>
        <FormElementsContainer>
          <TextFieldMask
            mask={"99.999-999"}
            label={"Informe seu CEP"}
            fullWidth
            variant={"outlined"}
            value={cep}
            onChange={(event) => setCep(event.target.value)}
          />
          <Typography color={"error"}>{cepValidated}</Typography>

          <Button
            variant={"contained"}
            color={"secondary"}
            sx={{ width: "220px" }}
          >
            Buscar
          </Button>
        </FormElementsContainer>
        <ProfissionaisPaper>
          <ProfissionaisContainer>
            <UserInformation
              name={"Lucas Romualdo"}
              picture={"https://github.com/ROMUALDO-TXT.png"}
              rating={4}
              description={"Minas Gerais"}
            />
            <UserInformation
              name={"Lucas Romualdo"}
              picture={"https://github.com/ROMUALDO-TXT.png"}
              rating={4}
              description={"Minas Gerais"}
            />
            <UserInformation
              name={"Lucas Romualdo"}
              picture={"https://github.com/ROMUALDO-TXT.png"}
              rating={4}
              description={"Minas Gerais"}
            />
            <UserInformation
              name={"Lucas Romualdo"}
              picture={"https://github.com/ROMUALDO-TXT.png"}
              rating={4}
              description={"Minas Gerais"}
            />
            <UserInformation
              name={"Lucas Romualdo"}
              picture={"https://github.com/ROMUALDO-TXT.png"}
              rating={4}
              description={"Minas Gerais"}
            />
            <UserInformation
              name={"Lucas Romualdo"}
              picture={"https://github.com/ROMUALDO-TXT.png"}
              rating={4}
              description={"Minas Gerais"}
            />
          </ProfissionaisContainer>
        </ProfissionaisPaper>
      </Container>
    </div>
  );
};

export default Home;
