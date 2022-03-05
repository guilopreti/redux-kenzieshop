import { Container, SpanNumber, SpanText } from "./styles";
import { BsCart } from "react-icons/bs";

const Header = () => {
  return (
    <Container>
      <h1>Kenzie Shop Music</h1>
      <div>
        <span>
          <BsCart />
          <SpanNumber>
            <span>0</span>
          </SpanNumber>
        </span>
        <SpanText>Carrinho</SpanText>
      </div>
    </Container>
  );
};

export default Header;
