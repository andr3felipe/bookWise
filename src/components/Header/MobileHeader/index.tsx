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
  User,
} from "@phosphor-icons/react";

export const MobileHeader = () => {
  const [show, setShow] = useState(false);

  const toggle = (option: boolean): void => {
    setShow(option);
  };

  return (
    <S.HeaderContainer data-testid="mobile-header">
      {!show && (
        <S.MobileOpen onClick={() => toggle(true)}>
          <List size={24} />
        </S.MobileOpen>
      )}
      {show && (
        <>
          <S.Header>
            <S.MobileClose onClick={() => toggle(false)}>
              <CaretLeft size={24} />
            </S.MobileClose>
            <Icon icon="bookWise" />
            <S.Nav>
              <S.NavAlignItems>
                <NavItem
                  onClick={() => {
                    toggle(false);
                    window.scrollTo(0, 0);
                  }}
                  to={"/inicio"}
                >
                  <ChartLineUp size={24} />
                  Início
                </NavItem>
                <NavItem
                  onClick={() => {
                    toggle(false);
                    window.scrollTo(0, 0);
                  }}
                  to={"/explorar"}
                >
                  <Binoculars size={24} />
                  Explorar
                </NavItem>
                <NavItem
                  onClick={() => {
                    toggle(false);
                    window.scrollTo(0, 0);
                  }}
                  to={"/perfil"}
                >
                  <User size={24} />
                  Perfil
                </NavItem>
              </S.NavAlignItems>
              <NavItem
                onClick={() => {
                  toggle(false);
                }}
                to={"/"}
              >
                Fazer login
                <SignIn size={24} />
              </NavItem>
            </S.Nav>
          </S.Header>
          <S.Blur onClick={() => toggle(false)} />
        </>
      )}
    </S.HeaderContainer>
  );
};
