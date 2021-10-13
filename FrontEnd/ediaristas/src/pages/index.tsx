import type { NextPage } from "next";
import SafeEnviroment from "@components/feedback/safeEnviroment/SafeEnviroment";
import PageTitle from "@components/data-display/pageTitle/PageTitle";
import UserInformation from "@components/data-display/userInformation/UserInformation";
import TextFieldMask from "@components/inputs/textFieldMask/TextFieldMask";
import { Button, Typography, Container, CircularProgress } from "@mui/material";
import {
  FormElementsContainer,
  ProfissionaisPaper,
  ProfissionaisContainer,
} from "@styles/pages/index.style";
import useIndex from "@data/hooks/pages/useIndex.page";
import { typography } from "@mui/system";

const Home: NextPage = () => {
  const {
    cep,
    setCep,
    cepValidated,
    listProfessionals,
    error,
    diaristas,
    request_done,
    loading,
    num_diaristas,
  } = useIndex();

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
          {error && <Typography color={"error"}>{error}</Typography>}

          <Button
            variant={"contained"}
            color={"secondary"}
            sx={{ width: "220px" }}
            disabled={loading || !cepValidated}
            onClick={() => listProfessionals(cep)}
          >
            {loading ? <CircularProgress size={20} /> : "Buscar"}
          </Button>
        </FormElementsContainer>

        {request_done &&
          (diaristas.length > 0 ? (
            <ProfissionaisPaper>
              <ProfissionaisContainer>
                {diaristas.map((diarista, index) => {
                  return (
                    <UserInformation
                      key={index}
                      name={diarista.name}
                      picture={diarista.avatar}
                      rating={diarista.rating}
                      description={diarista.description}
                    />
                  );
                })}
                ;
              </ProfissionaisContainer>
              <Container sx={{ textAlign: "center" }}>
                {num_diaristas > 0 && (
                  <Typography sx={{ mt: 5 }}>
                    ... e mais {num_diaristas}{" "}
                    {num_diaristas > 1 ? "profissionais" : "profissional"}{" "}
                    atendem ao seu enderço!
                  </Typography>
                )}
                <Button
                  variant={"contained"}
                  color={"secondary"}
                  sx={{ mt: 5 }}
                >
                  Contratar um profissional
                </Button>
              </Container>
            </ProfissionaisPaper>
          ) : (
            <Typography align={"center"} color={"textPrimary"}>
              Ainda não existem diaristas cadastradas em sua área!
            </Typography>
          ))}
      </Container>
    </div>
  );
};

export default Home;
