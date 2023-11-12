import * as S from "./styles";

export type ButtonProps = {
  children: React.ReactNode;
  backgroundColor: "gray-600" | "gray-700";
};

export const Button = ({ children, backgroundColor }: ButtonProps) => {
  return (
    <S.Container backgroundColor={backgroundColor}>{children}</S.Container>
  );
};
