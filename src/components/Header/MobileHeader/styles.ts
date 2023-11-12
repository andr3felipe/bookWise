import styled from "styled-components";

export const Blur = styled.div`
  position: absolute;
  background-color: transparent;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
`;

export const MobileOpen = styled.button`
  background-color: transparent;
  cursor: pointer;
  align-self: flex-start;
  box-shadow: none;
  border: none;

  &:hover {
    color: ${(props) => props.theme["gray-100"]};
    scale: 1.1;
    transition: all 0.2s ease-in-out;
  }

  > svg {
    color: ${(props) => props.theme["gray-400"]};
  }
`;

export const MobileClose = styled.button`
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  cursor: pointer;

  box-shadow: none;
  border: none;
  padding-bottom: 10px;

  &:hover {
    color: ${(props) => props.theme["gray-100"]};
    scale: 1.1;
    transition: all 0.2s ease-in-out;
  }

  > svg {
    color: ${(props) => props.theme["gray-400"]};
  }
`;

export const HeaderContainer = styled.div`
  position: absolute;
  display: none;

  @media (width <= 800px) {
    display: block;
  }
`;

export const Header = styled.header`
  border-radius: 12px;
  height: 300px;

  padding: 20px 26px;
  background-color: ${(props) => props.theme["gray-700"]};
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: calc(100% - 52px);
  flex-direction: column;
  padding-top: 20px;
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
