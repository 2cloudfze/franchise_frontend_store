import { useRouter } from "next/router";
import useQueryBuilder from "@/hook/use-query-builder";
export default function Item({ name, id }) {
  const router = useRouter();
  const { head, queryString, next } = useQueryBuilder({
    query: `category:${name}`,
    rowCount: 10,
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
        color: "black",
        padding: "10px",
        font: "15px Arial, sans-serif",
        cursor: "pointer",
        background:"lightblue"
      }}
    >
      {name}
    </li>
  );
}
