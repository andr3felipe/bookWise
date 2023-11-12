import { NavLink } from "react-router-dom";
import * as S from "./styles";

export type NavItemProps = {
  children: React.ReactNode;
} & React.ComponentProps<typeof NavLink>;

export const NavItem = ({ children, ...rest }: NavItemProps) => {
  return <S.Container {...rest}>{children}</S.Container>;
};
