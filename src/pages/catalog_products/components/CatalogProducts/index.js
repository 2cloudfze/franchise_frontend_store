import useQueryBuilder from "@/hook/use-query-builder";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { CircleLoader } from "react-spinners";
export default function CatalogProducts({ catalogName }) {
  const router = useRouter();
  const { head, queryString, next } = useQueryBuilder({
    query: `category:${catalogName} AND manname:*`,
    rowCount: 8,
  });

  useEffect(() => {
    if (router.isReady) {
      router.push({
        pathname: "/products/" + head,
        query: { data: `${queryString}${next()}` },
      });
    }
  }, []);

  return <></>;
}
