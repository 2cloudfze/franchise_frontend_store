import { useContext } from "react";
import FilterContext from "@/context/FilterContext/filter-context";
import { useRouter } from "next/router";
import useQueryBuilder from "@/hook/use-query-builder";
import { MenuItem } from "@mui/material";
import replaceAndSpace from "@/helper";
export default function MenuItemBuilder({
  subCategory,
  subIndex,
  handleMenuClose,
}) {
  const filterContext = useContext(FilterContext);
  const router = useRouter();
  const { head, queryString, next } = useQueryBuilder({
    query: `catname:${replaceAndSpace(subCategory.categories[0])} AND manname:*`,
    rowCount: 8,
  });
  const findBrands = () => {};
  const onClickHandler = () => {
    filterContext.initialize({
      brands: ["Hp", "Lenovo", "Dell", "Allied Telesis","Fujifilm"],
      categories: [...subCategory.categories],
      selectedCategory: subCategory.categories[0],
    });
    router.push({
      pathname: "/products/" + head,
      query: {
        data: `${queryString}${next()}`,
        currentCurser: "*",
        selectedCategory: replaceAndSpace(subCategory.categories[0]),
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
