export const getKeywords = (arr) => {
  const keywordArr = arr
    .map((el) => el.keyword)
    .reduce(function (acc, el) {
      acc[el] = (acc[el] || 0) + 1;
      return acc;
    }, {});
  let keywordSort = [];
  for (let key in keywordArr) {
    let obj = {};
    obj.name = key;
    obj.count = keywordArr[key];
    keywordSort.push(obj);
    keywordSort.sort((a, b) => b.count - a.count);
  }
  return keywordSort;
};
