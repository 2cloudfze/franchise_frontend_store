import { useReducer } from "react";

import PaginationContext from "@/context/PaginationContext/pagination-context";

const defaultPaginationState = {
  cursors: [],
  pageCount: 0,
  currentCursor: "",
};

const PaginationReducer = (state, action) => {
  switch (action.type) {
    case "Initialize":
      const pageCount = Math.round(action.count / action.limit);
      return {
        ...state,
        cursors: ["*"],
        pageCount: pageCount,
        currentCursor: "*",
      };
    case "ADD":
      const isCursorExists = state.cursors.indexOf(action.cursor) !== -1;
      if (!isCursorExists) {
        const newCurserList = state.cursors.concat(action.cursor);
        return {
          ...state,
          cursors: newCurserList,
        };
      }
      return state;

    case "Current":
      return {
        ...state,
        currentCursor: action.cursor,
      };

    default:
      return defaultPaginationState;
  }
};

const PaginationProvider = (props) => {
  const [paginationState, dispatchPaginationAction] = useReducer(
    PaginationReducer,
    defaultPaginationState
  );
  const addCursorHandler = (cursor) => {
    dispatchPaginationAction({ type: "ADD", cursor });
  };

  const initializeHandler = (count, limit) => {
    dispatchPaginationAction({ type: "Initialize", count, limit });
  };
  const setCurrentCursorHandler = (cursor) => {
    dispatchPaginationAction({ type: "Current", cursor });
  };
  const paginationContext = {
    cursors: paginationState.cursors,
    currentCursor: paginationState.currentCursor,

    addCursors: addCursorHandler,
    initialize: initializeHandler,
    pageCount: paginationState.pageCount,
    setCurrentCursor: setCurrentCursorHandler,
  };

  return (
    <PaginationContext.Provider value={paginationContext}>
      {props.children}
    </PaginationContext.Provider>
  );
};

export default PaginationProvider;
