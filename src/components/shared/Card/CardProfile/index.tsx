import * as S from "./styles";

type CardProfileProps = {
  avatar?: string;
  name?: string;
  date?: string;
};

export const CardProfile = ({ avatar, name, date }: CardProfileProps) => {
  return (
    <S.Container>
      {avatar && <S.Image src={avatar} />}
      <S.Align>
        {name && <S.Name>{name}</S.Name>}
        {date && <S.Date>{date}</S.Date>}
      </S.Align>
    </S.Container>
  );
};
