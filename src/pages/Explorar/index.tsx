import * as S from "./styles.ts";

import { Binoculars } from "@phosphor-icons/react";
import { Location } from "../../components/shared/Location/index.tsx";
import { Input } from "../../components/Input/index.tsx";
import { Category } from "../../components/Category/index.tsx";
import { Card } from "../../components/shared/Card/index.tsx";
import { books } from "../../books/books.ts";

export const Explorar = () => {
  const categories = [
    "Tudo",
    "Horror",
    "HQs",
    "Educação",
    "Fantasia",
    "Suspense",
    "Computação",
    "Ficção ciêntífica",
  ];

  return (
    <S.Container>
      <S.LocationContainer>
        <Location icon={Binoculars} size={34} text="Explorar" />
        <Input placeholder="Buscar livro ou autor" />
      </S.LocationContainer>
      <S.CategoriesContainer>
        {categories.map((category) => (
          <Category key={category}>{category}</Category>
        ))}
      </S.CategoriesContainer>
      <S.BooksContainer>
        {books.map((book) => (
          <Card.Root size="small">
            <Card.Body>
              <Card.Image size="small" src={book.image} />
              <Card.Content>
                <Card.Title authorName={book.author} bookTitle={book.title} />
                <Card.Stars stars={4.5} />
              </Card.Content>
            </Card.Body>
          </Card.Root>
        ))}
      </S.BooksContainer>
    </S.Container>
  );
};
