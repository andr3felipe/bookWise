import * as S from "./styles";

type CardImageProps = React.ComponentProps<"img">;

export const CardImage = ({ ...rest }: CardImageProps) => {
  return (
    <S.Container>
      <img {...rest} />
    </S.Container>
  );
};
