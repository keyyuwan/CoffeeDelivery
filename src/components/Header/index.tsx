import { MapPin, ShoppingCart } from "phosphor-react";

import logoSvg from "../../assets/logo.svg";

import { HeaderContainer, Wrapper, Location, CartButton } from "./styles";

export function Header() {
  return (
    <HeaderContainer>
      <img src={logoSvg} alt="Coffee Delivery Logo" />

      <Wrapper>
        <Location>
          <MapPin weight="fill" size={22} />
          Curitiba, PR
        </Location>

        <CartButton>
          <ShoppingCart weight="fill" size={22} />
        </CartButton>
      </Wrapper>
    </HeaderContainer>
  );
}
