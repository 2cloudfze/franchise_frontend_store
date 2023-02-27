import { useContext } from "react";
import FilterContext from "@/context/FilterContext/filter-context";
import { useRouter } from "next/router";
import useQueryBuilder from "@/hook/use-query-builder";
import { MenuItem } from "@mui/material";
export default function MenuItemBuilder({
  subCategory,
  subIndex,
  handleMenuClose,
}) {
  const filtercontext = useContext(FilterContext);
  const router = useRouter();
  const { head, queryString, next } = useQueryBuilder({
    query: `catname:${subCategory.categories[0]}`,
    rowCount: 8,
  });
  const findBrands = () => {};
  const onClickHandler = () => {
    filtercontext.initializeCategory({
      categories: [...subCategory.categories],
    });
    router.push({
      pathname: "/products/" + head,
      query: {
        data: `${queryString}${next()}`,
        currentCurser: "*",
        selectedCategory: subCategory.categories[0],
      },
    });

    handleMenuClose();
  };
  return (
    <MenuItem onClick={onClickHandler} key={subIndex}>
      {subCategory.displayname}
    </MenuItem>
  );
}
