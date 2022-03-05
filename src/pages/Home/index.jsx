import { useSelector } from "react-redux";
import Button from "../../components/Button";
import { Container } from "./styles";

const Home = () => {
  const products = useSelector((state) => state.products);

  return (
    <Container>
      <ul>
        {products.map(({ name, price, image, description }) => {
          return (
            <li>
              <h2>{name}</h2>
              <img src={image} alt={name} />
              <p>{description}</p>
              <span>{price}</span>
              <Button>Adicionar ao Carrinho</Button>
            </li>
          );
        })}
      </ul>
    </Container>
  );
};

export default Home;
