import { useRouter } from "next/router";
import useQueryBuilder from "@/hook/use-query-builder";
import { MenuItem } from "@mui/material";
export default function MenuItemBuilder({
  subCategory,
  subIndex,
  handleMenuClose,
}) {
  const router = useRouter();
  const { head, queryString, next } = useQueryBuilder({
    query: `category:${subCategory.category}`,
    rowCount: 8,
  });
  const onClickHandler = () => {
    router.push({
      pathname: "/products/" + head,
      query: { data: `${queryString}${next()}`, currentCurser: "*" },
    });
    handleMenuClose();
  };
  return (
    <MenuItem onClick={onClickHandler} key={subIndex}>
      {subCategory.displayname}
    </MenuItem>
  );
}
