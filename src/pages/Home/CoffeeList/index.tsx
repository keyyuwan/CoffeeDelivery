import { useEffect, useState } from "react";
import { Minus, Plus, ShoppingCart } from "phosphor-react";
import { useTheme } from "styled-components";

import { api } from "../../../lib/api";

import {
  CoffeeListContainer,
  Title,
  Coffees,
  CoffeeCard,
  CoffeeCardContent,
  CoffeeTypes,
  CoffeeTitle,
  CoffeeDescription,
  CoffeeCardFooter,
  CoffeePrice,
  CoffeeCounter,
  CartButton,
} from "./styles";

interface ICoffee {
  id: string;
  img: string;
  name: string;
  types: string[];
  description: string;
  price: number;
}

export function CoffeeList() {
  const theme = useTheme();

  const [coffees, setCoffees] = useState<ICoffee[]>([]);

  function getBrazilianRealPrice(priceInCentavos: number) {
    const price = priceInCentavos / 100;

    return price.toLocaleString("pt-br", {
      minimumFractionDigits: 2,
    });
  }

  useEffect(() => {
    async function getCoffees() {
      try {
        const { data } = await api.get("/coffees");

        setCoffees(data);
      } catch (err) {
        console.log(err);
      }
    }

    getCoffees();
  }, []);

  return (
    <CoffeeListContainer>
      <Title>Nossos cafés</Title>

      <Coffees>
        {coffees.map((coffee) => (
          <CoffeeCard key={coffee.id}>
            <img src={coffee.img} alt={coffee.name} />

            <CoffeeCardContent>
              <CoffeeTypes>
                {coffee.types.map((type) => (
                  <span key={type}>{type}</span>
                ))}
              </CoffeeTypes>

              <div>
                <CoffeeTitle>{coffee.name}</CoffeeTitle>
                <CoffeeDescription>{coffee.description}</CoffeeDescription>
              </div>
            </CoffeeCardContent>

            <CoffeeCardFooter>
              <CoffeePrice>
                R$ <span>{getBrazilianRealPrice(coffee.price)}</span>
              </CoffeePrice>

              <div className="actions">
                <CoffeeCounter>
                  <button>
                    <Minus
                      weight="bold"
                      size={14}
                      color={theme.colors.product.primary}
                    />
                  </button>
                  <span>1</span>
                  <button>
                    <Plus
                      weight="bold"
                      size={14}
                      color={theme.colors.product.primary}
                    />
                  </button>
                </CoffeeCounter>
                <CartButton>
                  <ShoppingCart weight="fill" size={22} />
                </CartButton>
              </div>
            </CoffeeCardFooter>
          </CoffeeCard>
        ))}
      </Coffees>
    </CoffeeListContainer>
  );
}
