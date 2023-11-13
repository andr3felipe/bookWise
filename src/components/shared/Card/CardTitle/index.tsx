import * as S from "./styles";

type CardTitleProps = {
  bookTitle: string;
  authorName: string;
};

export const CardTitle = ({ bookTitle, authorName }: CardTitleProps) => {
  return (
    <S.Container>
      <S.BookTitle>{bookTitle}</S.BookTitle>
      <S.AuthorName>{authorName}</S.AuthorName>
    </S.Container>
  );
};
