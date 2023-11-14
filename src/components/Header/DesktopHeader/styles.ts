import styled from "styled-components";

export const HeaderContainer = styled.div`
  max-width: 232px;
  width: 100%;
  max-height: 988px;
  height: calc(100vh - 40px);

  @media (width <= 800px) {
    display: none;
  }
`;

export const Header = styled.header`
  border-radius: 12px;
  height: 100%;
  width: 100%;
  padding: 40px 52px;
  background-color: ${(props) => props.theme["gray-700"]};
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  height: 100%;
  padding-top: 64px;
  padding-bottom: 24px;
`;

export const NavAlignItems = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding-left: calc(68px - 52px);
  gap: 24px;
  flex-direction: column;
  width: 100%;
`;
