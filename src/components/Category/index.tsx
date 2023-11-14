import * as S from "./styles";

type CategoryProps = {
  children: React.ReactNode;
};

export const Category = ({ children }: CategoryProps) => {
  return (
    <S.Container>
      <S.Button>{children}</S.Button>
    </S.Container>
  );
};
