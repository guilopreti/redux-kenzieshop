import { Container, SpanNumber, SpanText } from "./styles";
import { BsCart } from "react-icons/bs";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

const Header = () => {
  const cartProducts = useSelector((state) => state.cart);

  const history = useHistory();

  return (
    <Container>
      <h1>Kenzie Shop Music</h1>
      <div onClick={() => history.push("/cart")}>
        <span>
          <BsCart />
          <SpanNumber>
            {cartProducts.length > 0 && <span>{cartProducts.length}</span>}
          </SpanNumber>
        </span>
        <SpanText>Carrinho</SpanText>
      </div>
    </Container>
  );
};

export default Header;
