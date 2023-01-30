import { useRouter } from "next/router";
import useQueryBuilder from "@/hook/use-query-builder";
import CartContext from "@/context/CartContext/cart-context";
import { useContext } from "react";

export default function ProductItem({
  id,
  name,
  img_url,
  price,
  manuName,
  partNumber,
  cat,
  inStock,
  description,
}) {
  const router = useRouter();
  const cartContext = useContext(CartContext);

  const { head, queryString, next } = useQueryBuilder({
    query: `sku:${partNumber}`,
    rowCount: 10,
  });
  const onClickHandler = () =>
    router.push({
      pathname: "/products/productdetails/" + head,
      query: { data: `${queryString}` },
    });

  const AddToCartHandler = () => {
    const item = {
      id,
      name,
      img_url: img_url
        ? img_url
        : `https://d2v8x7eqx4g1su.cloudfront.net/brand_images/${manuName.toLowerCase()}.jpg`,
      price,
      partNumber,
      cat,
    };
    cartContext.addItem({ ...item, qty: 1, total: price * 1 });
  };
  return (
    <article>
      <div className="product-img-box">
        {/* <Link href={`/product/${id}`}> */}
        <img
          className="product-img"
          src={
            img_url
              ? img_url
              : `https://d2v8x7eqx4g1su.cloudfront.net/brand_images/${manuName.toLowerCase()}.jpg`
          }
          alt="Image not found"
        />
      </div>

      <div className="product-name" onClick={onClickHandler}>
        {name}
      </div>

      <div className="desc">
        {description ? <p>Description : {description}</p> : null}
      </div>

      <div className="item">
        {manuName ? <p className="obj">Manufacture : {manuName}</p> : null}
        {cat ? <p className="obj">Category : {cat}</p> : null}
        {partNumber ? <p className="obj">Part No : {partNumber}</p> : null}
        <p className="obj">
          Stock : {inStock ? "Available" : "Please check Availability"}
        </p>
      </div>

      <div className="price">
        <p className="price-value">${price}</p>
        <button className="add-cart" onClick={AddToCartHandler}>
          Add Cart
        </button>
      </div>

      <style jsx>{`
        article {
          display: flex;
          align-items: center;
          flex-direction: column;
          box-sizing: border-box;
          height: 100%;
          padding: 24px;
          background: white;
          box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.05);
          border-radius: 6px;
        }
        .desc {
          align-items: center;
          margin-left: 20px;
          margin-right: 20px;
          // background:lightblue;
          line-height: 1.5;
        }
        .item {
          align-items: center;
          margin-left: 20px;
          margin-right: 20px;
          margin-top: px;
          // background:lightblue;
        }
        .item .obj {
          margin-top: 10px;
        }
        .top-buttons {
          margin-bottom: 24px;
          align-self: flex-end;
        }
        .top-buttons .add-wishlist {
          background: none;
          border: none;
        }
        .top-buttons .add-wishlist:focus {
          outline: none;
        }
        .product-img-box {
          margin-bottom: 28px;
        }
        .product-img {
          width: 225px;
          height: 160px;
          object-fit: contain;
        }
        .product-name {
          width: 80%;
          line-height: 20px;
          text-decoration: none;
          font-weight: 500;
          font-size: 20px;
          text-align: center;
          color: #8a0a0a;
          margin-bottom: 18px;
        }
        .product-name:hover {
          text-decoration: underline;
          font-weight: 700;
          cursor: pointer;
        }
        .price {
          display: flex;
          align-items: center;
          font-weight: 900;
          font-size: 16px;
          color: #666666;
        }

        .price .add-cart {
          width: 100%;
          border: none;
          margin-top: 105px;
          margin-left: -40px;
          padding: 15px 20px;
          background: linear-gradient(195deg, #1260a3, #1a73e8, #36c7c7);
          border-radius: 20px;
          color: white;
          cursor: pointer;
        }
        .price .add-cart:focus {
          outline: none;
        }
      `}</style>
    </article>
  );
}
