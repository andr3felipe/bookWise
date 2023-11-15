import * as S from "./styles";
import avatar from "../../../assets/avatar-profile.png";
import { BookStatus } from "../../BookStatus";

export const DesktopProfile = () => {
  return (
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
  );
};
