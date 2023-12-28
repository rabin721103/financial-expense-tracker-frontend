export const incomeHelperFunc = (data = []) => {
  // Create an array to store the result
  const resultArray = [];

  // Get unique category ids
  const categoryIds = [
    ...new Set(data?.map((item) => item?.incomeCategoryName)),
  ];

  // Add header row to the result array
  resultArray.push(["Month", ...categoryIds]);

  // Create a dictionary to store data by month
  const monthData = {};

  // Populate monthData dictionary
  data?.forEach((item) => {
    const key = `${item?.month}-${item?.year}`;
    if (!monthData[key]) {
      monthData[key] = {};
    }

    monthData[key][item?.incomeCategoryName] = item?.totalAmount;
  });

  // Iterate over months and populate resultArray
  for (let month = 1; month <= 12; month++) {
    const row = [month];
    categoryIds?.forEach((categoryId) => {
      const key = `${month}-${2023}`;
      row.push(
        monthData[key] && monthData[key][categoryId]
          ? monthData[key][categoryId]
          : 0
      );
    });
    resultArray.push(row);
  }
  return resultArray;
};

export const pieIncomeHelperFunc = (data = []) => {
  const perYear = {};
  const obj = {};

  data?.forEach((item) => {
    const { year, incomeCategoryName, totalAmount } = item;
    if (!obj[year]) {
      obj[year] = {};
    }
    if (!obj[year][incomeCategoryName]) {
      obj[year][incomeCategoryName] = 0;
    }

    obj[year][incomeCategoryName] += totalAmount;
  });

  Object.keys(obj).forEach((year) => {
    perYear[year] = [["Category", "Amount"]];
    Object.keys(obj[year]).forEach((cat) => {
      perYear[year].push([cat, obj[year][cat]]);
    });
  });
  return perYear;
};
