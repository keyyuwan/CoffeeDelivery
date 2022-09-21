import { useTheme } from "styled-components";
import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";

import coffeeSvg from "../../../assets/coffee.svg";
import {
  IntroContainer,
  Content,
  Title,
  Subtitle,
  Benefits,
  IconWrapper,
  CoffeeImage,
} from "./styles";

export function Intro() {
  const theme = useTheme();

  return (
    <IntroContainer>
      <Content>
        <Title>
          Encontre o café perfeito <br /> para qualquer hora do dia
        </Title>
        <Subtitle>
          Com o Coffee Delivery você recebe seu café onde estiver, a <br />{" "}
          qualquer hora
        </Subtitle>

        <Benefits>
          <div className="wrapper">
            <IconWrapper backgroundColor={theme.colors.product.secondary_dark}>
              <ShoppingCart weight="fill" size={16} />
            </IconWrapper>
            <span>Compra simples e segura</span>
          </div>
          <div className="wrapper">
            <IconWrapper backgroundColor={theme.colors.base.text}>
              <Package weight="fill" size={16} />
            </IconWrapper>
            <span>Embalagem mantém o café intacto</span>
          </div>
          <div className="wrapper">
            <IconWrapper backgroundColor={theme.colors.product.secondary}>
              <Timer weight="fill" size={16} />
            </IconWrapper>
            <span>Entrega rápida e rastreada</span>
          </div>
          <div className="wrapper">
            <IconWrapper backgroundColor={theme.colors.product.primary}>
              <Coffee weight="fill" size={16} />
            </IconWrapper>
            <span>O café chega fresquinho até você</span>
          </div>
        </Benefits>
      </Content>

      <CoffeeImage src={coffeeSvg} alt="Café do Coffee Delivery" />
    </IntroContainer>
  );
}
