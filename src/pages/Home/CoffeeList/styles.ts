import styled from "styled-components";

export const CoffeeListContainer = styled.section``;

export const Title = styled.strong`
  font: 800 2rem "Baloo 2", sans-serif;
  color: ${({ theme }) => theme.colors.base.subtitle};
`;

export const Coffees = styled.div`
  margin-top: 54px;
  padding-bottom: 157px;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  row-gap: 40px;
  column-gap: 32px;
`;

export const CoffeeCard = styled.div`
  width: 256px;
  height: 310px;
  border-radius: 6px 36px;
  text-align: center;
  padding: 0 24px 20px;

  background-color: ${({ theme }) => theme.colors.base.card};

  img {
    margin-top: -20px;
  }
`;

export const CoffeeCardContent = styled.div``;

export const CoffeeTypes = styled.div`
  margin-top: 12px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  flex-wrap: wrap;

  span {
    text-transform: uppercase;
    padding: 4px 8px;
    border-radius: 100px;

    background-color: ${({ theme }) => theme.colors.product.secondary_light};
    color: ${({ theme }) => theme.colors.product.secondary_dark};

    font-weight: 700;
    font-size: 0.625rem;
  }
`;

export const CoffeeTitle = styled.strong`
  display: inline-block;

  margin-top: 1rem;
  font: 700 1.25rem "Baloo 2", sans-serif;
  color: ${({ theme }) => theme.colors.base.subtitle};
`;

export const CoffeeDescription = styled.p`
  margin-top: 0.5rem;
  line-height: 18.2px;
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.base.label};
`;

export const CoffeeCardFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 33px;

  .actions {
    display: flex;
    align-items: center;
    gap: 8px;
  }
`;

export const CoffeePrice = styled.span`
  color: ${({ theme }) => theme.colors.base.text};

  font-size: 0.875rem;

  span {
    font: 800 1.5rem "Baloo 2", sans-serif;
  }
`;

export const CoffeeCounter = styled.div`
  background: ${({ theme }) => theme.colors.base.button};

  display: flex;
  align-items: center;
  gap: 8px;

  padding: 8px;
  border-radius: 6px;

  button {
    border: 0;
    background: 0;
  }

  span {
    color: ${({ theme }) => theme.colors.base.title};
  }
`;

export const CartButton = styled.button`
  font-size: 0;
  border: 0;
  border-radius: 6px;
  padding: 8px;

  background: ${({ theme }) => theme.colors.product.primary_dark};

  svg {
    color: ${({ theme }) => theme.colors.base.white};
  }
`;
