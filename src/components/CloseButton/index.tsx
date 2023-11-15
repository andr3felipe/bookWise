import * as S from "./styles";
import { X } from "@phosphor-icons/react";

type CloseButtonProps = {
  onClick?: () => void;
};

export const CloseButton = ({ onClick }: CloseButtonProps) => {
  return (
    <S.Container onClick={onClick}>
      <X size={40} />
    </S.Container>
  );
};
