import styled from "styled-components";

interface IconWrapperProps {
  backgroundColor: string;
}

export const HomeContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Content = styled.div``;

export const Title = styled.strong`
  font: 800 3rem "Baloo 2", sans-serif;
  line-height: 62.4px;
`;

export const Subtitle = styled.p`
  margin-top: 1rem;
  font-size: 1.25rem;
  line-height: 26px;
`;

export const Benefits = styled.div`
  margin-top: 66px;

  display: grid;
  grid-template: 1fr 1fr / 1fr 1fr;

  .wrapper {
    display: flex;
    align-items: center;
    gap: 12px;
  }
`;

export const IconWrapper = styled.div<IconWrapperProps>`
  background-color: ${({ backgroundColor }) => backgroundColor};

  width: 32px;
  height: 32px;
  border-radius: 50%;
  padding: 8px;

  svg {
    color: ${({ theme }) => theme.colors.base.white};
  }
`;

export const CoffeeImage = styled.img``;
