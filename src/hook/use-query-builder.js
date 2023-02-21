const useQueryBuilder = ({
  query,
  updateQuery = (query) => {},
  rowCount = 10,
  isPaginated = true,
  isSku = false,
}) => {
  const changeString = (str) => str.replace(/:/g, "%3A").replace(/ /g, "+");

  const toNextPage = (cursorMark = "*") => `&cursorMark=${cursorMark}`;
  const buildQueryString = (alter = null) =>
    isSku
      ? `q=${changeString(alter ?? query)}&wt=json&indent=true`
      : `q=${changeString(
          alter ?? query
        )}&sort=id+asc&rows=${rowCount}&wt=json&indent=true`;

  return {
    head: "select",
    queryString: buildQueryString(),
    next: isPaginated ? toNextPage : isPaginated,
    updateQuery: (query) => buildQueryString(query),
  };
};

export default useQueryBuilder;
