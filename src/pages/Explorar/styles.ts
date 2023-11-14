import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: calc(72px - 20px) 96px;

  @media (width <= 800px) {
    padding: 20px;
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

export const CategoriesContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 12px;
  padding-top: 40px;
  padding-bottom: 48px;
`;

export const BooksContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
  max-width: 1000px;

  @media (1400px >= width >= 1100px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (width <= 1100px) {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
`;
