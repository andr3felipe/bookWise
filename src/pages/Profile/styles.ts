import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: calc(72px - 20px) 96px;
  display: flex;
  gap: 64px;

  @media (width <= 800px) {
    padding: 20px;
  }

  @media (width >= 800px) {
    margin-left: 232px;
  }
`;

export const LocationContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: column;
  max-width: 970px;
  gap: 40px;
`;

export const SeeMoreContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 20px;
`;

export const SeeMore = styled.button`
  display: none;
  background-color: transparent;
  color: ${(props) => props.theme["purple-100"]};
  border: 1px solid ${(props) => props.theme["purple-100"]};
  cursor: pointer;
  transition: all 0.2s ease-out;

  &:hover {
    background-color: ${(props) => props.theme["purple-200"]};
    color: ${(props) => props.theme["gray-100"]};
  }

  border-radius: 999px;
  padding: 4px 16px;

  @media (width <= 1200px) {
    display: block;
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

export const ProfileDesktop = styled.aside`
  max-width: 308px;
  width: 100%;
  max-height: 555px;
  height: 100%;
  margin-top: 74px;

  border-left: 1px solid ${(props) => props.theme["gray-700"]};

  @media (width <= 1200px) {
    display: none;
  }
`;

export const ProfileMobile = styled.div`
  position: absolute;
  border-radius: 20px;
  overflow: hidden;
  width: 100vw;
  height: 100vh;

  background-color: ${(props) => props.theme["gray-800"]};

  @media (width > 1200px) {
    display: none;
  }
`;

export const Blur = styled.div`
  position: absolute;
  background-color: rgb(0, 0, 0, 1);
  width: 100vw;
  height: 100vh;
  top: 0;
  left: -20px;
`;
