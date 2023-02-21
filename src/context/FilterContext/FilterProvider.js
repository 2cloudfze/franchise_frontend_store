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
        filterItems: newFilterList,
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

  const filterContext = {
    filterItems: filterState.filterItems,
    initialize: initializeHandler,
  };

  return (
    <FilterContext.Provider value={filterContext}>
      {props.children}
    </FilterContext.Provider>
  );
};

export default FilterProvider;
