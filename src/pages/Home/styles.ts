import styled, { css } from "styled-components";

type TextProps = {
  padding?: string;
};

export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: calc(72px - 20px) 96px;

  @media (width <= 800px) {
    padding: 20px;
  }
`;

export const Text = styled.p<TextProps>`
  ${({ padding }) =>
    padding &&
    css`
      padding: ${padding};
    `}
`;

export const Main = styled.main`
  display: grid;
  grid-template-columns: 75% 25%;
  width: 100%;
  gap: 64px;

  margin-top: 40px;

  @media (width <= 950px) {
    display: flex;
    flex-direction: column;
  }
`;

export const RecentRatings = styled.div`
  height: 100%;
  width: 100%;
`;

export const PopularBooks = styled.aside`
  width: 100%;
  height: 100%;
`;
