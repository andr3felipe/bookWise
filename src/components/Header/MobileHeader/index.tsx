import { useState } from "react";
import { Icon } from "../../Icon";
import { NavItem } from "../../NavItem";
import * as S from "./styles";
import {
  ChartLineUp,
  Binoculars,
  SignIn,
  CaretLeft,
  List,
} from "@phosphor-icons/react";

export const MobileHeader = () => {
  const [show, setShow] = useState(false);
  return (
    <S.HeaderContainer>
      {!show && (
        <S.MobileOpen onClick={() => setShow(true)}>
          <List size={24} />
        </S.MobileOpen>
      )}
      {show && (
        <S.Header>
          <S.Blur />
          <S.MobileClose onClick={() => setShow(false)}>
            <CaretLeft size={24} />
          </S.MobileClose>
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
            <NavItem to={"/login"}>
              Fazer login
              <SignIn size={24} />
            </NavItem>
          </S.Nav>
        </S.Header>
      )}
    </S.HeaderContainer>
  );
};
