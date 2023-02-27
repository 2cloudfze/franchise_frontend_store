import { useReducer } from "react";

import FilterContext from "@/context/FilterContext/filter-context";

const defaultFilterState = {
  filterItems: {},
  categoryItems: {},
};

const FilterReducer = (state, action) => {
  switch (action.type) {
    case "Initialize":
      const newFilterList = action.items;
      return {
        ...state,
        filterItems: newFilterList,
      };
    case "InitializeCategory":
      const newCategoryItems = action.items;
      return {
        ...state,
        categoryItems: newCategoryItems,
      };
    default:
      return defaultFilterState;
  }
};

const FilterProvider = (props) => {
  const [filterState, dispatchFilterAction] = useReducer(
    FilterReducer,
    defaultFilterState
  );

  const initializeHandler = (items) => {
    dispatchFilterAction({ type: "Initialize", items });
  };
  const initializeCategoryHandler = (items) => {
    dispatchFilterAction({ type: "InitializeCategory", items });
  };

  const filterContext = {
    filterItems: filterState.filterItems,
    initialize: initializeHandler,
    categoryItems: filterState.categoryItems,
    initializeCategory: initializeCategoryHandler,
  };

  return (
    <FilterContext.Provider value={filterContext}>
      {props.children}
    </FilterContext.Provider>
  );
};

export default FilterProvider;
