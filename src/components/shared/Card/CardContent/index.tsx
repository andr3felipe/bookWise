import * as S from "./styles";

type CardContentProps = {
  children: React.ReactNode;
};

export const CardContent = ({ children }: CardContentProps) => {
  return <S.Container>{children}</S.Container>;
};
