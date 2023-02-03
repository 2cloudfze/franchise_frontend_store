import { useRouter } from "next/router";
import useQueryBuilder from "@/hook/use-query-builder";

export default function CardComponent({ image, title, parent }) {
  const router = useRouter();
  const { head, queryString, next } = useQueryBuilder({
    query: `category:${parent} AND manname:${title}`,
    rowCount: 10,
  });
  const onClickHandler = () =>
    router.push({
      pathname: "/products/" + head,
      query: { data: `${queryString}${next()}` },
    });
  return (
    <article onClick={onClickHandler}>
      <div className="icon-img-box">
        <img className="icon-img" src={image} alt="No image found" />
      </div>

      <p className="icon-title">{title}</p>

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
          margin-right: 20px;
        }

        .icon-title {
          width: 80%;
          line-height: 20px;
          text-decoration: none;
          font-weight: 500;
          font-size: 18px;
          cursor:pointer;
          text-align: center;
          color: black;
          margin-bottom: 18px;
          text-transform: uppercase;
        }

        .icon-title:hover {
          font-weight: 600;
        }
      `}</style>
    </article>
  );
}