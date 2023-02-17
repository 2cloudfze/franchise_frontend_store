import { useRouter } from "next/router";
import useQueryBuilder from "@/hook/use-query-builder";
import SubHeaderTypography from "@/components/Typography/SubHeaderTypography";
import MDBox from "@/components/MDBox";

export default function Item({ name, id, category }) {
  const router = useRouter();
  const { head, queryString, next } = useQueryBuilder({
    query: `category:${category}`,
    rowCount: 8,
  });
  const onClickHandler = () =>
    router.push({
      pathname: "/products/" + head,
      query: { data: `${queryString}${next()}`, currentCurser: "*" },
    });
  return (
    <MDBox
      onClick={onClickHandler}
      key={id}
      sx={{
        "&:hover": {
          color: "#737170",
        },
      }}
    >
      <SubHeaderTypography fontSize="10px">{name}</SubHeaderTypography>
    </MDBox>
  );
}
