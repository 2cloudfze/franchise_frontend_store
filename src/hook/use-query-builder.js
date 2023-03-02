const useQueryBuilder = ({
  query,
  updateQuery = (query) => {},
  rowCount = 10,
  isPaginated = true,
  isSku = false,
  sort = "id+asc",
}) => {
  const toNextPage = (cursorMark = "*") => `&cursorMark=${cursorMark}`;
  const buildQueryString = (alter = null) =>
    isSku
      ? `q=${alter ?? query}&wt=json&indent=true`
      : `q=${alter ?? query}&sort=${sort}&rows=${rowCount}&wt=json&indent=true`;

  return {
    head: "select",
    queryString: buildQueryString(),
    next: isPaginated ? toNextPage : isPaginated,
    updateQuery: (query) => buildQueryString(query),
  };
};

export default useQueryBuilder;
