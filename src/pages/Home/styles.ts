import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: calc(72px - 20px) 96px;

  @media (width <= 800px) {
    padding: 20px;
  }
`;

export const Text = styled.p`
  padding-bottom: 16px;
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

export const RecentRatings = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
`;

export const PopularBooks = styled.aside`
  width: 100%;
  height: 100%;
`;
