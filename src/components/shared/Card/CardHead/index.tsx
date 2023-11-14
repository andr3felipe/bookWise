import * as S from "./styles";

export type CardHeadProps = {
  children: React.ReactNode;
  size: "small" | "medium" | "large" | "xl";
  gap?: number;
};

export const CardHead = ({ size, gap, children }: CardHeadProps) => {
  return (
    <S.Container size={size} gap={gap}>
      {children}
    </S.Container>
  );
};
