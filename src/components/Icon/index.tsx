import googleIcon from "../../assets/google.svg";
import githubIcon from "../../assets/github.svg";
import visitanteIcon from "../../assets/visitante.svg";
import bookWiseIcon from "../../assets/bookWise.svg";

type IconProps = {
  icon: "google" | "github" | "visitante" | "bookWise";
};

const icons = {
  google: googleIcon,
  github: githubIcon,
  visitante: visitanteIcon,
  bookWise: bookWiseIcon,
};

export const Icon = ({ icon }: IconProps) => {
  return <img src={icons[icon]} />;
};
