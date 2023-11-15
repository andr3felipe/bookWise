import * as S from "./styles";
import avatar from "../../../assets/avatar-profile.png";
import { BookStatus } from "../../BookStatus";
import { CloseButton } from "../../CloseButton";
import { useEffect } from "react";

type ProfileProps = {
  onClick?: () => void;
};

export const MobileProfile = ({ onClick }: ProfileProps) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "scroll";
    };
  }, []);
  return (
    <>
      <CloseButton onClick={onClick} />
      <S.Container>
        <S.ProfileHead>
          <S.Figure>
            <S.Image src={avatar} />
          </S.Figure>
          <S.Name>Cristofer Rosser</S.Name>
          <S.MemberSince>Membro desde 2022</S.MemberSince>
        </S.ProfileHead>
        <S.Divisor />
        <S.BooksStatusContainer>
          <BookStatus />
        </S.BooksStatusContainer>
      </S.Container>
    </>
  );
};
