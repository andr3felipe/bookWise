import * as S from "./styles";

type LocationProps = {
  icon: React.ElementType;
  size: number;
  text: string;
};
export const Location = ({ icon: Icon, size, text }: LocationProps) => {
  return (
    <S.Container>
      <Icon size={size} />
      <h3>{text}</h3>
    </S.Container>
  );
};
