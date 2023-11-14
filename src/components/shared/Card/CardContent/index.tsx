import * as S from "./styles";

export type CardContentProps = {
  children: React.ReactNode;
  justifyContent?: "flex-start" | "space-between";
};

export const CardContent = ({
  children,
  justifyContent = "flex-start",
}: CardContentProps) => {
  return <S.Container justifyContent={justifyContent}>{children}</S.Container>;
};
