import React from "react";

const PaginationContext = React.createContext({
  cursors: [],

  addCursors: (cursor) => {},
  initialize: (count, limit) => {},
  setCurrentCursor: (cursor) => {},
  currentCursor: "",
  pageCount: 0,
});

export default PaginationContext;
