import * as S from "./styles";

export type CardHeadProps = {
  children: React.ReactNode;
  size: "small" | "medium" | "large";
};

export const CardHead = ({ size, children }: CardHeadProps) => {
  return <S.Container size={size}>{children}</S.Container>;
};
