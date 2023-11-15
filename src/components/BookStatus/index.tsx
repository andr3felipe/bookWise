import * as S from "./styles";
import { BookOpen, Books, UserList } from "@phosphor-icons/react";

export const BookStatus = () => {
  return (
    <S.Container>
      <S.DataContainer>
        <BookOpen size={32} />
        <div>
          <S.Data>3853</S.Data>
          <S.Description>Páginas lidas</S.Description>
        </div>
      </S.DataContainer>
      <S.DataContainer>
        <Books size={32} />
        <div>
          <S.Data>10</S.Data>
          <S.Description>Livros avaliados</S.Description>
        </div>
      </S.DataContainer>
      <S.DataContainer>
        <UserList size={32} />
        <div>
          <S.Data>8</S.Data>
          <S.Description>Autores lidos</S.Description>
        </div>
      </S.DataContainer>
      <S.DataContainer>
        <BookOpen size={32} />
        <div>
          <S.Data>Computação</S.Data>
          <S.Description>Categoria mais lida</S.Description>
        </div>
      </S.DataContainer>
    </S.Container>
  );
};
