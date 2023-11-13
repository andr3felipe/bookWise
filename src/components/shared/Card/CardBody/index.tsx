import * as S from "./styles";

type CardBodyProps = {
  children: React.ReactNode;
};

export const CardBody = ({ children }: CardBodyProps) => {
  return <S.Container>{children}</S.Container>;
};
