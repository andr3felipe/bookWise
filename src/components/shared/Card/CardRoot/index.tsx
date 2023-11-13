import * as S from "./styles";

export type CardRootProps = {
  children: React.ReactNode;
  size: "small" | "large";
};

export const CardRoot = ({ children, size }: CardRootProps) => {
  return <S.Container size={size}>{children}</S.Container>;
};
