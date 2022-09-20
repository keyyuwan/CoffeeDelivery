import styled from "styled-components";

export const HeaderContainer = styled.header`
  height: 104px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const Location = styled.div`
  background: ${({ theme }) => theme.colors.product.primary_light};
  color: ${({ theme }) => theme.colors.product.primary_dark};

  display: flex;
  align-items: center;
  gap: 4px;

  border-radius: 6px;
  padding: 8px;
  font-size: 0.875rem;

  svg {
    color: ${({ theme }) => theme.colors.product.primary};
  }
`;

export const CartButton = styled.button`
  font-size: 0; // alinha ao meio
  border: 0;
  border-radius: 6px;
  padding: 8px;

  background: ${({ theme }) => theme.colors.product.secondary_light};

  svg {
    color: ${({ theme }) => theme.colors.product.secondary_dark};
  }
`;
