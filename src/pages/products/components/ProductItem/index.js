import { useRouter } from "next/router";
import useQueryBuilder from "@/hook/use-query-builder";
import CartContext from "@/context/CartContext/cart-context";
import { useContext } from "react";
import SnackBarButton from "@/pages/products/components/SnackBarButton";

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

  const { head, queryString } = useQueryBuilder({
    query: `sku_str:${partNumber}`,
    rowCount: 0,
    isSku: true,
  });

  const onClickHandler = () =>
    router.push({
      pathname: "/products/productdetails/" + head,
      query: { data: `${queryString}`, id },
    });

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

  return (
    <article>
      <div onClick={onClickHandler}>
        <div className="product-img-box">
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

        <div className="desc">{description ? <p>{description}</p> : null}</div>

        <div className="item">
          {manuName ? <p className="obj">{manuName}</p> : null}
          {cat ? <p className="obj"> {cat}</p> : null}
          {partNumber ? <p className="obj"> {partNumber}</p> : null}
          <p className="obj">
            Stock : {inStock ? "Available" : "Please check Availability"}
          </p>
        </div>

        <p className="price">${price}</p>
      </div>

      <SnackBarButton item={item} cartContext={cartContext} />
      <style jsx>{`
        article {
          display: flex;
          align-items: center;
          flex-direction: column;
          box-sizing: border-box;
          height: 100%;
          padding: 14px;
          background: #ffff;
          color: #090808;
          box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.05);
          border-radius: 6px;
          font-family: "AvenirLTStd-Roman";
          cursor: pointer;
          line-height: 1.8px;
          line-spacing: 1px;
          font-size: 15px;
        }
        .desc {
          align-items: center;
          margin-left: 20px;
          margin-right: 20px;
          line-height: 1.5;
        }
        .item {
          align-items: center;
          margin-left: 20px;
          margin-right: 20px;
        }
        .item .obj {
          margin-top: 5px;
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
          max-width: 210px;
        }
        .product-img {
          width: 225px;
          height: 160px;
          object-fit: scale-down;
        }
        .product-name {
          width: 80%;
          line-height: 20px;
          text-decoration: none;
          font-size: 20px;
          text-align: center;
          margin-bottom: 18px;
        }
        .product-name:hover {
          text-decoration: underline;
          font-weight: 700;
          cursor: pointer;
        }
        .price {
          display: flex;
          margin-left: 18px;
          align-items: center;
          font-weight: 900;
          font-size: 16px;
          padding-top: 10px;
        }
      `}</style>
    </article>
  );
}
