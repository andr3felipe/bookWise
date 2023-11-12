import * as S from "./styles";
import bookWise from "../../assets/bookWise.png";
import { Button } from "../../components/Button";
import { Icon } from "../../components/Icon";
import { Link } from "react-router-dom";
export const Login = () => {
  return (
    <S.Container>
      <S.Image>
        <img src={bookWise} alt="Mulher deitada no sofá lendo livro." />
      </S.Image>
      <S.Login>
        <h1>Boas vindas!</h1>
        <p>Faça seu login ou acesse como visitante.</p>
        <Button backgroundColor="gray-600">
          <Icon icon="google" />
          Entrar com o Google
        </Button>
        <Button backgroundColor="gray-600">
          <Icon icon="github" />
          Entrar com o GitHub
        </Button>
        <Link to={"/inicio"} style={{ textDecoration: "none" }}>
          <Button backgroundColor="gray-600">
            <Icon icon="visitante" />
            Entrar como visitante
          </Button>
        </Link>
      </S.Login>
    </S.Container>
  );
};
