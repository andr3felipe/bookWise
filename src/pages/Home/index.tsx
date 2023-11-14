import * as S from "./styles";
import { Card } from "../../components/shared/Card";
import { Location } from "../../components/shared/Location";
import { ChartLineUp } from "@phosphor-icons/react";
import book from "../../assets/book.png";
import avatar from "../../assets/avatar.png";
import { books } from "../../books/books";

export const Home = () => {
  return (
    <S.Container>
      <Location icon={ChartLineUp} size={34} text="Início" />

      <S.Main>
        <S.MainAlign>
          <S.LastReadings>
            <S.Text>Sua última leitura</S.Text>

            <Card.Root size="medium">
              <Card.Body>
                <Card.Image size="large" src={book} />
                <Card.Content>
                  <Card.Head size="medium">
                    <Card.Profile date="Hoje" />
                    <Card.Stars stars={4} />
                  </Card.Head>
                  <Card.Title authorName="J.R.R Tolkien" bookTitle="O Hobbit" />
                  <Card.Summary
                    size="medium"
                    text="Nec tempor nunc in egestas. Euismod nisi eleifend at et in sagittis.
                     Penatibus id vestibulum imperdiet a at imperdiet lectus leo. Sit porta
                      eget nec vitae sit vulputate eget"
                  />
                </Card.Content>
              </Card.Body>
            </Card.Root>
          </S.LastReadings>

          <S.RecentRatings>
            <S.Text>Avaliações mais recentes</S.Text>

            {books.slice(0, 4).map((book) => (
              <Card.Root size="large">
                <Card.Head size="large">
                  <Card.Profile
                    avatar={avatar}
                    date="Hoje"
                    name="Andre Felipe"
                  />
                  <Card.Stars stars={4} />
                </Card.Head>
                <Card.Body>
                  <Card.Image size="large" src={book.image} />
                  <Card.Content>
                    <Card.Title
                      authorName={book.author}
                      bookTitle={book.title}
                    />
                    <Card.Summary
                      size="large"
                      text="Nec tempor nunc in egestas. Euismod nisi eleifend at et in sagittis.
                     Penatibus id vestibulum imperdiet a at imperdiet lectus leo. Sit porta 
                     eget nec vitae sit vulputate eget"
                    />
                  </Card.Content>
                </Card.Body>
              </Card.Root>
            ))}
          </S.RecentRatings>
        </S.MainAlign>
        <S.PopularBooks>
          <S.Text spacing="16px">Livros populares</S.Text>

          <S.PopularBooksAlign>
            {books.slice(0, 4).map((book) => (
              <Card.Root size="small">
                <Card.Body>
                  <Card.Image size="small" src={book.image} />
                  <Card.Content>
                    <Card.Title
                      authorName={book.author}
                      bookTitle={book.title}
                    />
                    <Card.Stars stars={4.5} />
                  </Card.Content>
                </Card.Body>
              </Card.Root>
            ))}
          </S.PopularBooksAlign>
        </S.PopularBooks>
      </S.Main>
    </S.Container>
  );
};
