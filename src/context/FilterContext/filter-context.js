import React from "react";

const FilterContext = React.createContext({
  filterItems: {},
  categoryItems:{},
  initialize: (items) => {},
  initializeCategory: (items) => {},
});

export default FilterContext;
