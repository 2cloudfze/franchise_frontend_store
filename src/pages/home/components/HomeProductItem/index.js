import { useRouter } from "next/router";

export default function HomeProductItem({ id, image, title, brands, link }) {
  const router = useRouter();

  return (
    <div>
      <article>
        <div onClick={() => router.push(`/brand_catalog/${id}`)}>
          <div className="homeproduct-img-box">
            <img className="homeproduct-img" src={image} alt="error" />
          </div>

          <p className="product-title">{title}</p>
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
            box-shadow: 6px 2px 5px rgba(0, 0, 0, 0.05);
            border-radius: 6px;
            margin-right: 20px;
            margin-top: 6px;
            cursor: pointer;
          }
          .homeproduct-img-box {
            margin-bottom: 28px;
          }
          .homeproduct-img {
            width: 225px;
            height: 160px;
            object-fit: contain;
          }
          .product-title {
            width: 80%;
            line-height: 20px;
            text-decoration: none;
            font-weight: 500;
            font-size: 18px;

            text-align: center;
            color: black;
            margin-bottom: 18px;
          }
          .categories-search {
            background: #e6fafa;
            max-width: 120px;
            border: 1px solid black;
            margin: 10px auto;
            font-size: 10px;
            padding: 5px;
            color: #7a0b34;
            border-radius: 45px;
            object-fit: cover;
            box-shadow: 0px 2px 5px rgba(189, 170, 174);
          }
          .product-title:hover {
            font-weight: 600;
          }
        `}</style>
      </article>
    </div>
  );
}
