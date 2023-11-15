import * as S from "./styles";
import { MagnifyingGlass } from "@phosphor-icons/react";

export type InputProps = {
  width?: "small" | "large";
} & React.ComponentProps<"input">;
export const Input = ({ width, ...rest }: InputProps) => {
  return (
    <S.Container width={width}>
      <S.Input {...rest} />
      <MagnifyingGlass size={20} />
    </S.Container>
  );
};
