import React from "react";
import {
  FooterStyled,
  FooterContainer,
  FooterTitle,
  AppList,
} from "./Footer.style";
import { Typography, Box } from "@mui/material";

const Footer = () => {
  return (
    <FooterStyled>
      <FooterContainer>
        <Box sx={{ maxWidth: "400px" }}>
          <FooterTitle>Quem Somos</FooterTitle>
          <Typography variant={"body2"} sx={{ mt: 2 }}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam
            numquam iste saepe minus accusantium ullam molestias natus expedita
            quas eveniet vitae deserunt et atque, doloribus, repellat,
            doloremque fugit consequatur enim.
          </Typography>
        </Box>
        <div>
          <FooterTitle>Baixe nossos aplicativos</FooterTitle>
          <AppList>
            <li>
              <a
                href={"https://www.apple.com/br/app-store/"}
                target={"_blank"}
                rel={"noopener noreferrer"}
              >
                <img src={"img/logos/app-store.png"} alt={"App store"} />
              </a>
            </li>
            <li>
              <a
                href={"https://play.google.com/store?hl=pt_BR&gl=US"}
                target={"_blank"}
                rel={"noopener noreferrer"}
              >
                <img src={"img/logos/google-play.png"} alt={"Google play"} />
              </a>
            </li>
          </AppList>
        </div>
      </FooterContainer>
    </FooterStyled>
  );
};

export default Footer;
