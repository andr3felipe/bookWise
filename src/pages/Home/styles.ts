import styled from "styled-components";

type TextProps = {
  spacing?: string;
};

export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: calc(72px - 20px) 96px;

  @media (width <= 800px) {
    padding: 20px;
  }

  @media (width >= 800px) {
    margin-left: 232px;
  }
`;

export const Text = styled.p<TextProps>`
  padding-bottom: ${({ spacing }) => (spacing ? spacing : "4px")};
`;

export const Main = styled.main`
  display: grid;
  grid-template-columns: 60% 40%;
  width: 100%;
  gap: 64px;

  margin-top: 40px;

  @media (width <= 1200px) {
    display: flex;
    flex-direction: column;
  }
`;

export const MainAlign = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;

  gap: 40px;
`;

export const LastReadings = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;

  gap: 12px;
`;

export const RecentRatings = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;

  gap: 12px;
`;

export const PopularBooks = styled.aside`
  width: 100%;
  height: 100%;
`;

export const PopularBooksAlign = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 12px;
  flex-direction: column;
`;
