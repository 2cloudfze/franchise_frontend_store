const useQueryBuilder = ({
  query,
  rowCount = 10,
  isPaginated = true,
  isSku = false,
}) => {
  const changeString = (str) => str.replace(/:/g, "%3A").replace(/ /g, "+");

  const toNextPage = (cursorMark = "*") => `&cursorMark=${cursorMark}`;
  const buildQueryString = () =>
    isSku
      ? `q=${changeString(query)}&wt=json&indent=true`
      : `q=${changeString(
          query
        )}&sort=id+asc&rows=${rowCount}&wt=json&indent=true`;

  return {
    head: "select",
    queryString: buildQueryString(),
    next: isPaginated ? toNextPage : isPaginated,
  };
};

export default useQueryBuilder;
