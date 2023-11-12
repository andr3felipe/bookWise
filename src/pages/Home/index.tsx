import { Location } from "../../components/shared/Location";
import * as S from "./styles";
import { ChartLineUp } from "@phosphor-icons/react";

export const Home = () => {
  return (
    <S.Container>
      <Location icon={ChartLineUp} size={34} text="Início" />
    </S.Container>
  );
};
