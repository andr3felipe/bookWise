import * as S from "./styles.ts";

import { Binoculars } from "@phosphor-icons/react";
import { Location } from "../../components/shared/Location/index.tsx";

export const Explorar = () => {
  return (
    <S.Container>
      <Location icon={Binoculars} size={34} text="Explorar" />
    </S.Container>
  );
};
