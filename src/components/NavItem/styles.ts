import styled from "styled-components";
import { NavItemProps } from ".";
import { NavLink } from "react-router-dom";

export const Container = styled(NavLink)<NavItemProps>`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: flex-start;
  border: none;
  background-color: transparent;
  cursor: pointer;
  gap: 12px;
  color: ${(props) => props.theme["gray-400"]};
  text-decoration: none;
  font-size: 1.6rem;
  box-shadow: none !important;

  &.active {
    color: ${(props) => props.theme["gray-100"]};
  }

  &.active::before {
    content: "";
    position: absolute;
    top: 10px;
    left: -28px;
    width: 24px;
    height: 4px;
    background: ${(props) => props.theme.gradient};
    border-radius: 999;
    transform: rotate(90deg);
    border-radius: 5px;
    background: ${(props) => props.theme["gradient-vertical"]};
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }

  &:hover {
    color: ${(props) => props.theme["gray-100"]};
  }
`;
