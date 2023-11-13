import * as S from "./styles";

type CardStarsProps = {
  stars: number;
};

export const CardStars = ({ stars }: CardStarsProps) => {
  const renderStars = (number: number): JSX.Element[] => {
    const array = [];

    for (let i = 0; i < 5; i++) {
      if (number >= 1) {
        array.push(<S.Star key={i} size={16} weight="fill" />);
        number--;
      } else if (number >= 0.5 && number < 1) {
        array.push(<S.StarHalf key={i} size={16} weight="fill" />);
        number--;
      } else {
        array.push(<S.Star key={i} size={16} />);
      }
    }

    return array;
  };

  return <S.Container>{renderStars(stars).map((item) => item)}</S.Container>;
};
