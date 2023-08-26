export const filterData = (searchText, totalData) => {
  const filteredData = totalData.filter((item) =>
    item?.info?.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return filteredData;
};
