import React from "react";

const FilterContext = React.createContext({
  filterItems: {},
  initialize: (items) => {},
});

export default FilterContext;
