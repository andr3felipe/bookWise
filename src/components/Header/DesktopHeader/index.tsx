import { Icon } from "../../Icon";
import { NavItem } from "../../NavItem";
import * as S from "./styles";
import { ChartLineUp, Binoculars, SignIn } from "@phosphor-icons/react";

export const DesktopHeader = () => {
  return (
    <S.HeaderContainer>
      <S.Header>
        <Icon icon="bookWise" />
        <S.Nav>
          <S.NavAlignItems>
            <NavItem to={"/inicio"}>
              <ChartLineUp size={24} />
              Início
            </NavItem>
            <NavItem to={"/explorar"}>
              <Binoculars size={24} />
              Explorar
            </NavItem>
          </S.NavAlignItems>
          <NavItem to={"/"}>
            Fazer login
            <SignIn size={24} />
          </NavItem>
        </S.Nav>
      </S.Header>
    </S.HeaderContainer>
  );
};
