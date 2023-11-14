import styled from "styled-components";

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

export const LocationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  max-width: 970px;

  @media (width <= 1200px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
    justify-content: center;
  }
`;

export const Main = styled.main`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  gap: 24px;

  padding-top: 32px;
`;
