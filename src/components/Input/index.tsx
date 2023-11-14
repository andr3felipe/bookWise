import * as S from "./styles";
import { MagnifyingGlass } from "@phosphor-icons/react";

type InputProps = React.ComponentProps<"input">;
export const Input = ({ ...rest }: InputProps) => {
  return (
    <S.Container>
      <S.Input {...rest} />
      <MagnifyingGlass size={20} />
    </S.Container>
  );
};
