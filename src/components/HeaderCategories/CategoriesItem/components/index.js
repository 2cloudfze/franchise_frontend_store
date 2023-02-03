import { useRouter } from "next/router";
import useQueryBuilder from "@/hook/use-query-builder";
export default function Item({ name, id, category }) {
  const router = useRouter();
  const { head, queryString, next } = useQueryBuilder({
    query: `category:${category}`,
    rowCount: 8,
  });
  const onClickHandler = () =>
    router.push({
      pathname: "/products/" + head,
      query: { data: `${queryString}${next()}` },
    });
  return (
    <li
      onClick={onClickHandler}
      key={id}
      style={{
        color: "white",
        padding: "10px",
        font: "15px Arial, sans-serif",
        cursor: "pointer",
        borderBottom: "2px solid #f5f5f5",
      }}
    >
      {name}
    </li>
  );
}
