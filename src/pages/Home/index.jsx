import { useSelector } from "react-redux";
import Button from "../../components/Button";
import { Container } from "./styles";
import { addProductThunk } from "../../store/modules/cart/thunks.js";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

const Home = () => {
  const products = useSelector((state) => state.products);
  const cart = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  const sendProduct = (product) => {
    const existProduct = cart.some(({ name }) => name === product.name);
    if (!existProduct) {
      dispatch(addProductThunk(product));
    } else {
      toast.error("Produto já está no carrinho");
    }
  };

  return (
    <Container>
      <ul>
        {products.map((product) => {
          return (
            <li key={product.name}>
              <h2>{product.name}</h2>
              <img src={product.image} alt={product.name} />
              <p>{product.description}</p>
              <span>R$ {product.price.toFixed(2).replace(".", ",")}</span>
              <Button
                onClick={() => {
                  sendProduct(product);
                }}
              >
                Adicionar ao Carrinho
              </Button>
            </li>
          );
        })}
      </ul>
    </Container>
  );
};

export default Home;
