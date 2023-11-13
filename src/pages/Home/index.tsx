import * as S from "./styles";
import { Card } from "../../components/shared/Card";
import { Location } from "../../components/shared/Location";
import { ChartLineUp } from "@phosphor-icons/react";
import book from "../../assets/book.png";
import avatar from "../../assets/avatar.png";

export const Home = () => {
  return (
    <S.Container>
      <Location icon={ChartLineUp} size={34} text="Início" />

      <S.Main>
        <S.RecentRatings>
          <S.Text>Avaliações mais recentes</S.Text>

          <Card.Root size="large">
            <Card.Head>
              <Card.Profile avatar={avatar} date="Hoje" name="Andre Felipe" />
              <Card.Stars stars={1.9} />
            </Card.Head>
            <Card.Body>
              <Card.Image size="large" src={book} />
              <Card.Content>
                <Card.Title authorName="J.R.R Tolkien" bookTitle="O Hobbit" />
                <Card.Summary text="Nec tempor nunc in egestas. Euismod nisi eleifend at et in sagittis. Penatibus id vestibulum imperdiet a at imperdiet lectus leo. Sit porta eget nec vitae sit vulputate eget" />
              </Card.Content>
            </Card.Body>
          </Card.Root>
        </S.RecentRatings>

        <S.PopularBooks>
          <S.Text>Livros populares</S.Text>

          <Card.Root size="small">
            <Card.Body>
              <Card.Image size="small" src={book} />
              <Card.Content>
                <Card.Title authorName="J.R.R Tolkien" bookTitle="O Hobbit" />
                <Card.Stars stars={4} />
              </Card.Content>
            </Card.Body>
          </Card.Root>
        </S.PopularBooks>
      </S.Main>
    </S.Container>
  );
};
