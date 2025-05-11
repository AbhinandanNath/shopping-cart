import { CartContext } from "../store/shopping-cart-context";


export default function Product(productData) {
  // let { id, image, title, price, description } = productData;
  // let { addItemToCart } = useContext(CartContext);
  return (
    <CartContext.Consumer>
      {(cartCtx) => {
        let { id, image, title, price, description } = productData;
        return (
          <article className="product">
          <img src={image} alt={title} />
          <div className="product-content">
            <div>
              <h3>{title}</h3>
              <p className="product-price">${price}</p>
              <p>{description}</p>
            </div>
            <p className="product-actions">
              <button onClick={() => cartCtx.addItemToCart(id)}>Add to Cart</button>
            </p>
          </div>
        </article>
        )
      }}
    </CartContext.Consumer>
   
  );
}
