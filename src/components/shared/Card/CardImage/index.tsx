import * as S from "./styles";

export type CardImageProps = {
  size: "small" | "medium" | "large";
} & React.ComponentProps<"img">;

export const CardImage = ({ size, ...rest }: CardImageProps) => {
  return (
    <S.Container size={size}>
      <img {...rest} />
    </S.Container>
  );
};
