import * as S from "./styles";
import { DesktopHeader } from "./DesktopHeader";
import { MobileHeader } from "./MobileHeader";

export const Header = () => {
  return (
    <S.Container>
      <DesktopHeader />
      <MobileHeader />
    </S.Container>
  );
};
