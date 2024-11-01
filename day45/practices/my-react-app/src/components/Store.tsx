import Product from "./Product";

const Store = () => {
  const handleAddToCart = (prodctName) => {
    alert(`${prodctName}이 장바구니에 추가되었습니다.`);
  };

  return (
    <div>
      <h2>상품 목록</h2>

      <Product
        name="노트북"
        price={1500000}
        stock={5}
        onAddToCart={() => handleAddToCart("노트북")}
      />

      <Product
        name="스마트폰"
        price={8000000}
        stock={0}
        onAddToCart={() => handleAddToCart("스마트폰")}
      />
    </div>
  );
};

export default Store;
