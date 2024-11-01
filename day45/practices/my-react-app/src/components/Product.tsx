const Product = (props) => {
  return (
    <div>
      <h3>{props.name}</h3>
      <p>가격: {props.price}원</p>
      <p>재고: {props.stock > 0 ? "있음" : "없음"}</p>
      <button onClick={props.onAddToCart} disabled={props.stock === 0}>
        장바구니에 추가
      </button>
    </div>
  );
};

export default Product;
