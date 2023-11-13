import * as S from "./styles";

type CardRootProps = {
  children: React.ReactNode;
};

export const CardRoot = ({ children }: CardRootProps) => {
  return <S.Container>{children}</S.Container>;
};
