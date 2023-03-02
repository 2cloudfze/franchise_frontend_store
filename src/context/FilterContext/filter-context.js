import React from "react";

const FilterContext = React.createContext({
  filterItems: {},
  initialize: (items) => {},
  updateSelectedCategory: (selectedCategory) => {},
});

export default FilterContext;
