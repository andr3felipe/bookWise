import * as S from "./styles";

type CardProfileProps = {
  avatar: string;
  name: string;
  date: string;
};

export const CardProfile = ({ avatar, name, date }: CardProfileProps) => {
  return (
    <S.Container>
      <S.Image src={avatar} />
      <S.Align>
        <S.Name>{name}</S.Name>
        <S.Date>{date}</S.Date>
      </S.Align>
    </S.Container>
  );
};
