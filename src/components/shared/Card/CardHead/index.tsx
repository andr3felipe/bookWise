import * as S from "./styles";

type CardHeadProps = {
  children: React.ReactNode;
};

export const CardHead = ({ children }: CardHeadProps) => {
  return <S.Container>{children}</S.Container>;
};
