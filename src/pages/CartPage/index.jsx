import { useSelector } from "react-redux";
import Button from "../../components/Button";
import {
  removeProductThunk,
  removeAllProductsThunk,
} from "../../store/modules/cart/thunks.js";
import { useDispatch } from "react-redux";
import { Container, ListContent, InfoContent } from "./styles";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";

const CartPage = () => {
  const cartProducts = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  const history = useHistory();

  const endShop = () => {
    dispatch(removeAllProductsThunk());
    return toast.success("Compra Finalizada");
  };

  return (
    <Container>
      <ListContent>
        <ul>
          {cartProducts.map((product, index) => {
            if (index === cartProducts.length - 1) {
              return (
                <li key={product.name} className="last">
                  <img src={product.image} alt={product.name} />
                  <div>
                    <h2>{product.name}</h2>
                    <span>R$ {product.price.toFixed(2).replace(".", ",")}</span>
                    <Button
                      onClick={() => dispatch(removeProductThunk(product))}
                    >
                      Remover do Carrinho
                    </Button>
                  </div>
                </li>
              );
            } else {
              return (
                <li key={product.name}>
                  <img src={product.image} alt={product.name} />
                  <div>
                    <h2>{product.name}</h2>
                    <span>R$ {product.price.toFixed(2).replace(".", ",")}</span>
                    <Button
                      onClick={() => dispatch(removeProductThunk(product))}
                    >
                      Remover do Carrinho
                    </Button>
                  </div>
                </li>
              );
            }
          })}
        </ul>
      </ListContent>
      <InfoContent>
        <h2>Resumo do Pedido</h2>
        <div>
          <span>{cartProducts.length} Produtos</span>
          <span>
            R${" "}
            {cartProducts
              .reduce((acc, { price }) => {
                return (acc += price);
              }, 0)
              .toFixed(2)
              .replace(".", ",")}
          </span>
        </div>
        <Button onClick={endShop}>Finalizar Pedido</Button>
        <Button className="button-return" onClick={() => history.push("/")}>
          Voltar
        </Button>
      </InfoContent>
    </Container>
  );
};

export default CartPage;
