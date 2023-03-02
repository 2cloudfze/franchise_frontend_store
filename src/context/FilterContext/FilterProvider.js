import { useReducer } from "react";

import FilterContext from "@/context/FilterContext/filter-context";

const defaultFilterState = {
  filterItems: {},
};

const FilterReducer = (state, action) => {
  switch (action.type) {
    case "Initialize":
      const newFilterList = action.items;
      return {
        ...state,
        filterItems: newFilterList,
      };
    case "updateCategory":
      const newSelectedCategory = action.category;

      return {
        filterItems: {
          ...state.filterItems,
          selectedCategory: newSelectedCategory,
        },
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
  const updateSelectedCategoryHandler = (category) => {
    dispatchFilterAction({ type: "updateCategory", category });
  };

  const filterContext = {
    filterItems: filterState.filterItems,
    initialize: initializeHandler,
    updateSelectedCategory: updateSelectedCategoryHandler,
  };

  return (
    <FilterContext.Provider value={filterContext}>
      {props.children}
    </FilterContext.Provider>
  );
};

export default FilterProvider;
