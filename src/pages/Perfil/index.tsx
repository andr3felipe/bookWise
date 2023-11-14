import { User } from "@phosphor-icons/react";
import * as S from "./styles";
import { Location } from "../../components/shared/Location";
import { Input } from "../../components/Input";
import { books } from "../../books/books";
import { Card } from "../../components/shared/Card";

export const Perfil = () => {
  return (
    <S.Container>
      <S.LocationContainer>
        <Location icon={User} size={34} text="Perfil" />
        <Input placeholder="Buscar livro avaliado" />
      </S.LocationContainer>
      <S.Main>
        {books.slice(0, 4).map((book) => (
          <>
            <Card.Root size="xl">
              <Card.Head size="xl" gap={24}>
                <Card.Image src={book.image} size="medium" />
                <Card.Content justifyContent="space-between">
                  <Card.Title bookTitle={book.title} authorName={book.author} />
                  <Card.Stars stars={4} />
                </Card.Content>
              </Card.Head>
              <Card.Body>
                <Card.Summary
                  padding="24px 0px 0px 0px"
                  size="large"
                  text="Entendendo Algoritmos
Aditya Bhargava
Tristique massa sed enim lacinia odio. Congue ut faucibus nunc vitae non. Nam feugiat vel morbi viverra vitae mi. Vitae fringilla ut et suspendisse enim suspendisse vitae. Leo non eget lacus sollicitudin tristique pretium quam. Mollis et luctus amet sed convallis varius massa sagittis.
Proin sed proin at leo quis ac sem. Nam donec accumsan curabitur amet tortor quam sit. Bibendum enim sit dui lorem urna amet elit rhoncus ut. Aliquet euismod vitae ut turpis. Aliquam amet integer pellentesque."
                />
              </Card.Body>
            </Card.Root>
          </>
        ))}
      </S.Main>
    </S.Container>
  );
};
